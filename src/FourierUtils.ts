class Complex {
    re: number;
    im: number;

    constructor(re: number, im: number) {
        this.re = re;
        this.im = im;
    }

    add(other: Complex): Complex {
        return new Complex(this.re + other.re, this.im + other.im);
    }

    downscale(divisor: number): Complex {
        return new Complex(this.re / divisor, this.im / divisor);
    }

    exp(): Complex {
        return new Complex(
            Math.exp(this.re) * Math.cos(this.im),
            Math.exp(this.re) * Math.sin(this.im)
        );
    }

    mul(other: Complex): Complex {
        return new Complex(
            this.re * other.re - this.im * other.im,
            this.re * other.im + this.im * other.re
        );
    }

    sub(other: Complex): Complex {
        return new Complex(this.re - other.re, this.im - other.im);
    }
}

class FourierCircle {
    sample: Complex;
    centre: SVGElement;
    circle: SVGElement;
    radius: SVGElement;

    constructor(position: Complex, sample: Complex, color: string) {
        this.sample = sample;

        this.centre = document.createElementNS(FourierDiagram.svgNamespace, "circle") as SVGCircleElement;
        this.circle = document.createElementNS(FourierDiagram.svgNamespace, "circle") as SVGCircleElement;
        this.radius = document.createElementNS(FourierDiagram.svgNamespace, "line") as SVGLineElement;

        this.centre.setAttribute("class", "centrePoint");
        this.centre.setAttribute("r", "2");
        
        this.circle.setAttribute("class", "bigCircle");
        this.circle.setAttribute("r", `${Math.sqrt(this.sample.im * this.sample.im + this.sample.re * this.sample.re)}`);
        this.circle.setAttribute("stroke", color);
        

        this.radius.setAttribute("class", "radius");
        this.radius.setAttribute("stroke", color);

        this.update(position, this.sample);
    }

    update(position: Complex, end: Complex): void {
        this.centre.setAttribute("cx", `${position.re}`);
        this.centre.setAttribute("cy", `${position.im}`);

        this.circle.setAttribute("cx", `${position.re}`);
        this.circle.setAttribute("cy", `${position.im}`);

        this.radius.setAttribute("x1", `${position.re}`);
        this.radius.setAttribute("y1", `${position.im}`);

        this.radius.setAttribute("x2", `${end.re}`);
        this.radius.setAttribute("y2", `${end.im}`);
    }
}

class FourierDiagram {
    static svgNamespace = "http://www.w3.org/2000/svg";
    static margin = 1.3;

    diagram: HTMLElement;
    period: number;
    polyline: Complex[];
    transform: FourierCircle[];
    width: number;
    height: number;

    constructor(div: HTMLElement, path: [number, number][], period: number, colors: string[], width: number, height: number) {
        this.diagram = div;
        this.period = period * path.length;
        this.polyline = path.map((point) => new Complex(point[0], point[1]));
        this.transform = FourierDiagram.getTransform(this.polyline, colors);
        this.width = width
        this.height = height
    }

    static waitForFrame(): Promise<number> {
        return new Promise((resolve) => {
            window.requestAnimationFrame((time) => resolve(time));
        });
    }

    static getTransform(polyline: Complex[], colors: string[]): FourierCircle[] {
        const N = polyline.length;
        const transform: FourierCircle[] = [];
        for (let k = 0; k < N; k++) {
            let current = new Complex(0, 0);
            for (let n = 0; n < N; n++) {
                const coef = new Complex(0, 2 * Math.PI * k * n / N);
                current = current.add(coef.exp().mul(polyline[n]));
            }

            const color = colors[k % colors.length];
            transform.push(new FourierCircle(new Complex(0, 0), current.downscale(N), color));
        }
        return transform;
    }

    boundingBox(): string {
        let right = this.polyline[0].re;
        let left = right;
        let top = this.polyline[1].im;
        let bottom = top;
    
        this.polyline.forEach((point) => {
            left = Math.min(point.re, left);
            right = Math.max(point.re, right);
            top = Math.min(point.im, top);
            bottom = Math.max(point.im, bottom);
        });
    
        const width = (right - left) * FourierDiagram.margin;
        const height = (bottom - top) * FourierDiagram.margin;
        const length = Math.max(width, height);
        
        const x = (left + right - length) / 2;
        const y = (top + bottom - length) / 2;
        
        return `${x} ${y} ${length} ${length}`;
    }

    async draw(imagePath: string): Promise<void> {
        this.diagram.innerHTML = "";
    
        const elemSVG = document.createElementNS(FourierDiagram.svgNamespace, "svg");
        elemSVG.setAttribute("width", this.width.toString());
        elemSVG.setAttribute("height", this.height.toString());
        elemSVG.setAttribute("viewBox", this.boundingBox());
        this.diagram.appendChild(elemSVG);
    
        this.transform.forEach((circle) => {
            elemSVG.appendChild(circle.centre);
            elemSVG.appendChild(circle.circle);
            elemSVG.appendChild(circle.radius);
        });
    
        const endCircle = document.createElementNS(FourierDiagram.svgNamespace, "circle");
        endCircle.setAttribute("class", "endCircle");
        endCircle.setAttribute("cx", "0");
        endCircle.setAttribute("cy", "0");
        endCircle.setAttribute("r", "4");
        elemSVG.appendChild(endCircle);
    
        const traceLine = document.createElementNS(FourierDiagram.svgNamespace, "polyline");
        traceLine.setAttribute("class", "traceLine");
        traceLine.setAttribute("points", "0,0 ");
        elemSVG.appendChild(traceLine);
    
        let currentRoundPath = "";
        let totalTracedPath = "";

        const startTime = Date.now();
        let elapsedTime = 0;

        let time = await FourierDiagram.waitForFrame();
        let loopCount = 0 

        while (true) {  // Infinite loop

            const now = Date.now();
            elapsedTime = now - startTime;

            let acc = new Complex(0, 0);
    
            const n = time % this.period;
            const N = this.transform.length;
            const nyquist = Math.floor(this.transform.length / 2);
    
            this.transform.forEach((circle, k) => {
                if (k > nyquist) {
                    k -= N;
                }
    
                const oldAcc = acc;
                const angle = new Complex(0, 2 * Math.PI * k * n / this.period);
                acc = acc.add(angle.exp().mul(circle.sample));
    
                circle.update(oldAcc, acc);
            });
    
            endCircle.setAttribute("cx", `${acc.re}`);
            endCircle.setAttribute("cy", `${acc.im}`);
    
            currentRoundPath += ` ${acc.re},${acc.im}`;
            traceLine.setAttribute("points", totalTracedPath + currentRoundPath);
    
            time = await FourierDiagram.waitForFrame();
    
            // Reset time and currentRoundPath once animation completes for the given period
            if (elapsedTime > 5000) {
                time -= this.period;  // Reset the time keeping the difference
                totalTracedPath += currentRoundPath + " ";  // Append the current round path to the total traced path
                currentRoundPath = "";  // Reset only the current round path

                 // Make circles, lines, nd radii invisible
                 if (loopCount == 0){

                    this.transitionToImage(imagePath);

                    // this.transform.forEach(circle => {
                    //     circle.centre.setAttribute("visibility", "hidden");
                    //     circle.circle.setAttribute("visibility", "hidden");
                    //     circle.radius.setAttribute("visibility", "hidden");
                    // });
                    // endCircle.setAttribute("visibility", "hidden");  // Hide endCircle

                    // break;  // Exit the loop once the drawing is complete
                }
                
                loopCount += 1;

            }
        }
    }

    transitionToImage(imagePath: string): void {
        // Ensure the container is positioned relatively
        this.diagram.style.position = 'relative';
        
        // Create an image element
        const image = document.createElement('img');
        image.src = imagePath;  // The path to your image
        image.style.transition = 'opacity 1s';  // Add a fade-in and transform animation
        image.style.opacity = '0';
        image.style.width = '100%';
        // image.style.height = '100%';  // Set height to 100% to cover the Fourier visualization
        image.style.position = 'absolute';  // Position the image absolutely
        image.style.top = '0';  // Align to the top
        image.style.left = '0';  // Align to the left
        image.style.filter = 'grayscale(1)';  // Convert the image to black and white
        image.style.borderRadius = '50%';  // Add rounded corners
        image.style.transform = 'scale(0.85) translateY(-7%) translateX(-2%)';  // Start with the image translated to the left
        image.style.zIndex = "5"
    
        // Append the image to the diagram container on top of the Fourier visualization
        this.diagram.appendChild(image);
        
        // Trigger the fade-in and transform animation after a brief delay
        setTimeout(() => {
            image.style.opacity = '0.4'; 
        }, 1);
    
        // Add event listeners for mouseenter and mouseleave
        image.addEventListener('mouseenter', () => {
            // image.style.transition = 'opacity 0.5s';  // Set transition duration for fade-out
            image.style.opacity = '0.05';  // Set opacity for fade-out
        });
        
        image.addEventListener('mouseleave', () => {
            // image.style.transition = 'opacity 0.5s';  // Set transition duration for fade-in
            image.style.opacity = '0.4';  // Reset opacity to original value for fade-in
        });
    }
    
    
    
    
}

export { FourierDiagram };

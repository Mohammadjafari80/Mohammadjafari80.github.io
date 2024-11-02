import React, { useRef, useEffect, useState } from 'react';
import { FourierDiagram } from './FourierUtils';

interface FourierVisProps {
    timePerPoint: number;
    filePath: string;
    width?: number;
    height?: number;
}

const FourierVis: React.FC<FourierVisProps> = ({ timePerPoint, filePath, width = 512, height = 512 }) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const divRef = useRef<HTMLDivElement>(null);
    const [path, setPath] = useState<[number, number][]>([]);
    const colors = ["rgb(63, 110, 231)", "rgba(208, 90, 69)", "rgba(74, 156, 128)"];

    // Detect if the current device is iOS or iPadOS
    const isIOSOrIPadOS = () => {
        return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
    }

    useEffect(() => {
        // Fetch path data from the specified file
        fetch(filePath)
            .then(response => response.text())
            .then(data => {
                const lines = data.trim().split('\n');
                const parsedPath = lines.map(line => {
                    const [x, y] = line.split(',').map(Number);
                    return [x, y];
                });
                setPath(parsedPath as [number, number][]);
            });
    }, [filePath]);

    useEffect(() => {
        if (divRef.current && path.length > 0) {
            if (isIOSOrIPadOS()) {
                // For iOS or iPadOS, display a static image instead
                // const diagram = new FourierDiagram(divRef.current, path, timePerPoint, colors, width, height);
                // diagram.transitionToImage('/portfolio.png');
            } else {
                // Perform the animated Fourier diagram rendering on other devices
                const diagram = new FourierDiagram(divRef.current, path, timePerPoint, colors, width, height);
                diagram.draw('/portfolio.png');
            }
        }
    }, [path, timePerPoint, width, height]);

    return (
        <div 
            ref={containerRef} 
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
            }}
        >
            {isIOSOrIPadOS() ? (
                // Static image for iOS and iPadOS with descriptive alt text
                <img 
                    src="/portfolio.png" 
                    alt="Static Fourier series visualization of a profile image, representing signal approximation with rotating vectors" 
                    style={{ width: width, height: height, borderRadius: '50%' }} 
                />
            ) : (
                // Render the animated Fourier diagram on non-iOS devices
                <div 
                    style={{
                        overflow: 'hidden',
                        width: width,
                        height: height,
                    }}
                >
                    <div 
                        ref={divRef} 
                        style={{
                            transform: 'scale(1)',
                            transformOrigin: 'center center',
                        }} 
                    />
                </div>
            )}
        </div>
    );
}

export default FourierVis;

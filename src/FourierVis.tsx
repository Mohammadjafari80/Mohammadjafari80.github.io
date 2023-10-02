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

    useEffect(() => {
        // Fetch the path from the provided txt file path
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
            const diagram = new FourierDiagram(divRef.current, path, timePerPoint, colors, width, height);
            diagram.draw();
        }
    }, [path, timePerPoint]);

    return (
        <div ref={containerRef} style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%',
        }}>
            <div style={{
                overflow: 'hidden',
                width: width,
                height: height,
            }}>
                <div ref={divRef} style={{
                    transform: 'scale(1.3)',  // Zoom factor
                    transformOrigin: 'center center',  // Zoom from the center
                }}></div>
            </div>
        </div>
    );
}

export default FourierVis;

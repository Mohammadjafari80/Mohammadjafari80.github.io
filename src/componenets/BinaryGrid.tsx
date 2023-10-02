import React, { useEffect, useState } from 'react';
import { Box, Grid, Text, useColorMode } from '@chakra-ui/react';

interface Props {
  duration: number;
  fontSize: number;
  opacityZero: number;
  opacityOne: number;
  gap: number;
  blur: boolean;
}

const BinaryGrid: React.FC<Props> = ({ duration, fontSize, opacityZero, opacityOne, gap, blur }) => {
  const { colorMode } = useColorMode(); // To detect light/dark mode
  const cellSize = fontSize * 1; // Cell size relative to font size
  const [rows, setRows] = useState(0);
  const [cols, setCols] = useState(0);
  const [grid, setGrid] = useState<number[][]>([]);

  useEffect(() => {
    const updateSize = () => {
      const parent = document.getElementById("grid-parent");
      if (parent) {
        const style = window.getComputedStyle(parent);
        const width = parseInt(style.getPropertyValue('width'), 10);
        const height = parseInt(style.getPropertyValue('height'), 10);
        const rows = Math.floor(height / (cellSize + gap)) + 20;
        const cols = Math.floor((width - gap) / (cellSize + gap)) + 20;
        setRows(rows);
        setCols(cols);
      }
    };
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, [cellSize, gap]);

  useEffect(() => {
    const initGrid = Array.from({ length: rows }, () => 
      Array.from({ length: cols }, () => Math.random() < 0.5 ? 0 : 1)
    );
    setGrid(initGrid);

    const timer = setInterval(() => {
      setGrid(prevGrid => prevGrid.map(row => row.map(cell => cell === 0 ? 1 : 0)));
    }, duration);

    return () => clearInterval(timer);
  }, [rows, cols, duration]);

  const handleCellClick = (rowIndex: number, colIndex: number) => {
    setGrid(prevGrid => {
      const newGrid = JSON.parse(JSON.stringify(prevGrid));
      newGrid[rowIndex][colIndex] = newGrid[rowIndex][colIndex] === 0 ? 1 : 0;
      return newGrid;
    });
  };

  return (
    <Grid 
      gap={gap} 
      templateColumns={`repeat(${cols}, ${cellSize}px)`} 
      overflow="hidden"  // Setting overflow to hidden
      filter={blur ? "blur(2px)" : "none"}
    >
      {grid.map((row, i) =>
        row.map((cell, j) => (
          <Box
            key={`${i}-${j}`}
            width={cellSize}
            height={cellSize}
            opacity={cell === 0 ? opacityZero : opacityOne}
            transition="opacity 0.5s"
            onClick={() => handleCellClick(i, j)}
            cursor="pointer" // Pointer cursor on hover
          >
            <Text fontSize={`${fontSize}px`} color={cell === 0 ? (colorMode === 'light' ? 'black' : 'gray.500') : (colorMode === 'light' ? 'gray.800' : 'white')}>{cell}</Text>
          </Box>
        ))
      )}
    </Grid>
  );
};

export default BinaryGrid;

import React, { useState } from "react";
import { Text, Box } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";

interface Props {
  text: string;
  fontsize: number;
  fontFamily?: string; // Optional prop for specifying font family
  span?: boolean; // Optional prop to wrap text in a span to prevent line breaks
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit'; // Added prop for text transformation
}

const MovingGradientText: React.FC<Props> = ({
  text,
  fontsize,
  fontFamily = 'PixelifySans', // Default font family
  span = false, // Default value for span is false
  textTransform = 'none', // Default value for textTransform is 'none'
}) => {
  const shuffleArray = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]]; // Swap elements
    }
    return array;
  };

  const [gradientColors] = useState(() => shuffleArray([
    "#d05a45", // Color 1
    "#e4aa42", // Color 2
    "#3f6ee7", // Color 3
    "#4a9c80", // Color 4
  ]));

  const getColorShiftKeyframes = () => {
    let keyframeStr = "";
    gradientColors.forEach((color, index) => {
      const percentage = (index * 100) / gradientColors.length;
      keyframeStr += `
        ${percentage}% {
          color: ${color};
        }
      `;
    });
    return keyframes`${keyframeStr}`;
  };

  const ColorShift = getColorShiftKeyframes();

  const letterStyle = (index: number) => {
    const initialColor = gradientColors[index % gradientColors.length];
    const animationDelay = (index * gradientColors.length) / text.length;
    return css`
      color: ${initialColor};
      animation: ${ColorShift} ${gradientColors.length}s ease-in-out infinite;
      animation-delay: ${animationDelay}s;
      font-family: ${fontFamily}; // Apply custom font
      text-transform: ${textTransform}; // Apply text transformation
    `;
  };

  const renderLetters = () => {
    return text.split("").map((letter, index) => (
      <Text
        as="span"
        fontSize={`${fontsize}px`}
        fontWeight="bold"
        css={letterStyle(index)}
        key={`letter-${index}`}
      >
        {letter}
      </Text>
    ));
  };

  return span ? (
    <span style={{ whiteSpace: 'nowrap' }}>{renderLetters()}</span>
  ) : (
    <Box>{renderLetters()}</Box>
  );
};

export default MovingGradientText;

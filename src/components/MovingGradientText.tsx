import React, { useState } from "react";
import { Text, Box } from "@chakra-ui/react";
import { css, keyframes } from "@emotion/react";

interface Props {
  text: string;
  fontsize: number;
  fontFamily?: string; // Optional font family prop
  span?: boolean; // Optional prop to wrap text in a span
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase' | 'initial' | 'inherit'; // Text transformation
}

const MovingGradientText: React.FC<Props> = ({
  text,
  fontsize,
  fontFamily = 'PixelifySans',
  span = false,
  textTransform = 'none',
}) => {
  const [gradientColors] = useState([
    "#d05a45", // Color 1
    "#e4aa42", // Color 2
    "#3f6ee7", // Color 3
    "#4a9c80", // Color 4
  ]);

  // Generate keyframes for shifting color based on gradientColors
  const getColorShiftKeyframes = () => {
    let keyframeStr = "";
    gradientColors.forEach((color, index) => {
      const percentage = (index * 100) / gradientColors.length;
      keyframeStr += `${percentage}% { color: ${color}; }`;
    });
    return keyframes`${keyframeStr}`;
  };

  const ColorShift = getColorShiftKeyframes();

  // Style each letter with initial color, delay, font family, and transformation
  const letterStyle = (index: number) => {
    const initialColor = gradientColors[index % gradientColors.length];
    const animationDelay = (index * gradientColors.length) / text.length;
    return css`
      color: ${initialColor};
      animation: ${ColorShift} ${gradientColors.length}s ease-in-out infinite;
      animation-delay: ${animationDelay}s;
      font-family: ${fontFamily};
      text-transform: ${textTransform};
    `;
  };

  // Render each letter individually with animated style
  const renderLetters = () => {
    return text.split("").map((letter, index) => (
      <Text
        as="span"
        fontSize={`${fontsize}px`}
        fontWeight="bold"
        css={letterStyle(index)}
        key={`letter-${index}`}
        aria-hidden="true" // Hide individual letters from screen readers for accessibility
      >
        {letter}
      </Text>
    ));
  };

  return span ? (
    <span style={{ whiteSpace: 'nowrap', display: 'inline-block' }}>
      {renderLetters()}
    </span>
  ) : (
    <Box>{renderLetters()}</Box>
  );
};

export default MovingGradientText;

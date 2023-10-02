import React from "react";
import { Box, Image, chakra } from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";

const MotionBox = chakra(motion.div);

interface PersonCardProps {
  foreground: string;
  background: string;
  height: string | number;
  width: string | number;
}

const PersonCard: React.FC<PersonCardProps> = ({
  foreground,
  background,
  height = 400,
  width = 400,
}) => {
  const fgHoverScale = 1.1;

  const animation = useAnimation();
  const bgAnimation = useAnimation();

  const onHoverStart = () => {
    animation.start({
      scale: fgHoverScale,
      filter: "grayscale(0%)",
    });
    bgAnimation.start({
      filter: "grayscale(100%) blur(2px)",
    });
  };

  const onHoverEnd = () => {
    animation.start({
      scale: 1,
      filter: "grayscale(100%)",
    });
    bgAnimation.start({
      filter: "grayscale(100%) blur(0px)",
    });
  };

  React.useEffect(() => {
    animation.set({ filter: "grayscale(100%)" });
  }, [animation]);

  return (
    <Box
      position="relative"
      display="inline-block"
      height={height}
      width={width}
      overflow="hidden"
      borderRadius={10}
      onMouseEnter={onHoverStart}
      onMouseLeave={onHoverEnd}
    >
      <MotionBox animate={bgAnimation}>
        <Image
          src={background}
          alt="Person background"
          height="100%"
          width="100%"
          objectFit="cover"
          filter="grayscale(100%)"
          scale="1.05"
        />
      </MotionBox>
      <MotionBox
        position="absolute"
        top={0}
        left={0}
        right={0}
        bottom={0}
        animate={animation}
      >
        <Image
          src={foreground}
          alt="Person foreground"
          height="100%"
          width="100%"
          objectFit="cover"
        />
      </MotionBox>
    </Box>
  );
};

export default PersonCard;

import React, { ReactNode } from "react";
import { Box, useColorModeValue } from "@chakra-ui/react";

type SectionProps = {
  children: ReactNode;
  variant?: "light" | "dark";
};

const Section: React.FC<SectionProps> = ({ children, variant = "light" }) => {
  const bgColorLight = useColorModeValue("#F8F8F8", "#1F1F1F");
  const bgColorDark = useColorModeValue("#FFFFFF", "#121212");
  const textColorLight = useColorModeValue("black", "white");
  const textColorDark = useColorModeValue("black", "white");

  const bgColor = variant === "dark" ? bgColorDark : bgColorLight;
  const textColor = variant === "dark" ? textColorDark : textColorLight;

  return (
    <Box bg={bgColor} color={textColor} p={4} maxW="100%"  position="relative">
      <Box
        minH='100px'
        maxW="100%"
        pl="15px"
        pr="15px"
        ml="auto"
        mr="auto"
        mt="50px"
        mb="50px"
        css={{
          "@media (min-width: 1200px)": {
            maxWidth: "70%",
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default Section;

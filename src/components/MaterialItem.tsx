// MaterialItem.tsx
import React from "react";
import { useEffect, useState, useRef } from "react";

import {
  Box,
  Button,
  Heading,
  HStack,
  Icon,
  Link,
  Text,
  VStack,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FaFilePdf, FaFilePowerpoint, FaVideo } from "react-icons/fa";
import "./MaterialItem.css"; // Import the CSS file
import { useColorMode } from "@chakra-ui/react";

type MaterialItemProps = {
  title: string;
  description: string;
  imageUrl?: string;
  downloads?: {
    slide?: string;
    video?: string;
    pdf?: string;
  };
};

const MaterialItem: React.FC<MaterialItemProps> = ({
  title,
  description,
  imageUrl,
  downloads,
}) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "#121212" : "#FFFFFF";
  const [vStackHeight, setVStackHeight] = useState(0);

  const vStackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (vStackRef.current) {
      setVStackHeight(vStackRef.current.offsetHeight);
    }
  }, []);

  useEffect(() => {
    if (vStackRef.current) {
      setVStackHeight(vStackRef.current.offsetHeight);
    }
  }, [vStackHeight]);

  return (
    <Box
      p={1}
      m={6}
      className="moving-gradient"
      borderRadius="md"
      style={{ overflow: "hidden" }}
    >
      <Grid
        borderWidth={1}
        overflow="hidden"
        boxShadow="md"
        templateAreas={{
          base: `'info info blend'`,
        }}
        templateColumns={{
          base: "repeat(3, 1fr)",
        }}
        templateRows={{
          base: "1fr",
        }}
        bg={hexToRgba(bgColor, 0.9)}
        // Add the class to HStack
      >
        <GridItem area={"info"}>
          <VStack
            ref={vStackRef}
            alignItems="start"
            spacing={4}
            borderRadius="md"
            p={4}
            w={"100%"}
          >
            <Heading size="md">{title}</Heading>
            <Text as={"samp"}>{description}</Text>
            <HStack>
              {downloads?.slide && (
                <Link href={downloads.slide} isExternal>
                  <Button
                    leftIcon={<Icon as={FaFilePowerpoint} />}
                    variant="outline"
                    _hover={{ backgroundColor: hexToRgba("#e4aa42", 0.5) }}
                  >
                    Slide
                  </Button>
                </Link>
              )}
              {downloads?.video && (
                <Link href={downloads.video} isExternal>
                  <Button
                    leftIcon={<Icon as={FaVideo} />}
                    variant="outline"
                    _hover={{ backgroundColor: hexToRgba("#4a9c80", 0.5) }}
                  >
                    Video
                  </Button>
                </Link>
              )}
              {downloads?.pdf && (
                <Link href={downloads.pdf} isExternal>
                  <Button
                    leftIcon={<Icon as={FaFilePdf} />}
                    variant="outline"
                    _hover={{ backgroundColor: hexToRgba("#d05a45", 0.5) }}
                  >
                    PDF
                  </Button>
                </Link>
              )}
            </HStack>
          </VStack>
        </GridItem>
        <GridItem area={"blend"} style={{ overflow: "hidden" }}>
          <Image
            src={imageUrl}
            alt="Your image description"
            style={{
              mixBlendMode: bgColor == "#FFFFFF" ? "screen" : "multiply",
              position: "relative",
              overflow: "hidden",
              right: 0,
              zIndex: 2,
              objectFit: "cover",
              opacity: bgColor == "#FFFFFF" ? 0.5 : 0.1,
              transform: "scaleX(-1)",
              width: "100%",
              height: "100%",
              minHeight: `100%`,
              maxHeight: `${vStackHeight}px`,
              filter: bgColor == "#FFFFFF" ? "invert(0%)" : "invert(100%)",
            }}
          />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default MaterialItem;

function hexToRgba(hex: string, alpha: number): string {
  const red = parseInt(hex.substr(1, 2), 16);
  const green = parseInt(hex.substr(3, 2), 16);
  const blue = parseInt(hex.substr(5, 2), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

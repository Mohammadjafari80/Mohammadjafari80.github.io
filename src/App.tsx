import React, { useState, useEffect } from 'react';
import { Box, Grid, Text, Tooltip } from "@chakra-ui/react";
import NavBar from "./componenets/NavBar";
import Section from "./componenets/Section";
import MovingGradientText from "./componenets/MovingGradientText";
import FourierVis from './FourierVis';
import "./App.css";

const App: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: 320, height: 320 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // For mobile screens, 90% of window width
        setDimensions({
          width: window.innerWidth * 0.8,
          height: window.innerWidth * 0.8
        });
      } else {
        // For desktop screens, 30% of window width
        setDimensions({
          width: window.innerWidth * 0.3,
          height: window.innerWidth * 0.3
        });
      }
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initialize

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Box>
      <NavBar />
      <Section variant="dark">
        <Grid templateColumns={{ base: "1fr", md: "3fr 2fr" }} gap={{ base: "1", md: "6" }}>
          <Box order={{ base: 2, md: 1 }}>
            <Box display="flex" alignItems="baseline" gap="0.5rem" whiteSpace="nowrap" textAlign="left">
              <Text fontSize="md">Hi, I'm </Text>
              <MovingGradientText text="Mohammad Jafari" fontsize={32} />
            </Box>
            <Box mt={4} textAlign="left">
              <p>I'm a computer science student specializing in the fields of robustness and optimization. My academic journey revolves around designing algorithms that are not only efficient but also resilient to various challenges. I work in a cutting-edge lab, applying my skills in Python and deep learning to address real-world problems. My research intersects between theoretical concepts and practical applications, as I strive for solutions that are both optimal and robust.</p>
            </Box>
          </Box>
          <Tooltip label="This is my Fourier transform" aria-label="A tooltip">
            <Box order={{ base: 1, md: 2 }}>
              <FourierVis timePerPoint={30} filePath="/points.txt" width={dimensions.width} height={dimensions.height} />
            </Box>
          </Tooltip>
        </Grid>
      </Section>
      {/* <Section>
        <Box id="grid-parent" height='100%' style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, overflow: 'hidden', opacity: 0.5 }}>
          <BinaryGrid
            duration={3000}
            fontSize={25}
            opacityZero={0.2}
            opacityOne={0.8}
            gap={2}
            blur={true}
          />
        </Box>
    </Section> */}

    </Box>
  );
}

export default App;

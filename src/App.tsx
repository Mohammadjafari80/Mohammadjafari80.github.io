import React, { useState, useEffect } from 'react';
import { Box, Grid, Text, Tooltip} from "@chakra-ui/react";
import NavBar from "./componenets/NavBar";
import Section from "./componenets/Section";
import MovingGradientText from "./componenets/MovingGradientText";
import FourierVis from './FourierVis';
import "./App.css";
import ContactLinks from './componenets/ContactLinks';
import PapersUnderReviewSection from './sections/Papers';

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
            <p>I am currently a final-year <strong>BSc student</strong> at <strong>Sharif University of Technology</strong>, majoring in computer science with a specialization in <strong>robustness and optimization</strong>. My academic journey is centered around designing algorithms that exhibit <strong>efficiency and resilience</strong> to various challenges. I am actively involved in a cutting-edge lab where I utilize my <strong>Python and deep learning skills</strong> to tackle real-world problems. The intersection of theoretical concepts and practical applications drives my research endeavors as I aim for solutions that embody both <strong>optimality and robustness</strong>.</p>
            </Box>
            <Box mt={4} textAlign="left">
              <ContactLinks></ContactLinks>
            </Box>
          </Box>
          <Tooltip label={"This rendering represents a picture of me, achieved through the utilization of the Fourier series to approximate a continuous signal. It visualizes the concept using epicycles - rotating vectors placed end-to-end, with the Fourier series helping in determining the magnitude and initial position of each vector. The model is inspired by a video from 3Blue1Brown that explains and demonstrates this topic."} aria-label="A tooltip">
            <Box order={{ base: 1, md: 2 }}>
              <FourierVis timePerPoint={30} filePath="/points.txt" width={dimensions.width} height={dimensions.height} />
            </Box>
          </Tooltip>
        </Grid>
      </Section>
      <Section>
        <PapersUnderReviewSection />
      </Section>

    </Box>
  );
}

export default App;

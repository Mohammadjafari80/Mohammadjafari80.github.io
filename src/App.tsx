import React, { useState, useEffect } from 'react';
import { Box, Center, Grid, Text, Tooltip} from "@chakra-ui/react";
import { Element } from "react-scroll";  // Import Element from react-scroll
import NavBar from "./componenets/NavBar";
import Section from "./componenets/Section";
import MovingGradientText from "./componenets/MovingGradientText";
import FourierVis from './FourierVis';
import "./App.css";
import ContactLinks from './componenets/ContactLinks';
import PapersUnderReviewSection from './sections/Papers';
// import ResearchTimeline from './sections/ResearchTimeline';
import Timeline from './sections/Timeline';
import Projects from './sections/Projects'
import VisitorMap from './componenets/VisitorsMap';
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
      <Element name="About">
      <Section variant="dark">
        <Grid templateColumns={{ base: "1fr", md: "3fr 2fr" }} gap={{ base: "1", md: "6" }}>
          <Box order={{ base: 2, md: 1 }}>
            <Box display="flex" alignItems="baseline" gap="0.5rem" whiteSpace="nowrap" textAlign="left">
              <Text fontSize="md">Hi, I'm </Text>
              <MovingGradientText text="Mohammad Jafari" fontsize={32} />
            </Box>
            <Box mt={4} textAlign="left">
            <p>I am a 22 year-old final-year <strong>BSc student</strong> at <strong>Sharif University of Technology</strong>, majoring in computer engineering with a specialization in <strong>robustness and optimization</strong>. My research endeavors are primarily directed towards the development of trustworthy and scalable algorithms, focusing on <strong>robustness and optimization</strong>. My academic exploration broadly encompasses <strong>machine learning (ML)/deep learning (DL)</strong>, optimization theory, and algorithm design, aiming for solutions that are both <strong>efficient and resilient</strong> to various challenges. These research topics provide a solid foundation for my current and future research aspirations: engineering AI systems that are both <strong>responsible and efficient</strong>.</p>

            </Box>
            <Box mt={4} textAlign="left">
              <ContactLinks></ContactLinks>
            </Box>
          </Box>
          <Tooltip label={"This rendering represents a picture of me, achieved through the utilization of the Fourier series to approximate a continuous signal. It visualizes the concept using epicycles - rotating vectors placed end-to-end, with the Fourier series helping in determining the magnitude and initial position of each vector. The model is inspired by a video from 3Blue1Brown that explains and demonstrates this topic."} aria-label="A tooltip">
            <Box order={{ base: 1, md: 2 }}>
              <FourierVis timePerPoint={20} filePath="/points.txt" width={dimensions.width} height={dimensions.height} />
            </Box>
          </Tooltip>
        </Grid>
      </Section>
      </Element>
      <Element name="Publications">
        <Section>
          <PapersUnderReviewSection />
        </Section>
      </Element>
      <Element name="Experiences">
      <Section variant='dark'>
        <Timeline />
      </Section>
      </Element>
      <Element name="Projects">
      <Section >
        <Projects />
      </Section>
      </Element>
      <Section>
      <Box textAlign="center" mb={8}>
        <Text fontSize="sm">
          Designed by Mohammad Jafari. All rights reserved.
        </Text>
        <Text fontSize="sm">
          This design is original and created for personal use.
        </Text>
      </Box>
      <Center>
        <a href="https://hits.seeyoufarm.com">
          <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FMohammadjafari80%2FMohammadjafari80.github.io&count_bg=%23D05A45&title_bg=%23373232&icon=&icon_color=%23E7E7E7&title=visits&edge_flat=false" />
        </a>
      </Center>
      <Center>
        <VisitorMap></VisitorMap>
      </Center>
    </Section>

    </Box>
  );
}

export default App;

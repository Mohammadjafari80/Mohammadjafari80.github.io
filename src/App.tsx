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
import AboutMe from './componenets/AboutMe';
import MySVGComponent from './componenets/MySVGComponent';

const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}


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


  const renderVisualization = () => {
    if (!isIOS()) {
      return <Tooltip label={"This rendering represents a picture of me, achieved through the utilization of the Fourier series to approximate a continuous signal. It visualizes the concept using epicycles - rotating vectors placed end-to-end, with the Fourier series helping in determining the magnitude and initial position of each vector. The model is inspired by a video from 3Blue1Brown that explains and demonstrates this topic."} aria-label="A tooltip">
                <Box order={{ base: 1, md: 2 }}>
                  <FourierVis timePerPoint={40} filePath="/points.txt" width={dimensions.width} height={dimensions.height} />
                </Box>
              </Tooltip>
    ;
    } else {
      return <Box mb={{base: 5, md: 0 }} order={{ base: 1, md: 2 }}>
          <MySVGComponent></MySVGComponent>
        </Box>
      ;
    }
  };

  return (
    <Box>
      <NavBar />
      <Element name="About">
      <Section variant="dark">
        <Grid templateColumns={{ base: "1fr", md: "3fr 2fr" }} gap={{ base: "1", md: "6" }}>
          <Box order={{ base: 2, md: 1 }}>
            <Box display="flex" alignItems="baseline" gap="0.5rem" whiteSpace="nowrap" textAlign="left">
              <Text fontSize="md">Hi, I'm </Text>
              <MovingGradientText text="Mohammad Jafari" fontsize={32} textTransform='uppercase'/>
            </Box>
            <Box mt={4} textAlign="left">
                <AboutMe></AboutMe>
            </Box>
            <Box mt={4} textAlign="left">
              <ContactLinks></ContactLinks>
            </Box>
          </Box>
          {renderVisualization()}
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

import React, { useState, useEffect } from 'react';
import { Box, Center, Grid, Text, Tooltip } from "@chakra-ui/react";
import { Element } from "react-scroll";
import NavBar from "./components/NavBar";
import Section from "./components/Section";
import MovingGradientText from "./components/MovingGradientText";
import FourierVis from './FourierVis';
import "./App.css";
import ContactLinks from './components/ContactLinks';
import PapersUnderReviewSection from './sections/Papers';
import Timeline from './sections/Timeline';
import Projects from './sections/Projects';
import VisitorMap from './components/VisitorsMap';
import AboutMe from './components/AboutMe';
import MySVGComponent from './components/MySVGComponent';
import News from './sections/News';
import Miscellaneous from './sections/Miscellaneous';
// import TextEffect from './GPT'

// Detect iOS for conditional rendering
const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

const App: React.FC = () => {
  const [dimensions, setDimensions] = useState({ width: 320, height: 320 });

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setDimensions({ width: window.innerWidth * 0.8, height: window.innerWidth * 0.8 });
      } else {
        setDimensions({ width: window.innerWidth * 0.3, height: window.innerWidth * 0.3 });
      }
    };
    window.addEventListener('resize', handleResize);
    handleResize();

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Renders either Fourier Visualization or SVG based on device
  const renderVisualization = () => {
    if (!isIOS()) {
      return (
        <Tooltip 
          label="Fourier series rendering of my profile image, using rotating vectors and Fourier series for signal approximation. Inspired by 3Blue1Brown’s Fourier series video." 
          aria-label="Fourier Series Visualization Tooltip"
        >
          <Box order={{ base: 1, md: 2 }}>
            <FourierVis timePerPoint={40} filePath="/points.txt" width={dimensions.width} height={dimensions.height} />
          </Box>
        </Tooltip>
      );
    } else {
      return (
        <Box mb={{ base: 5, md: 0 }} order={{ base: 1, md: 2 }}>
          <MySVGComponent />
        </Box>
      );
    }
  };

  return (
    <Box>
      <NavBar />

      {/* About Section */}
      <Element name="About">
        <Section variant="dark">
          <Grid templateColumns={{ base: "1fr", md: "3fr 2fr" }} gap={{ base: "1", md: "6" }}>
            <Box order={{ base: 2, md: 1 }}>
              <Box display="flex" alignItems="baseline" gap="0.5rem" whiteSpace="nowrap" textAlign="left">
                <Text fontSize="md">Hi, I'm </Text>
                <MovingGradientText text="Mohammad Jafari" fontsize={32} textTransform="uppercase" />
              </Box>
              <Box mt={4} textAlign="left">
                <AboutMe />
              </Box>
              <Box mt={4} textAlign="left">
                <ContactLinks />
              </Box>
            </Box>
            {renderVisualization()}
          </Grid>
        </Section>
      </Element>

      {/* News Section */}
      <Element name="News">
        <Section>
          <News />
        </Section>
      </Element>

      {/* Publications Section */}
      <Element name="Publications">
        <Section variant="dark">
          <PapersUnderReviewSection />
        </Section>
      </Element>

      {/* Experiences Section */}
      <Element name="Experiences">
        <Section>
          <Timeline />
        </Section>
      </Element>

      {/* Projects Section */}
      <Element name="Projects">
        <Section variant="dark">
          <Projects />
        </Section>
      </Element>

      {/* Miscellaneous Section */}
      <Element name="Miscellaneous">
        <Section>
          <Miscellaneous />
        </Section>
      </Element>

      {/* Visitor Stats and Map */}
      <Section variant="dark">
        <Center mt={-3}>
          <a href="https://hits.seeyoufarm.com" aria-label="Visitor count for portfolio">
            <img 
              src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fgithub.com%2FMohammadjafari80%2FMohammadjafari80.github.io&count_bg=%23D05A45&title_bg=%23373232&icon=&icon_color=%23E7E7E7&title=visits&edge_flat=false" 
              alt="visitor count badge"
            />
          </a>
        </Center>
        <Center>
          <VisitorMap />
        </Center>
      </Section>

      {/* Footer Section */}
      <Box textAlign="center" mb={8}>
        <Text fontSize="sm">Designed by Mohammad Jafari. All rights reserved.</Text>
        <Text fontSize="sm">This design is original and created for personal use.</Text>
      </Box>
    </Box>
  );
}

export default App;

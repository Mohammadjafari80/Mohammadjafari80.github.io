// src/components/ResearchExperience.tsx
import React from 'react';
import {  Text, Link, VStack } from "@chakra-ui/react";

interface ResearchExperienceProps {
  labLink: string;
  labName: string;
  projectTitle: string;
  location: string;
  date: string;
  description: string;
}

const ResearchExperience: React.FC<ResearchExperienceProps> = ({
  labLink,
  labName,
  projectTitle,
  location,
  date,
  description
}) => {
  return (
    <VStack align="start" spacing={2}>
      <Link href={labLink} isExternal><Text fontWeight="bold">{labName}</Text></Link>
      <Text fontWeight="bold">{projectTitle}</Text>
      <Text>{location}</Text>
      <Text>{date}</Text>
      <Text>{description}</Text>
    </VStack>
  );
};

export default ResearchExperience;

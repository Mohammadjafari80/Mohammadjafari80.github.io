// Timeline.tsx
import React from "react";
import TimelineEvent from "../components/TimelineEvent";
import { VStack, Heading } from "@chakra-ui/react";

type Event = {
  title: string;
  labName: string;
  labLink: string;
  description: string;
  imageUrl: string;
  date: string;
};

// Detailed events with specific keywords and descriptions for SEO
const events: Event[] = [
  {
    title: "TAI Lab",
    labName: "Simon Fraser University, Vancouver, Canada",
    labLink: "https://linyil.com/",
    description: "Researching vulnerabilities of large language models (LLMs) to input data redundancy at TAI Lab, Simon Fraser University. Focused on understanding how repetitive data affects LLM response accuracy and developing mitigation strategies for improved robustness.",
    imageUrl: "/sfu.webp",
    date: "Fall 2024 - Present",
  },
  {
    title: "OPTML Group",
    labName: "Michigan State University, Michigan, United States",
    labLink: "https://www.optml-group.com/",
    description: "Worked on hyperparameter optimization, dataset pruning, and data reweighting at OPTML Group, Michigan State University. Conducted research under Prof. Sijia Liu in Summer 2023, leading to a paper submitted to ICASSP2024.",
    imageUrl: "/optml.png",
    date: "Summer 2023 - Spring 2024",
  },
  {
    title: "RIML Lab",
    labName: "Sharif University of Technology, Tehran, Iran",
    labLink: "https://github.com/rohban-lab",
    description: "Conducted research on anomaly detection, out-of-distribution (OOD) detection, and robustness at RIML Lab, Sharif University. Mentored by Prof. Rohban, resulting in papers submitted to AAAI2024, ICASSP2024, and ICLR2024.",
    imageUrl: "/riml.png",
    date: "Winter 2022 - Summer 2024",
  },
];

const Timeline: React.FC = () => {
  return (
    <VStack spacing={6} align="stretch">
      <Heading mb={8}>Research Experiences</Heading>
      {events.map((event, index) => (
        <TimelineEvent key={index} {...event} />
      ))}
    </VStack>
  );
};

export default Timeline;

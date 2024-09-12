// Timeline.tsx
import React from "react";
import TimelineEvent from "../componenets/TimelineEvent";
import { VStack, Heading } from "@chakra-ui/react";

type Event = {
  title: string;
  labName: string;
  labLink: string;
  description: string;
  imageUrl: string;
  date: string;
};

const events: Event[] = [
  {
    title: "OPTML Group",
    labName: "Michigan State University, Michigan, United States",
    labLink: "https://www.optml-group.com/",
    description: "Explored hyperparameter optimization, dataset pruning, and reweighting at OPTML Group under Prof. Sijia Liu during Summer 2023, leading to a paper submission to ICASSP2024.",
    imageUrl: "/optml.png",
    date: "Summer 2023 - Spring 2024",
  },
  {
    title: "RIML Lab",
    labName: "Sharif University of Technology, Tehran, Iran",
    labLink: "https://github.com/rohban-lab",
    description: "Studied anomaly and OOD detection, and robustness in these scenarios at RIML Lab under Prof. Rohban since Winter 2022, resulting in papers submitted to AAAI2024, ICASSP2024, and ICLR2024.",
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
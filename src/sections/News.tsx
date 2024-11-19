import { Box, Heading, VStack, Text, HStack, Link } from "@chakra-ui/react";
import React from "react";

interface NewsContent {
  text: string;
  style: number;
}

interface NewsItem {
  content: NewsContent[];
  link?: string;
  linkText?: string;
  date: string;
}

const newsItems: NewsItem[] = [
  {
    content: [
      { text: "🏆", style: 0 },
      { text: " I ranked 2nd ", style: 1 },
      { text: "in the ", style: 0 },
      { text: "Neurips 2024 ", style: 2 },
      { text: "Erasing the Invisible Challenge -", style: 1 },
      { text: " BlackBox Track.", style: 1 },
    ],
    date: "November 2024",
    link: "https://mohammadjafari80.github.io/blog/#/Erasing%20the%20Invisible",
    linkText: "See my blog."
  },
  {
    content: [
      { text: "🏆", style: 0 },
      { text: " I ranked 3rd ", style: 1 },
      { text: "in the ", style: 0 },
      { text: "Neurips 2024 ", style: 2 },
      { text: "Erasing the Invisible Challenge -", style: 1 },
      { text: " BeigeBox Track.", style: 1 },
    ],
    date: "November 2024",
    link: "https://mohammadjafari80.github.io/blog/#/Erasing%20the%20Invisible",
    linkText: "See my blog."
  },
  {
    content: [
      { text: "📑 Our paper", style: 0 },
      { text: " RODEO: Robust Out-of-Distribution Detection Via Exposing Adaptive Outliers ", style: 1 },
      { text: "was accepted to", style: 0 },
      { text: " ICML 2024.", style: 1 }
    ],
    date: "May 2024"
  },
  {
    content: [
      { text: "📑 Our paper", style: 0 },
      { text: " Universal Novelty Detection Through Adaptive Contrastive Learning ", style: 1 },
      { text: "was accepted to", style: 0 },
      { text: " CVPR 2024.", style: 1 }
    ],
    date: "February 2024"
  }
];

const getStyledText = (content: NewsContent[]) => {
  return content.map((part, index) => {
    switch (part.style) {
      case 1:
        return (
          <Text as="b" key={index} display="inline">
            {part.text}
          </Text>
        );
      case 2:
        return (
          <Text as="i" key={index} display="inline">
            {part.text}
          </Text>
        );
      default:
        return (
          <Text key={index} display="inline">
            {part.text}
          </Text>
        );
    }
  });
};

const News: React.FC = () => {
  return (
    <Box textAlign="center" width="100%">
      <Heading mb={8}>News</Heading>
      <VStack spacing={4} align="stretch" width="100%">
        {newsItems.map((item, index) => (
          <HStack key={index} spacing={2} width="100%" justify="center">
            <VStack align="start" width="95%">
              <Text fontSize="md" textAlign="left">
                {getStyledText(item.content)}
                {item.link && item.linkText && (
                  <Link 
                    href={item.link} 
                    isExternal 
                    fontFamily="monospace" 
                    fontSize="md" 
                    _hover={{ textDecoration: "underline"}}
                  >
                    {" "}{item.linkText}
                  </Link>
                )}
              </Text>
              <Text fontSize="sm" fontStyle="italic" color="gray.500">
                {item.date}
              </Text>
            </VStack>
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default News;

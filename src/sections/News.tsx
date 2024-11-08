import { Box, Heading, VStack, Text, HStack, Link } from "@chakra-ui/react";

const newsItems = [
  {
    content: [
      { text: "🏆", style: 0 },
      { text: " I ranked 2nd ", style: 1 },
      { text: "in the ", style: 0 },
      { text: "Neurips 2024 ", style: 2 },
      { text: "Erasing the Invisible Challenge -",  style: 1 },
      { text: " BlackBox Track.",  style: 1 },
    ],
    // link: "https://example.com/black-box-track",
    date: "November 2024"
  },
  {
    content: [
      { text: "🏆", style: 0 },
      { text: " I ranked 3rd ", style: 1 },
      { text: "in the ", style: 0 },
      { text: "Neurips 2024 ", style: 2 },
      { text: "Erasing the Invisible Challenge -",  style: 1 },
      { text: " BeigeBox Track.",  style: 1 },
    ],
    // link: "https://example.com/beigebox-track",
    date: "November 2024"
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

const getStyledText = (content) => {
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

const News = () => {
  return (
    <Box textAlign="center" width="100%">
      <Heading mb={8}>News</Heading>
      <VStack spacing={4} align="stretch" width="100%">
        {newsItems.map((item, index) => (
          <HStack key={index} spacing={2} width="100%" justify="center">
            <VStack align="start" width="95%">
              <Text fontSize="md" textAlign="left">
                {getStyledText(item.content)}
                {item.link && (
                  <Link href={item.link} isExternal>
                    {" "}Read more
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

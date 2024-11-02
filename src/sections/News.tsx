import { Box, Heading, VStack, Text, HStack } from "@chakra-ui/react";

const newsItems = [
//   {
//     title: "🏆 I won the",
//     emphasized: "NeurIPS 2024",
//     description: "Erasing the Invisible Challenge in both BlackBox and BeigeBox tracks",
//     date: "November 2024"
//   },
  {
    title: "📑 Our paper",
    emphasized: "RODEO: Robust Out-of-Distribution Detection Via Exposing Adaptive Outliers",
    description: "was accepted to",
    conference: "ICML 2024",
    date: "May 2024"
  },
  {
    title: "📑 Our paper",
    emphasized: "Universal Novelty Detection Through Adaptive Contrastive Learning",
    description: "was accepted to",
    conference: "CVPR 2024",
    date: "February 2024"
  }
];

const News = () => {
  return (
    <Box textAlign="center" width="100%">
      <Heading mb={8}>News & Achievements</Heading>
      <VStack spacing={4} align="stretch" width="100%">
        {newsItems.map((item, index) => (
          <HStack key={index} spacing={2} width="100%" justify="center">
            <VStack align="start" width="95%">
              <Text fontSize="md" textAlign="left">
                {item.title}{" "}
                <Text as="i" fontWeight="bold" display="inline">
                  {item.emphasized}
                </Text>{" "}
                {item.description}{" "}
                {item.conference && (
                  <Text as="i" fontWeight="bold" display="inline">
                    {item.conference}
                  </Text>
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

import { Box, Heading, VStack, Text } from "@chakra-ui/react";

const Miscellaneous = () => {
  return (
    <Box textAlign="center" width="100%">
      <Heading mb={8}>Miscellaneous</Heading>
      <VStack spacing={4} align="start" width="100%">
        <Text fontSize="lg">
          📸 Passionate about photography and cinematography, with a focus on creating a film-like aesthetic in my work.
        </Text>
        <Text fontSize="lg">
          🎨 Experienced in design tools like Photoshop, DaVinci Resolve, and Blender.
        </Text>
        <Text fontSize="lg">
          🌍 Travel enthusiast who loves discovering new places, cultures, and experiences around the world.
        </Text>
        <Text fontSize="lg">
          🎬 Avid fan of movies and TV series; one of my all-time favorite shows is <Text as="i" fontWeight="bold">The Leftovers</Text>.
        </Text>
        <Text fontSize="lg">
          🎶 Enjoys a wide range of music genres, with a special interest in Progressive Rock. My favorite band is <Text as="i" fontWeight="bold">Pink Floyd</Text>.
        </Text>
      </VStack>
    </Box>
  );
};

export default Miscellaneous;
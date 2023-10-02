import {
  Box,
  Text,
  Link,
  Tag,
  VStack,
  HStack,
  Flex,
} from "@chakra-ui/react";
import { FaInfoCircle } from "react-icons/fa";
import { TiLocation, TiTime } from "react-icons/ti";

const CourseInfo = () => {
  return (
    <Box display="flex" flexDirection="row" overflow={"hidden"}>
      <Box flex="9">
        <VStack spacing="7" align="stretch">
          <HStack spacing="2">
            <Text as="kbd" fontSize={["2xl"]}>
              CE282:
            </Text>
            <Text
              fontSize="3xl"
              fontWeight="bold"
              style={{ whiteSpace: "nowrap" }}
            >
              Linear Algebra
            </Text>
          </HStack>
          <Flex
            direction={{
              base: "column",
              lg: "row",
            }}
            align={{
              base: "flex-start",
              lg: "center",
            }}
            justify="flex-start"
            wrap="wrap"
          >
            <Tag
              borderRadius="md"
              fontSize="sm"
              fontWeight="bold"
              style={{ backgroundColor: hexToRgba("#d05a45", 0.5) }}
              m={1}
              p={2}
            >
              Spring 2023
            </Tag>
            <Tag
              borderRadius="md"
              fontSize="sm"
              fontWeight="bold"
              style={{ backgroundColor: hexToRgba("#e4aa42", 0.5) }}
              m={1}
              p={2}
            >
              Group 1
            </Tag>
            <Tag
              borderRadius="md"
              fontSize="sm"
              fontWeight="bold"
              style={{ backgroundColor: hexToRgba("#3f6ee7", 0.5) }}
              m={1}
              p={2}
            >
              Computer Engineering Department
            </Tag>
            <Tag
              borderRadius="md"
              fontSize="sm"
              fontWeight="bold"
              style={{ backgroundColor: hexToRgba("#4a9c80", 0.5) }}
              m={1}
              p={2}
            >
              Sharif University of Technology, Tehran, Tehran Province, Iran
            </Tag>
          </Flex>
          <Text fontSize="xl" fontWeight="bold">
            <HStack>
              <FaInfoCircle />
              <Text fontSize="xl">Classes:</Text>
            </HStack>
          </Text>
          <Text fontSize="md" fontWeight="bold">
            <HStack pl={3}>
              <TiTime />
              <Text>Sunday and Tuesday, 10:30-12:00</Text>
            </HStack>
          </Text>
          <Text fontSize="md" fontWeight="bold">
            <HStack pl={3}>
              <TiLocation />
              <Text>Education Tower 306</Text>
            </HStack>
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            <HStack>
              <FaInfoCircle />
              <Text fontSize="xl">TA Classes:</Text>
            </HStack>
          </Text>
          <Text fontSize="md" fontWeight="bold">
            <Box pl={3}>TBA</Box>
          </Text>
          <Text fontSize="xl" fontWeight="bold">
            <HStack>
              <FaInfoCircle />
              <Text fontSize="xl">Course Description:</Text>
            </HStack>
          </Text>
          <Box pl={3}>
            <Text fontSize="md" as={"samp"} textAlign="justify">
              This course covers matrix theory and linear algebra, emphasizing
              topics useful in other disciplines. Linear algebra is a branch of
              mathematics that studies systems of linear equations and the
              properties of matrices. The concepts of linear algebra are
              extremely useful in image processing, computer vision, data
              science, machine learning, bio-informatics, social networks, and
              neuroscience. Due to its broad range of applications, linear
              algebra is one of the most widely taught subjects in college-level
              mathematics.
            </Text>
          </Box>
          <Link href="#" colorScheme="blue" fontWeight="bold">
            Syllabus
          </Link>
        </VStack>
      </Box>
    </Box>
  );
};

export default CourseInfo;

function hexToRgba(hex: string, alpha: number): string {
  const red = parseInt(hex.substr(1, 2), 16);
  const green = parseInt(hex.substr(3, 2), 16);
  const blue = parseInt(hex.substr(5, 2), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

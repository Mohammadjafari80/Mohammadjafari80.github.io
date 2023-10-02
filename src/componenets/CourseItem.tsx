import {
  Heading,
  Button,
  useColorMode,
  Link,
  Icon,
  Flex,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { FC } from "react";
import { FaFilePdf, FaFilePowerpoint, FaVideo } from "react-icons/fa";

interface CourseItemProps {
  topic: string;
  title: string;
  chapter: string;
  color?: string;
  downloads?: {
    slide?: string;
    video?: string;
    pdf?: string;
  };
}

const CourseItem: FC<CourseItemProps> = ({
  topic,
  title,
  chapter,
  color,
  downloads,
}) => {
  const { colorMode } = useColorMode();
  const bgColor = colorMode === "dark" ? "#1F1F1F" : "#F8F8F8";

  return (
    <Grid
      bgColor={bgColor}
      borderRadius="30px"
      boxShadow="10px 10px 10px rgba(0, 0, 0, 0.2)"
      mt={[10, 10, 20, 10, 5]}
      overflow="hidden"
      width="100%"
      templateAreas={{
        base: `'title' 'info'`,
        lg: `'title info'`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
      templateRows={{
        lg: "1fr",
      }}
    >
      <GridItem
        bgColor={color}
        color="white"
        padding="30px"
        width={"100%"}
        overflow={"hidden"}
      >
        <Heading
          as="h6"
          opacity="0.6"
          letterSpacing="1px"
          textTransform="uppercase"
          fontSize="md"
        >
          Topic
        </Heading>
        <Heading as="h2" letterSpacing="1px" mt={6} fontSize="xl">
          {topic}
        </Heading>
        {/* <Text
          as="a"
          href="#"
          opacity="0.6"
          fontSize="sm"
          textDecoration="none"
          color="white"
        >
          View all chapters <i className="fas fa-chevron-right"></i>
        </Text> */}
      </GridItem>
      <GridItem padding="30px" position="relative" width="100%">
        {/* <Box
          position="absolute"
          top="30px"
          right="30px"
          textAlign="right"
          width="150px"
        ></Box> */}
        <Heading as="h6" letterSpacing="1px" fontSize="md">
          {chapter}
        </Heading>
        <Heading
          as="h2"
          letterSpacing="1px"
          mt={5}
          mb={1}
          fontSize="xl"
          color={color}
        >
          {title}
        </Heading>
        <Flex
          direction={{
            base: "row-reverse",
            lg: "row-reverse",
          }}
          align={{
            base: "center",
            lg: "flex-start",
          }}
          justify={{
            base: "flex-end",
            lg: "flex-start",
          }}
          wrap="wrap"
          w={"100%"}
        >
          {downloads?.slide && (
            <Link href={downloads.slide} isExternal>
              <Button
                leftIcon={<Icon as={FaFilePowerpoint} />}
                variant="outline"
                m={1}
                p={2}
                _hover={{ backgroundColor: hexToRgba("#e4aa42", 0.5) }}
              >
                Slide
              </Button>
            </Link>
          )}
          {downloads?.video && (
            <Link href={downloads.video} isExternal>
              <Button
                leftIcon={<Icon as={FaVideo} />}
                variant="outline"
                m={1}
                p={2}
                _hover={{ backgroundColor: hexToRgba("#4a9c80", 0.5) }}
              >
                Video
              </Button>
            </Link>
          )}
          {downloads?.pdf && (
            <Link href={downloads.pdf} isExternal>
              <Button
                leftIcon={<Icon as={FaFilePdf} />}
                variant="outline"
                m={1}
                p={2}
                _hover={{ backgroundColor: hexToRgba("#d05a45", 0.5) }}
              >
                PDF
              </Button>
            </Link>
          )}
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default CourseItem;

function hexToRgba(hex: string, alpha: number): string {
  const red = parseInt(hex.substr(1, 2), 16);
  const green = parseInt(hex.substr(3, 2), 16);
  const blue = parseInt(hex.substr(5, 2), 16);

  return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

import { FC } from "react";
import {
  Heading,
  useColorMode,
  Link,
  Flex,
  Grid,
  GridItem,
  Image,
  Text,
  Badge,
  Box,
  Icon
} from "@chakra-ui/react";
import { FaLocationDot } from "react-icons/fa6";  // Import an icon for lab location

interface TimelineEventProps {
  imageUrl: string;
  title: string;
  labName: string;
  labLink?: string;
  description: string;
  date: string;
}

const TimelineEvent: FC<TimelineEventProps> = ({
  imageUrl,
  title,
  labName,
  labLink,
  description,
  date,
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
        base: `'image' 'info'`,
        lg: `'image info'`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem
        padding={{
          base: "30px",
          lg: "10px",
        }}
        display="flex"
        justifyContent="center"
      >
        <Image
          src={imageUrl}
          alt={`${title} research project at ${labName}`}
          borderRadius="25px"
          objectFit="cover"
          height="100%"
        />
      </GridItem>
      <GridItem padding="30px" textAlign="left">
        <Heading as="h2" fontSize="sm" mb={1} display="flex" alignItems="center">
          <Icon as={FaLocationDot} mr={2} />
          {labName}
        </Heading>
        {labLink ? (
          <Link href={labLink} isExternal>
            <Heading
              as="h3"
              letterSpacing="1px"
              mt={3}
              fontSize="lg"
              color="gray.500"
            >
              {title}
            </Heading>
          </Link>
        ) : (
          <Heading as="h3" letterSpacing="1px" mt={3} fontSize="lg" color="gray.500">
            {title}
          </Heading>
        )}
        <Flex direction="column" align="flex-start" mt={4}>
          <Text as="kbd">{description}</Text>
          <Box mt={4}>
            <Badge
              borderRadius="md"
              fontSize="sm"
              fontWeight="bold"
              p={2}
            >
              {date}
            </Badge>
          </Box>
        </Flex>
      </GridItem>
    </Grid>
  );
};

export default TimelineEvent;

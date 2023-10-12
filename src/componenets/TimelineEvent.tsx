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
import { FaLocationDot } from "react-icons/fa6";  // import an icon for the lab

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
      templateRows={{
        lg: "1fr",
      }}
    >
      <GridItem
        padding={{
          base: "30px",
          lg: "10px",
        }}
        width={"100%"}
        overflow={"hidden"}
        mx={'auto'}
        display={'flex'}
        justifyContent={'center'}
      >
        <Image
          src={imageUrl}
          alt={title}
          borderRadius="25px"
          objectFit="cover"
          height="100%"
        />
      </GridItem>
      <GridItem padding="30px" position="relative" width="100%" textAlign={'left'}>
        <Heading as="h2" letterSpacing="1px" fontSize="sm">
          <Icon as={FaLocationDot}/> {labName}  {/* Use an icon next to the lab name */}
        </Heading>
        <Link href={labLink} isExternal>
          <Heading
            as="h2"
            letterSpacing="1px"
            mt={5}
            mb={1}
            fontSize="xl"
            color={'grey.500'}
          >
            {title}
          </Heading>
        </Link>
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
            lg: "flex-end",
          }}
          wrap="wrap"
          w={"100%"}
        >
          <Text as={'kbd'}>{description}</Text>
          <Box display="flex" alignItems="center" mt={2}>
            <Badge
              borderRadius="md"
              fontSize="sm"
              fontWeight="bold"
              p={2}
              mt={5}
              // colorScheme="blue" 
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

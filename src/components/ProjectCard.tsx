import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Image,
  Link,
  useColorModeValue,
  Flex,
  Icon
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';  // Import the GitHub icon

interface ProjectCardProps {
  title: string;
  image: string;
  tag: string;
  color: string;
  githubLink: string;
  variant?: 'light' | 'dark';
}

export default function ProjectCard({
  title,
  image,
  tag,
  color,
  githubLink,
  variant = 'light',
}: ProjectCardProps) {
  // Define color schemes for light and dark variants
  const bgColorLight = useColorModeValue('#F8F8F8', '#1F1F1F');
  const bgColorDark = useColorModeValue('#FFFFFF', '#121212');
  const bgColor = variant === 'dark' ? bgColorDark : bgColorLight;

  return (
    <Center py={6}>
      <Box
        role="group"
        p={6}
        maxW="440px"
        w="full"
        bg={bgColor}
        boxShadow="2xl"
        rounded="lg"
        pos="relative"
        zIndex={1}
      >
        <Flex
          rounded="lg"
          mt={-12}
          pos="relative"
          width="90%"
          mx="auto"
          alignItems="center"
          justifyContent="center"
          _groupHover={{
            _after: {
              filter: 'blur(13px)',
            },
          }}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundColor: `rgba(${hexToRgb(color)}, 0.15)`,
            filter: 'blur(25px)',
            zIndex: -1,
          }}
        >
          <Image
            rounded="lg"
            height="100%"
            width="100%"
            objectFit="cover"
            src={image}
            alt={`Project thumbnail for ${title}`}
          />
        </Flex>

        <Stack pt={10} align="center">
          <Text
            color="white"
            fontSize="xs"
            textTransform="uppercase"
            bg={color}
            p={2}
            rounded="md"
          >
            {tag}
          </Text>
          <Heading
            fontSize="2xl"
            fontFamily="body"
            fontWeight={700}
            mt={3}
            mb={10}
            isTruncated
            maxWidth="100%"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {title}
          </Heading>
          <Link href={githubLink} isExternal position="absolute" bottom={5} aria-label={`${title} GitHub repository`}>
            <Icon as={FaGithub} boxSize={6} />
          </Link>
        </Stack>
      </Box>
    </Center>
  );
}

// Converts hex color to RGB for dynamic styling
function hexToRgb(hex: string): string {
  const red = parseInt(hex.substr(1, 2), 16);
  const green = parseInt(hex.substr(3, 2), 16);
  const blue = parseInt(hex.substr(5, 2), 16);

  return `${red}, ${green}, ${blue}`;
}

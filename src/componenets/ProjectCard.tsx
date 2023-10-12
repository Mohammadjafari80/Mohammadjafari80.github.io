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
  // const { colorMode } = useColorMode();

  const bgColorLight = useColorModeValue('#F8F8F8', '#1F1F1F');
  const bgColorDark = useColorModeValue('#FFFFFF', '#121212');
  // const textColorLight = useColorModeValue('black', 'white');
  // const textColorDark = useColorModeValue('black', 'white');

  const bgColor = variant === 'dark' ? bgColorDark : bgColorLight;

  return (
    <Center py={6}>
      <Box
        role={'group'}
        p={6}
        maxW={'440px'}
        w={'full'}
        bg={bgColor}
        boxShadow='2xl'
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}
        position="relative" 
      >
        <Flex  // Change this from Box to Flex
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          width={'90%'}  // Set the width to be 90% of the parent box
          mx={'auto'}
          alignItems='center'  // Added to center the image vertically
          justifyContent='center'  // Added to center the image horizontally
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
              rounded={'lg'}
              height={'100%'}  // Set the height to be 100% of the inner Flex
              width={'100%'}   // Set the width to be 100% of the inner Flex
              objectFit={'cover'}  // This will ensure the image covers the area without distortion
              src={image}
              alt={title}
          />
      </Flex>

        <Stack pt={10} align={'center'} >
          <Text
            color={'white'}
            fontSize={'xs'}
            textTransform={'uppercase'}
            bg={color}
            p={2}
            rounded={'md'}
          >
            {tag}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={700} mt={3} mb={10} isTruncated  // Indicates text should be truncated
  maxWidth="100%"  // Ensures the text will not exceed the width of its container
  whiteSpace="nowrap"  // Prevents the text from wrapping onto a new line
  overflow="hidden"  // Hides any text that overflows the box
  textOverflow="ellipsis" >
            {title}
          </Heading>
          <Link href={githubLink} isExternal position="absolute" bottom={5}>  {/* Position the link */}
            <Icon as={FaGithub} boxSize={6} />  {/* Use the GitHub icon */}
          </Link>
        </Stack>
      </Box>
    </Center>
  );
}


function hexToRgb(hex: string): string {
  const red = parseInt(hex.substr(1, 2), 16);
  const green = parseInt(hex.substr(3, 2), 16);
  const blue = parseInt(hex.substr(5, 2), 16);

  return `${red}, ${green}, ${blue}`;
}

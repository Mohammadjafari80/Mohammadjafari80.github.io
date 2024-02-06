// src/components/PaperComponent.tsx
import React from 'react';
import { Box, Text, List, ListItem, Icon, Tag, Link, useColorMode } from "@chakra-ui/react";
import { FaBook, FaUsers, FaLink, FaInfoCircle } from 'react-icons/fa';

const PaperComponent: React.FC<PaperComponentProps> = ({
  title,
  authors,
  conference,
  color,
  status = 'Under Review',
  link,
  linkText,
  linkTagColor = '#3182ce',
  description
}) => {
  const { colorMode } = useColorMode();
  const descriptionColor = colorMode === 'dark' ? 'gray.200' : 'gray.600';

  const authorElements = authors.split(',').map((author, index, array) => {
    author = author.trim();
    const isMohammadJafari = author.includes("Mohammad Jafari");
    const notLastAuthor = index < array.length - 1;

    // Function to convert hex color to RGBA
    const hexToRGBA = (hex: string, opacity: number) => {
      let r = 0, g = 0, b = 0;
      // 3 digits
      if (hex.length === 4) {
        r = parseInt(hex[1] + hex[1], 16);
        g = parseInt(hex[2] + hex[2], 16);
        b = parseInt(hex[3] + hex[3], 16);
      }
      // 6 digits
      else if (hex.length === 7) {
        r = parseInt(hex[1] + hex[2], 16);
        g = parseInt(hex[3] + hex[4], 16);
        b = parseInt(hex[5] + hex[6], 16);
      }
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };


    return (
      <React.Fragment key={index}>
        {isMohammadJafari ? (
          <Box position="relative" display="inline-block">
            <Text as="span" style={{ fontWeight: 'bold', fontStyle: 'italic' }}>
              {author}
            </Text>
            <Text as="span" style={{
              fontWeight: 'bold',
              fontStyle: 'italic',
              color: hexToRGBA(color, 0.6),
              position: 'absolute',
              left: 0,
              top: 0,
            }}>
              {author}
            </Text>
          </Box>
        ) : (
          <span>{author}</span>
        )}
        {notLastAuthor && ", "}
      </React.Fragment>
    );
  });

  

  const statusStyles = getStatusTagStyles(status);

  return (
    <Box textAlign={'left'} mb={4} pl={4}>
      <List spacing={2}>
        <ListItem>
          <Icon as={FaBook} mr={2} />
          <Text fontSize='xl' fontWeight="bold" as="span">{title}</Text>
        </ListItem>
        <ListItem>
          <Icon as={FaUsers} mr={2} />
          {/* Render author elements here */}
          <Text as="kbd">{authorElements}</Text>
        </ListItem>
        <ListItem>
          <Text as="span" style={{ backgroundColor: color, color: '#ffffff', padding: '2px 4px', borderRadius: '4px' }}>{conference}</Text>
          {status && <Tag ml={2} size="md" {...statusStyles} variant="solid">{status}</Tag>}
        </ListItem>
        {link && <ListItem display="flex" alignItems="center">
          <Icon as={FaLink} mr={2} />
          <Text as="span">Paper Link:</Text>
          <Tag ml={2} bg={linkTagColor} color="white">
            <Link href={link} isExternal style={{ fontVariant: 'small-caps' }}>{linkText || 'More Info'}</Link>
          </Tag>
        </ListItem>}
        {description && <ListItem>
          <Icon as={FaInfoCircle} mr={2} />
          <Text as="i" color={descriptionColor}>{description}</Text>
        </ListItem>}
      </List>
    </Box>
  );
};

function getStatusTagStyles(status: string) {
  if (status === 'Accepted') {
    return {
      colorScheme: 'green',
      style: {
        fontWeight: 'bold',
        boxShadow: '0px 0px 10px 2px rgba(50, 205, 50, 0.6)', // Glow effect
      },
    };
  }
  // Default styles for other statuses
  return {
    colorScheme: 'gray',
    style: {},
  };
}

export default PaperComponent;

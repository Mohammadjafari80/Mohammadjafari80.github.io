// src/components/PaperComponent.tsx
import React from 'react';
import { Box, Text, List, ListItem, Icon, Tag, Link, useColorMode } from "@chakra-ui/react";
import { FaBook, FaUsers, FaLink, FaInfoCircle } from 'react-icons/fa';
import MovingGradientText from './MovingGradientText'; // Ensure this path is correct

interface PaperComponentProps {
  title: string;
  authors: string;
  conference: string;
  color: string;
  status?: string;
  link?: string;
  linkText?: string;
  linkTagColor?: string;
  description?: string;
}

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

  // Split authors by comma to individually check and render each name
  const authorElements = authors.split(',').map((author, index, array) => {
    // Trim the author name to remove any leading/trailing spaces
    author = author.trim();
    const isMohammadJafari = author.includes("Mohammad Jafari");
    const notLastAuthor = index < array.length - 1; // Check if this author is not the last in the list
  
    return (
      <React.Fragment key={index}>
        {isMohammadJafari ? (
          <MovingGradientText text={author} fontsize={18} fontFamily='"Roboto Mono", monospace' span={true} textTransform='capitalize' />
        ) : (
          <span>{author}</span>
        )}
        {/* Add a comma and space if this is not the last author */}
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

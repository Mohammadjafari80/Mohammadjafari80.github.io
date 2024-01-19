// src/components/PaperComponent.tsx
import React from 'react';
import { Box, Text, List, ListItem, Icon, Tag, Link, useColorMode } from "@chakra-ui/react";
import { FaBook, FaUsers, FaLink, FaInfoCircle } from 'react-icons/fa';

interface PaperComponentProps {
  title: string;
  authors: string;
  conference: string;
  color: string;
  status?: string;
  link?: string;
  linkText?: string;  // Optional property for link text
  linkTagColor?: string; // Optional property for link tag color (hex code)
  description?: string;  // Optional property for a description
}

const PaperComponent: React.FC<PaperComponentProps> = ({
  title,
  authors,
  conference,
  color,
  status = 'Under Review',
  link,
  linkText,
  linkTagColor = '#3182ce', // Default hex color for the link tag
  description
}) => {
  const { colorMode } = useColorMode();
  const descriptionColor = colorMode === 'dark' ? 'gray.200' : 'gray.600';
  const styledAuthors = authors.replace(
    /Mohammad Jafari/g,
    '<span style="font-weight: bold; font-style: italic;">Mohammad Jafari</span>'
  );
  
  const getStatusTagStyles = (status: string) => {
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
  };

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
          <Text as="kbd" dangerouslySetInnerHTML={{ __html: styledAuthors }} />
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

export default PaperComponent;

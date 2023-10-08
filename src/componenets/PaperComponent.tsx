// src/components/PaperComponent.tsx
import React from 'react';
import { Box, Text, List, ListItem, Icon } from "@chakra-ui/react";
import { FaBook, FaUsers } from 'react-icons/fa';

interface PaperComponentProps {
  title: string;
  authors: string;
  conference: string;
  color: string
}

const PaperComponent: React.FC<PaperComponentProps> = ({ title, authors, conference, color }) => {
  const boldedAuthors = authors.replace(/Mohammad Jafari/g, '<strong>Mohammad Jafari</strong>');

  return (
    <Box textAlign={'left'} mb={4} pl={4}>
      <List spacing={2}>
        <ListItem>
          <Icon as={FaBook} mr={2} />
          <Text fontSize='xl' fontWeight="bold" as="span">{title}</Text>
        </ListItem>
        <ListItem>
          <Icon as={FaUsers} mr={2} />
          <Text as="kbd" dangerouslySetInnerHTML={{ __html: boldedAuthors }} />
        </ListItem>
        <ListItem>
          {/* Custom color highlighting for conference name */}
          <Text as="span" style={{ backgroundColor: color, color: '#ffffff', padding: '2px 4px', borderRadius: '4px' }}>{conference}</Text>
        </ListItem>
        <ListItem>
          <Text>[Access upon request]</Text>
        </ListItem>
      </List>
    </Box>
  );
};

export default PaperComponent;

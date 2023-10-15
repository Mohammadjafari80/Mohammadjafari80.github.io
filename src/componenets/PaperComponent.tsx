// src/components/PaperComponent.tsx
import React from 'react';
import { Box, Text, List, ListItem, Icon, Tag } from "@chakra-ui/react";
import { FaBook, FaUsers, FaLink } from 'react-icons/fa';

interface PaperComponentProps {
  title: string;
  authors: string;
  conference: string;
  color: string;
  status?: string;
  link?: string;
}

const PaperComponent: React.FC<PaperComponentProps> = ({
  title,
  authors,
  conference,
  color,
  status = 'Under Review',
  link
}) => {
  const styledAuthors = authors.replace(
    /Mohammad Jafari/g,
    '<span style="font-weight: bold; font-style: italic;">Mohammad Jafari</span>'
  );

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
          {/* Custom color highlighting for conference name */}
          <Text as="span" style={{ backgroundColor: color, color: '#ffffff', padding: '2px 4px', borderRadius: '4px' }}>{conference}</Text>
          <Tag ml={2} size="md" colorScheme="gray" variant="solid">{status}</Tag>
        </ListItem>
        { status == 'Under Review' && <ListItem>
          <Icon as={FaLink} mr={2} />
          {link ? (
            <Text as="a" href={link}>{link}</Text>
          ) : (
            <Text as="span">[Access Upon Request]</Text>
          )}
        </ListItem>}
      </List>
    </Box>
  );
};

export default PaperComponent;

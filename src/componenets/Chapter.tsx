// Chapter.tsx
import * as React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  Image,
} from "@chakra-ui/react";

interface ChapterProps {
  chapterNumber: number;
  chapterColor: string;
  chapterTitle: string;
  chapterDescription: string;
  quizzes: QuizItemProps[];
}

interface ChapterHeaderProps {
  chapterNumber: number;
  chapterColor: string;
  chapterTitle: string;
  chapterDescription: string;
}

interface QuizItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

const ChapterHeader: React.FC<ChapterHeaderProps> = ({
  chapterNumber,
  chapterColor,
  chapterTitle,
  chapterDescription,
}) => {
  return (
    <VStack alignItems="flex-start" spacing={4}>
      <Text fontSize="2xl" fontWeight="bold" color={chapterColor}>
        {chapterNumber}
      </Text>
      <VStack alignItems="flex-start" spacing={2}>
        <Heading size="md">{chapterTitle}</Heading>
        <Text>{chapterDescription}</Text>
      </VStack>
    </VStack>
  );
};

const QuizItem: React.FC<QuizItemProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <ListItem>
      <VStack alignItems="flex-start" spacing={2}>
        <Image src={imageUrl} alt={title} width="280px" />
        <Heading size="sm">{title}</Heading>
        <Text>{description}</Text>
      </VStack>
    </ListItem>
  );
};

const Chapter: React.FC<ChapterProps> = ({
  chapterNumber,
  chapterColor,
  chapterTitle,
  chapterDescription,
  quizzes,
}) => {
  return (
    <Box>
      <ChapterHeader
        chapterNumber={chapterNumber}
        chapterColor={chapterColor}
        chapterTitle={chapterTitle}
        chapterDescription={chapterDescription}
      />
      <List>
        {quizzes.map((quiz, index) => (
          <QuizItem key={index} {...quiz} />
        ))}
      </List>
    </Box>
  );
};

export default Chapter;

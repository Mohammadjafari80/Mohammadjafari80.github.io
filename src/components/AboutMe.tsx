import { Box } from "@chakra-ui/react";
import TextEffect from "../GPT";

const AboutMe = () => {
  
  const text = `I hold a Bachelor’s degree in Computer Engineering from **Sharif University of Technology**, with a focus on **AI safety** and **building reliable systems**. My work centers on developing **scalable and trustworthy algorithms**, particularly in the areas of **safety for large language models (LLMs)** and **AI alignment**.
  ‎ 
  I am particularly interested in **LLM reasoning**, **multimodal models**, and **ensuring the safety and reliability of AI systems**. My goal is to contribute to creating **secure and resilient AI technologies** that address critical challenges while prioritizing privacy and ethical considerations.`

  return (
    <Box>
      <Box
        minHeight={'300px'}
        overflow="hidden" // Prevent text from overflowing
      >
        <TextEffect
          text={text}
          minTypingDelay={1}
          maxTypingDelay={1}
          notDisplayCaretAfterFinishes
          thinkingDelay={100}
        />
      </Box>
    </Box>
  );
};


export default AboutMe;

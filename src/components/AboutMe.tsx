import {Box } from "@chakra-ui/react";
import TextEffect from "../GPT"

const AboutMe = () => {
  return (
    <Box>

      <TextEffect text={`I hold a Bachelor's degree in Computer Engineering from **Sharif University of Technology**, with a strong focus on **AI safety**, **optimization**, and **robust systems**. My work centers on developing **scalable** and **trustworthy algorithms**, especially in the areas of **safety for large language models (LLMs)** and **privacy-preserving AI**.
‎ 
I am particularly interested in *computer vision*, *natural language processing* (NLP), *multi-level optimization*, and *AI privacy*. My goal is to contribute to creating **efficient**, **resilient**, and **secure AI systems** that address important challenges in technology while prioritizing privacy and reliability.

`} minTypingDelay={20} maxTypingDelay={20} notDisplayCaretAfterFinishes thinkingDelay={100}/>
      {/* <Text>
        I hold a Bachelor’s degree in Computer Engineering from 
        <Text as="b"> Sharif University of Technology</Text>, with a strong focus on 
        <Text as="b"> AI safety</Text>, <Text as="b"> optimization</Text>, and 
        <Text as="b"> robust systems</Text>. My work centers on developing scalable and 
        <Text as="b"> trustworthy algorithms</Text>, especially in the areas of 
        <Text as="b"> safety for large language models (LLMs)</Text> and 
        <Text as="b"> privacy-preserving AI</Text>.
      </Text>
      <Text mt={4}>
        I am particularly interested in <Text as="i">computer vision</Text>, 
        <Text as="i">natural language processing</Text> (NLP), 
        <Text as="i">multi-level optimization</Text>, and <Text as="i">AI privacy</Text>. 
        My goal is to contribute to creating <Text as="b"> efficient</Text>, 
        <Text as="b"> resilient</Text>, and <Text as="b"> secure AI systems </Text> 
        that address important challenges in technology while prioritizing privacy and reliability.
      </Text> */}
    </Box>
  );
};

export default AboutMe;

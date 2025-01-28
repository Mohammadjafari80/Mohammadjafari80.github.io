// src/components/PapersUnderReviewSection.tsx
import React from 'react';
import { Box, Heading } from "@chakra-ui/react";
import PaperComponent from '../components/PaperComponent';

const PapersUnderReviewSection: React.FC = () => {
  return (
    <Box>
      <Heading mb={8}>Publications</Heading>
      <PaperComponent
        title="RODEO: Robust Out-of-Distribution Detection Via Exposing Adaptive Outliers"
        authors="Hossein Mirzaei, Mohammad Jafari, Hamid Reza Dehbashi, Ali Ansari, Sepehr Ghobadi, Masoud Hadi, Arshia Soltani Moakhar, Mahdieh Soleymani Baghshah, Mohammad Hossein Rohban"
        conference="ICML 2024"
        color='#d05a45'
        status='Accepted'
        link='https://rohban-lab.github.io/rodeo_page/'
        linkText='RODEO'
        linkTagColor='#B31B1B'
      />
      <PaperComponent
        title="Universal Novelty Detection Through Adaptive Contrastive Learning"
        authors="Hossein Mirzaei, Mojtaba Nafez, Mohammad Jafari, Mohammad Bagher Soltani, Mohammad Sabokrou, Mohammad Hossein Rohban"
        conference="CVPR 2024"
        color='#3f6ee7'
        status='Accepted'
        link='https://www.arxiv.org/abs/2408.10798'
        linkText='arXiv'
        linkTagColor='#B31B1B'
      />
      {/* ... other paper components */}
      <PaperComponent
        title="The Power of Few: Accelerating and Enhancing Data Reweighting with Coreset Selection"
        authors="Mohammad Jafari, Yimeng Zhang, Yihua Zhang, Sijia Liu"
        link='https://arxiv.org/abs/2403.12166'
        linkText='arXiv'
        linkTagColor='#B31B1B'
        conference="ICASSP 2024"
        color='#e4aa42'
        status='Accepted'
      />
      <PaperComponent
        title="Killing it with Zero-Shot: Adversarially Robust Novelty Detection"
        authors="Hossein Mirzaei, Mohammad Jafari, Hamid Reza Dehbashi, Zeinab Sadat Taghavi, Mohammad Sabokrou, Mohammad Hossein Rohban"
        conference="ICASSP 2024"
        color='#e4aa42'
        status='Accepted'
      />
    </Box>
  );
};

export default PapersUnderReviewSection;
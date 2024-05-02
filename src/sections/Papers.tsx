// src/components/PapersUnderReviewSection.tsx
import React from 'react';
import { Box, Heading } from "@chakra-ui/react";
import PaperComponent from '../componenets/PaperComponent';

const PapersUnderReviewSection: React.FC = () => {
  return (
    <Box>
      <Heading mb={8}>Publications</Heading>
      <PaperComponent
        title="RODEO: Robust Out-of-Distribution Detection Via Exposing Adaptive Outliers"
        authors="Hossein Mirzaei, Mohammad Jafari, Hamid Reza Dehbashi, Ali Ansari, Sepehr Ghobadi, Masoud Hadi, Arshia Soltani Moakhar, Mahdieh Soleymani Baghshah, Mohammad Hossein Rohban"
        conference="ICML 2024"
        // link='https://openreview.net/forum?id=Tc3duzOHa8'
        // linkText='Open Review'
        // linkTagColor='#80261b'
        color='#d05a45'
        status='Accepted'
        description='The initial scores are 8, 6, 6, 6.'
      />
      <PaperComponent
        title="Perfected by Imperfections: Adversarially Robust Detection of Out-of-Distribution Samples"
        authors="Hossein Mirzaei, Mohammad Jafari, Hamid Reza Dehbashi, Mohammad Hossein Rohban"
        conference="ECCV 2024"
        status='Submitted'
        color='#4a9c80'
      />
      <PaperComponent
        title="Unsupervised Out-of-Distribution Detection: From Low to High Inlier Variation"
        authors="Hossein Mirzaei, Mohammad Jafari*, Mojtaba Nafez*, Mohammad Bagher Soltani, Mohammad Sabokrou, Mohammad Hossein Rohban"
        conference="ECCV 2024"
        status='Submitted'
        color='#4a9c80'
      />
      <PaperComponent
        title="Universal Novelty Detection Through Adaptive Contrastive Learning"
        authors="Hossein Mirzaei, Mojtaba Nafez, Mohammad Jafari, Mohammad Bagher Soltani, Mohammad Sabokrou, Mohammad Hossein Rohban"
        conference="CVPR 2024"
        color='#3f6ee7'
        status='Accepted'
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



// \item \textbf{The Power of Few: Accelerating and Enhancing Data Reweighting with Coreset Selection} \\ \textit{\small \textbf{Mohammad Jafari}, Yimeng Zhang, Yihua Zhang, Sijia Liu}, \textit{\small \textbf{ICASSP 2024}}. [Access upon request]
// \vspace{2mm}
// \item \textbf{Killing it with Zero-Shot: Adversarially Robust Novelty Detection} \\ \textit{\small Hossein Mirzaei, \textbf{Mohammad Jafari}, Hamid Reza Dehbashi, Zeinab Sadat Taghavi, Mohammad Sabokrou, Mohammad Hossein Rohban}, \textit{\small \textbf{ICASSP 2024}}. [Access upon request]
// \vspace{2mm}
// src/components/PapersUnderReviewSection.tsx
import React from 'react';
import { Box, Heading, SimpleGrid } from "@chakra-ui/react";
import ProjectCard from '../componenets/ProjectCard';  // corrected the folder name from 'componenets' to 'components'

const projectData = [

    {
        title: "Face Morph",
        image: "/images/project-images-vision_01.gif",
        tag: "Image Processing",
        color: "#e4aa42",
        githubLink: "https://github.com/Mohammadjafari80/ImageProcessingProjects/tree/main/Image%20morphing",
    },

    {
        title: "HoG Face Detection",
        image: "/images/project-images-vision_08.png",
        tag: "Computer Vision",
        color: "#4a9c80",
        githubLink: "https://github.com/Mohammadjafari80/ComputerVisionProjects/tree/main/Face%20Detection%20via%20HoG",
    },

    {
        title: "Hybrid Images",
        image: "/images/project-images_04.png",
        tag: "Image Processing",
        color: "#e4aa42",
        githubLink: "https://github.com/Mohammadjafari80/Hybrid-Images",
      },

    {
        title: "Video Panorama & Processing",
        image: "/images/project-images-vision_05.gif",
        tag: "Computer Vision",
        color: "#4a9c80",
        githubLink: "https://github.com/Mohammadjafari80/ComputerVisionProjects/tree/main/Video%20Panorama%20%26%20Processing",
    },

    {
        title: "Image Blending",
        image: "/images/project-images_10.png",
        tag: "Image Processing",
        color: "#e4aa42",
        githubLink: "https://github.com/Mohammadjafari80/ImageProcessingProjects/tree/main/Image%20blending",
      },

    {
        title: "Perspective",
        image: "/images/project-images-vision_03.png",
        tag: "Computer Vision",
        color: "#4a9c80",
        githubLink: "https://github.com/Mohammadjafari80/ComputerVisionProjects/tree/main/Perspective",
    },

    {
        title: "3D Reconstruction",
        image: "/images/project-images-vision_07.gif",
        tag: "Computer Vision",
        color: "#4a9c80",
        githubLink: "https://github.com/Mohammadjafari80/ComputerVisionProjects/tree/main/3D%20reconstruction",
    },

    {
        title: "Prokudin-Goskii",
        image: "/images/project-images_01.png",
        tag: "Image Processing",
        color: "#e4aa42",
        githubLink: "https://github.com/Mohammadjafari80/Prokudin-Goskii-Images",
      },

    {
        title: "Harris Corner Detection",
        image: "/images/project-images-vision_02.png",
        tag: "Computer Vision",
        color: "#4a9c80",
        githubLink: "https://github.com/Mohammadjafari80/ComputerVisionProjects/tree/main/Harris%20Corner%20Detection%20and%20Matching",
    },

    {
        title: "Epipolar Geometry",
        image: "/images/project-images-vision_06.png",
        tag: "Computer Vision",
        color: "#4a9c80",
        githubLink: "https://github.com/Mohammadjafari80/ComputerVisionProjects/tree/main/Epipolar%20Geometry",
    },

    {
      title: "Template Matching",
      image: "/images/project-images_02.png",
      tag: "Image Processing",
      color: "#e4aa42",
      githubLink: "https://github.com/Mohammadjafari80/Template-Matching",
    },

      {
        title: "Segmentation",
        image: "/images/project-images_08.png",
        tag: "Image Processing",
        color: "#e4aa42",
        githubLink: "https://github.com/Mohammadjafari80/ImageProcessingProjects/tree/main/Image%20Segmentation",
      },

      {
        title: "Active Contour",
        image: "/images/project-images_09.gif",
        tag: "Image Processing",
        color: "#e4aa42",
        githubLink: "https://github.com/Mohammadjafari80/ImageProcessingProjects/tree/main/Active%20Contours",
      },

    {
        title: "CamScanner",
        image: "/images/project-images_03.png",
        tag: "Image Processing",
        color: "#e4aa42",
        githubLink: "https://github.com/Mohammadjafari80/ImageProcessingProjects/tree/main/CamScanner",
      },

      {
        title: "Hough Transform",
        image: "/images/project-images_05.png",
        tag: "Image Processing",
        color: "#e4aa42",
        githubLink: "https://github.com/Mohammadjafari80/ImageProcessingProjects/tree/main/Detect%20Lines%20via%20Hough%20Transform",
      },

      {
        title: "Texture Synthesis",
        image: "/images/project-images_06.png",
        tag: "Image Processing",
        color: "#e4aa42",
        githubLink: "https://github.com/Mohammadjafari80/Texture-Synthesis",
      },

      {
        title: "Hole Filling",
        image: "/images/project-images_07.png",
        tag: "Image Processing",
        color: "#e4aa42",
        githubLink: "https://github.com/Mohammadjafari80/ImageProcessingProjects/tree/main/Image%20completion%20and%20hole%20filling",
      },


      
   
    // ... add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <Box>
      <Heading mb={16}>Projects</Heading>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
        {
          projectData.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              image={project.image}
              tag={project.tag}
              color={project.color}
              githubLink={project.githubLink}
            />
          ))
        }
      </SimpleGrid>
    </Box>
  );
};

export default Projects;

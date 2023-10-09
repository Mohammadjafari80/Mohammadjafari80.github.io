import { Grid, Tag } from "@chakra-ui/react";
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin } from 'react-icons/fa';

const ContactLinks = () => {
  return (
    <Grid
      templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(auto-fit, minmax(100px, 1fr))" }}  // 2x2 grid for base and 1x4 grid for md and above
      gap={{ base: "1", md: "3" }}  // Adjust gap between tags
    >
      <Tag
        borderRadius="md"
        fontSize="sm"
        fontWeight="bold"
        style={{ backgroundColor: hexToRgba("#e4aa42", 0.5) }}
        m={1}
        p={2}
        as="a"
        href="mailto:mamad.jafari91@gmail.com"
      >
        <FaEnvelope style={{ marginRight: '12px' }} />
        Email
      </Tag>

      <Tag
        borderRadius="md"
        fontSize="sm"
        fontWeight="bold"
        style={{ backgroundColor: hexToRgba("#d05a45", 0.5) }}  // Color updated to match LinkedIn tag
        m={1}
        p={2}
        as="a"
        href="/path-to-your-cv.pdf"
      >
        <FaFilePdf style={{ marginRight: '12px' }} />
        CV
      </Tag>

      <Tag
        borderRadius="md"
        fontSize="sm"
        fontWeight="bold"
        style={{ backgroundColor: hexToRgba("#4a9c80", 0.5) }}
        m={1}
        p={2}
        as="a"
        href="https://github.com/mohammadjafari80"
      >
        <FaGithub style={{ marginRight: '12px' }} />
        Github
      </Tag>

      <Tag
        borderRadius="md"
        fontSize="sm"
        fontWeight="bold"
        style={{ backgroundColor: hexToRgba("#3f6ee7", 0.5) }}
        m={1}
        p={2}
        as="a"
        href="https://www.linkedin.com/in/mohammadjafari01/"
      >
        <FaLinkedin style={{ marginRight: '12px' }} />
        LinkedIn
      </Tag>
    </Grid>
  );
};

export default ContactLinks;

function hexToRgba(hex: string, alpha: number): string {
    const red = parseInt(hex.substr(1, 2), 16);
    const green = parseInt(hex.substr(3, 2), 16);
    const blue = parseInt(hex.substr(5, 2), 16);
  
    return `rgba(${red}, ${green}, ${blue}, ${alpha})`;
}

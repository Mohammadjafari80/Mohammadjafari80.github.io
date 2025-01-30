import { Grid, Tag } from "@chakra-ui/react";
import { FaEnvelope, FaFilePdf, FaGithub, FaLinkedin, FaUserGraduate, FaTwitter } from 'react-icons/fa';

const ContactLinks = () => {
  return (
    <Grid
  templateColumns={{ base: "repeat(2, 1fr)", md: "repeat(6, 1fr)" }}  // 2 columns on base, 3 on md and above
  gap={{ base: "1", md: "1" }}
>
  <Tag
    borderRadius="md"
    fontSize="sm"
    fontWeight="bold"
    style={{ backgroundColor: hexToRgba("#e4aa42", 0.5) }}
    m={1}
    p={2}
    as="a"
    href="mailto:mohammad.jafari.varnous.2001@gmail.com"
    gridColumn={{ base: "span 1", md: "span 2" }}
  >
    <FaEnvelope style={{ marginRight: '12px' }} />
    Email
  </Tag>

  <Tag
    borderRadius="md"
    fontSize="sm"
    fontWeight="bold"
    style={{ backgroundColor: hexToRgba("#d05a45", 0.5) }}
    m={1}
    p={2}
    as="a"
    href="/CV_MohammadJafari.pdf"
    gridColumn={{ base: "span 1", md: "span 2" }}
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
    gridColumn={{ base: "span 1", md: "span 2" }}
  >
    <FaGithub style={{ marginRight: '12px' }} />
    Github
  </Tag>
  
  <Tag
        borderRadius="md"
        fontSize="sm"
        fontWeight="bold"
        style={{ backgroundColor: hexToRgba("#1da1f2", 0.5) }} // Twitter blue color
        m={1}
        p={2}
        as="a"
        href="https://x.com/Jafaresearch" // Replace with your actual Twitter handle URL
        gridColumn={{ base: "span 1", md: "span 2" }}
      >
        <FaTwitter style={{ marginRight: '12px' }} />
        Twitter (X)
</Tag>

  <Tag
    borderRadius="md"
    fontSize="sm"
    fontWeight="bold"
    style={{ backgroundColor: hexToRgba("#8746dc", 0.5) }}
    m={1}
    p={2}
    as="a"
    href="https://scholar.google.com/citations?hl=en&authuser=1&user=S8MWCKMAAAAJ"
    gridColumn={{ base: "span 1", md: "span 2" }}
  >
    <FaUserGraduate style={{ marginRight: '12px' }} />
    Scholar
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
    gridColumn={{ base: "span 1", md: "span 2" }}  // Span full width in base, single column in md
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

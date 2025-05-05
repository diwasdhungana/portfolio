/* eslint-disable react/prop-types */
import { Box, Typography, Container, Chip } from "@mui/material";
import { Helmet } from "react-helmet-async";

const technologiesYagya = [
  "React",
  "NEXT JS",
  "Nest JS",
  "NODE JS",
  "Socket.io",
  "Express",
  "Web3.js",
  "TypeScript",
  "Tailwind",
  "MUI",
  "AWS EC2",
  "Azure VM",
  "AWS s3",
  "Domain Management",
  "Server Setup",
  "MongoDB",
];

const technologiesBurgeonTech = [
  "React",
  "Vite",
  "NODE JS",
  "Express",
  "Web 2",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Mantine UI",
];

const technologiesFreeLance = [
  "React",
  "NODE JS",
  "Express",
  "TypeScript",
  "HTML",
  "CSS",
  "Tailwind",
  "Next js",
  "Web3 wallets",
  "NFTs",
  "Moralis",
  "Mongo DB",
  "My SQL",
  "Amazon EC2",
  "Amazon S3",
  "Hardhat",
  "Ngork",
  "MUI / Mantine UI",
  "Solidity",
  "BlockChain",
];

// Create a reusable Chip style function
const gradientChipStyle = (padding) => ({
  fontSize: { xs: "0.75rem", md: "0.875rem" },
  padding: { xs: "3px", md: "5px" },
  color: "#E1E1E1",
  borderRadius: "16px",
  backgroundColor: "#000000",
  border: "3px solid transparent",
  backgroundClip: "padding-box",
  position: "relative",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "translateY(-2px)",
  },
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: "16px",
    padding: padding,
    background:
      "linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%)",
    zIndex: -1,
  },
});

const Experience = () => {
  // Reusable Experience Entry Component
  const ExperienceEntry = ({
    title,
    subtitle,
    date,
    description,
    technologies,
  }) => (
    <Box
      sx={{
        maxWidth: "800px",
        py: { xs: 4, md: 0 },
        mx: "auto",
        px: { xs: 1, md: 0 },
        marginTop: { xs: 4, md: 4 },
        transition: "transform 0.3s ease",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "center" },
          mb: 4,
          gap: 1,
        }}
      >
        <Typography
          variant="h5"
          sx={{
            fontWeight: "bold",
            mb: 1,
            fontSize: { xs: "0.875rem", md: "1.5rem" },
            lineHeight: 1.2,
          }}
        >
          {title} /{" "}
          <span style={{ opacity: 0.7, fontWeight: "normal" }}>{subtitle}</span>
        </Typography>
        <Typography
          variant="subtitle2"
          sx={{
            opacity: 0.7,
            fontSize: { xs: "0.75rem", md: "inherit" },
            mb: { xs: 1, md: 0 },
          }}
        >
          {date}
        </Typography>
      </Box>

      {description.map((text, index) => (
        <Typography
          key={index}
          variant="body1"
          sx={{ mb: 4, opacity: 0.8, lineHeight: 1.6, textAlign: "left" }}
        >
          {text}
        </Typography>
      ))}

      <Box
        sx={{
          display: "flex",
          gap: { xs: 0.5, md: 1 },
          flexWrap: "wrap",
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        {technologies.map((tech) => (
          <Chip
            key={tech}
            label={tech}
            sx={gradientChipStyle({ xs: "3px", md: "5px" })}
          />
        ))}
      </Box>
    </Box>
  );

  return (
    <>
      <Helmet>
        <title>Diwas Dhungana - Full-Stack & Web3 Developer</title>
        <meta
          name="description"
          content="Diwas Dhungana's professional journey as a Full-Stack and Web3 Developer, with experience at NetixSol, Codix Sol and Gamica Cloud working on React, Node.js, and blockchain technologies."
        />
      </Helmet>
      <Container maxWidth="lg" id="experience" sx={{ px: { xs: 2, md: 0 } }}>
        <Box
          sx={{
            py: { xs: 4, md: 8 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            "&:not(:last-child)": {
              mb: 6,
            },
            lineHeight: 1.6,
          }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: "bold",
              letterSpacing: "5px",
              fontFamily: "Poppins",
              fontSize: { xs: "32px", sm: "40px", md: "47.42px" },
              lineHeight: { xs: 1.3, md: 1.2 },
            }}
          >
            EXPERIENCE
          </Typography>
          <Typography
            gutterBottom
            align="center"
            sx={{
              mb: 2,
              opacity: 0.7,
              background:
                "linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "0.2em",
              fontSize: { xs: "12px", md: "14px" },
            }}
          >
            EXPLORE NOW
          </Typography>

          {/* NetixSol */}
          <ExperienceEntry
            id="yagya"
            title="1. Yagya Foundry"
            subtitle="Software Engineer I "
            date="September 2024 - PRESENT"
            description={[
              "While in Yagya, I Developed and deployed web applications for Yagya.ai, managing client communication and technical aspects. Also handeling devops and server management when in need.",
              "I help by leading project management and optimized human resources utilization for efficient workflow. I have been enjoying to contribute for the growth of the company through successful website development and deployment.",
            ]}
            technologies={technologiesYagya}
          />

          {/* Codix Sol */}
          <ExperienceEntry
            id="Burgeon"
            title="2. Burgeon Tech"
            subtitle="Web Dev Intern"
            date="october 2024 - December 2024"
            description={[
              "As a Frontend Developer at Bergeon Tech, I developed robust web solutions Frontend in the MERN stack. Optimized enterprise application performance through modular architecture and reusable components, improving codebase efficiency. Delivered scalable solutions meeting strict deadlines while solving complex technical challenges.",
              "Got mentored by senior developers in modern practices through knowledge-sharing initiatives. Practiced best practices for maintainable React/Node.js systems. Expertise includes REST APIs, secure authentication flows, and responsive UI design aligned with UX principles. Focused on delivering clean, maintainable code.",
            ]}
            technologies={technologiesBurgeonTech}
          />

          {/* Gamica Cloud */}
          <ExperienceEntry
            id="Freelance"
            title="3. Freelancing"
            subtitle="Web3 Developer"
            date="septemnber 2021 - present"
            description={[
              "It's not a regular job but I try to take on the unique chanllanges while building the freelance project. It's always something different that past project and also got oppourtunity to explore so many JS and Web3 framework while freelancing.",
              "Learned techniques to handle the full application development pipleline and created many small to mid level application while freelancing.",
              "Got connected with many clients due to my clear communication skills also I rapidly mastere new technologies building scalable frontend and full-stack projects from scratch with a focus on clean architecture, database integration, and industry best practices.",
            ]}
            technologies={technologiesFreeLance}
          />
        </Box>
      </Container>
    </>
  );
};

export default Experience;

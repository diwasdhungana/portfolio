import { Box, Typography, Container, Grid, Link } from "@mui/material";
import GraceRnLogo from "../assets/GraceRnLogoImage.png";
import EmployeeAppLogo from "../assets/EmployeeAppLogo.png";
import BiramiFilesLogo from "../assets/BiramiFilesLogo.png";
import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = useMemo(
    () => [
      {
        title: "Grace Rn",
        description:
          "(Frontend only) Made as per client's request. A Nursing Exam platfom made for students wanting to pass the NCLEX exam. provides multiple question types and multiple test types. Admin and Student interface with all the required feature included.",
        logo: GraceRnLogo,
        url: "https://gracern-frontend-v2.vercel.app/",
      },
      {
        title: "Employee App",
        description:
          "(Frontend only) Made as per client's request and the real name of the application cannot be shared. An advance multi layer corporate office management system in european standard. Where employee can request for vacation, leave etc. and manager and other higher level of admin manages bank/employee/hierarchial requests and broadcast messages throughout the company or team. total 8 hierarchy roles with their own permissions and restricition.",
        logo: EmployeeAppLogo,
        url: "https://github.com/diwasdhungana",
      },
      {
        title: "Birami Files",
        description:
          "(Full) Created a full-stack blockchain application with Hardhat, Solidity, and React that provides an immutable and auditable chain of medical records, allowing medical professionals to securely propose, verify, and track patient medical histories.",
        logo: BiramiFilesLogo,
        url: "https://github.com/diwasdhungana",
      },
    ],
    []
  );

  return (
    <>
      <Helmet>
        <title>Diwas Dhungana - Full-Stack & Web3 Developer</title>
        <meta
          name="description"
          content="Explore Diwas Dhungana's blockchain and web development projects including Grace Rn, Employee App and Birami Files. - showcasing expertise in DeFi, smart contracts, and Web3 technologies."
        />
      </Helmet>
      <Container maxWidth="lg" id="projects">
        <Box
          sx={{
            paddingTop: { xs: 3, md: 6 },
            paddingBottom: { xs: 4, md: 6 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Typography
            variant="h3"
            align="center"
            sx={{
              fontWeight: "bold",
              fontFamily: "Poppins",
              letterSpacing: "5px",
              fontSize: { xs: "2rem", md: "3.5rem" },
              mb: { xs: 1, md: 3 },
            }}
          >
            PROJECTS
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
              fontSize: "14px",
            }}
          >
            EXPLORE NOW
          </Typography>

          <Grid container spacing={4} alignItems="center">
            {projects.map((project, index) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                key={index}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 3,
                  maxWidth: "600px",
                  flexDirection: { xs: "column", sm: "row" },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                {/* Logo on the left */}
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  underline="none"
                  aria-label={`Visit ${project.title} website`}
                  sx={{
                    color: "#fff",
                    fontWeight: "bold",
                    fontSize: "1.1rem",
                    transition: "transform 0.3s ease",
                    display: "block",
                  }}
                >
                  <Box
                    component="img"
                    loading="lazy"
                    src={project.logo}
                    alt={`${project.title} - Web3 Project by Diwas Dhungana`}
                    sx={{
                      width: 150,
                      maxWidth: "100%",
                      minWidth: 150,
                      height: 100,
                      objectFit: "contain",
                      borderRadius: "16px",
                      backgroundColor: "white",
                      p: 2,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      boxShadow:
                        hoveredProject === index
                          ? "0px 6px 25px rgba(255, 255, 255, 0.67)"
                          : "0px 4px 20px rgba(255, 255, 255, 0.57)",
                      transform:
                        hoveredProject === index
                          ? "translateY(-5px)"
                          : "translateY(0)",
                      transition: "transform 0.3s ease, box-shadow 0.3s ease",
                    }}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  />
                </Link>
                {/* Text & Link on the right */}
                <Box>
                  <Link
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    underline="none"
                    sx={{
                      color: "#fff",
                      fontWeight: "bold",
                      fontSize: "1.1rem",
                      transition: "background-position 0.3s ease",
                      background:
                        hoveredProject === index
                          ? "linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%)"
                          : "linear-gradient(131deg, rgba(156,131,255,1) 42%, rgba(224,240,16,0.938813025210084) 70%, rgba(255,144,81,1) 75%) right",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                      backgroundSize: "200% auto",
                      display: "inline-block",
                    }}
                    onMouseEnter={() => setHoveredProject(index)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    {project.title}
                  </Link>
                  <Typography
                    variant="body2"
                    sx={{ opacity: 0.7, color: "#ccc" }}
                  >
                    {project.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Projects;

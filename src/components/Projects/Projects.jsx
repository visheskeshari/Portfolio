import { Button, Typography } from "@mui/material";
import React from "react";
import "./Projects.css";
import { AiOutlineProject } from "react-icons/ai";
import { Delete } from "@mui/icons-material";
import { FaRegSmileWink } from "react-icons/fa";

export const ProjectCard = ({
  url,
  projectImage,
  projectTitle,
  description,
  technologies,
  isAdmin = false,
  id,
}) => {
  return (
    <>
      <a href={url} className="projectCard" target="_blank">
        <div>
          {projectImage && <img src={projectImage} alt="Project" />}
          <Typography variant="h5" fontWeight={900}>
            {projectTitle}
          </Typography>
        </div>
        <div>
          <Typography variant="h4"> About Project</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h6">Tech Stack: {technologies}</Typography>
        </div>
      </a>

      {isAdmin && (
        <Button style={isAdmin ? { color: "rgba(40,40,40,0.7)" } : undefined}>
          <Delete />
        </Button>
      )}
    </>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      url: "https://visheskeshari.github.io/SinglePageWebApplication_usingAngularJS/module5-solution/#/",
      projectImage:
        "https://raw.githubusercontent.com/visheskeshari/SinglePageWebApplication_usingAngularJS/master/Screenshot%20(151).png",
      projectTitle: "Building a static restaurant Website",
      description:
        "A static and responsive website for a Restaurant. HTML, CSS, and JavaScript are implemented.",
      technologies: "HTML, CSS and JavaScript",
    },
    {
      id: 2,
      url: "https://github.com/visheskeshari/ZoomClone",
      projectImage:
        "https://raw.githubusercontent.com/visheskeshari/ZoomClone/main/screenshots/Screenshot%20(134).png",
      projectTitle: "Zoom Clone",
      description:
        "Real-time audio-video-text communication application based on the model of ZOOM. It uses WebRTC and Socket.io that enables low-latency, bidirectional, and event-based communication between a client and a server.",
      technologies: "HTML, CSS, JavaScript, NodeJS",
    },
    {
      id: 3,
      url: "https://github.com/visheskeshari/Wateriot",
      projectImage:
        "https://raw.githubusercontent.com/visheskeshari/Wateriot/main/Flow%20Diagram.png",
      projectTitle: "Watertiot: advance IoT based Smart Water Purifier",
      description:
        "This invention was a smart water purifier that works on Raspberry Pi and Thing Speak Cloud. The main objective of it was to use concepts of the Internet of Things and various sensors in different segments of the purifier to monitor and control their working in real-time.",
      technologies: "Internet of Things, Raspberry Pi and ThingSpeak Cloud",
    },
    {
      id: 4,
      url: "https://github.com/visheskeshari/Portfolio/tree/main",
      projectImage:
        "https://raw.githubusercontent.com/visheskeshari/Portfolio/main/src/images/portfolio.png",
      projectTitle: "React.js based Portfolio",
      description:
        "The Portfolio web app is a responsive & dynamic website that provides an engaging user interface and visually appealing presentations of my projects, skills, contact information, and additional details.",
      technologies:
        "React.js, Node.js, HTML, CSS, Javascript, Express.js, Three.js",
    },
    {
      id: 5,
      url: "https://speechtotextconverter-vk.netlify.app/",
      projectImage:
        "https://raw.githubusercontent.com/visheskeshari/Portfolio/main/src/images/SpechToTextConverter.png",
      projectTitle: "Speech to Text Converter",
      description:
        "An application leverages the 'react-speech-recognition' hook to transcribe microphone speech to text and utilizes the 'react-use-clipboard' hook for seamless text copying to the clipboard.",
      technologies: "React.js, Node.js, HTML, CSS, Javascript, React Hooks",
    },
  ];

  return (
    <div className="projects">
      <Typography variant="h3">
        PROJECTS <AiOutlineProject />
      </Typography>

      <div className="projectsWrapper">
        {projects &&
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              id={project.id}
              url={project.url}
              projectImage={project.projectImage}
              projectTitle={project.projectTitle}
              description={project.description}
              technologies={project.technologies}
            />
          ))}
      </div>

      <Typography variant="h3" style={{ font: "100 1.2rem 'Ubuntu Mono'" }}>
        All The Projects Shown Above Are Made By Me <FaRegSmileWink />
      </Typography>
    </div>
  );
};

export default Projects;

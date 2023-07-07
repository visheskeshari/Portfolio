import React from "react";
import "./About.css";
import { Typography } from "@mui/material";

import photograph from "../../images/photograph.jpg";

const About = () => {
  return (
    <div className="about">
      <div className="aboutContainer">
        <Typography>
          Let's connect and explore new opportunities together!
        </Typography>
      </div>

      <div className="aboutContainer2">
        <div>
          <img
            // src="https://raw.githubusercontent.com/visheskeshari/Full-Stack-Web-Development/main/photograph.jpg"
            src={photograph}
            alt="Vishes"
            className="aboutAvatar"
          />
          <Typography
            variant="h4"
            style={{
              margin: "1vmax 0",
              color: "black",
            }}
          >
            VISHES KESHARI
          </Typography>
          <Typography variant="h6">Web Developer</Typography>
          <Typography
            style={{
              margin: "1vmax 0",
            }}
          >
            (MERN Stack)
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "20px",
              letterSpacing: "3px",
              textAlign: "right",
            }}
          >
            I have completed multiple certifications in various computer science
            fields to stay updated with the latest technologies and trends. I am
            skilled in Java, HTML, CSS, JavaScript, Node.js, React.js, &
            Internet of Things. <br></br>In addition to my technical expertise,
            I'm privileged to have co-ordinated events such as the International
            Conference on Information Systems and Computer Networks (ISCON),
            other vibrant extracurricular activities as a leading part of Dance
            Club and National Service Scheme at my university, showcasing my
            event coordination proficiency.
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;

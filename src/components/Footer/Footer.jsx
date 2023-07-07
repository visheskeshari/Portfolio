import React from "react";
import "./Footer.css";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { AiOutlineGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Being a recent computer science graduate, I am eager to join a company
          that fosters a culture of continuous learning and development. I am
          prepared to utilize my technical skills that will contribute to the
          company's success while also expand my knowledge and expertise. I have
          a good capacity to comprehend and solve problems and I can complete
          tasks effectively and efficiently. I am also looking forward to
          collaborating with experienced professionals and being part of a
          dynamic team that strives for excellence.
        </Typography>

        <Link to="/contact" className="footerContactButton">
          <Typography>Contact Me</Typography>
        </Link>
      </div>

      <div>
        <Typography variant="h6">Connect</Typography>
        <a
          href="https://www.linkedin.com/in/vishes-keshari-7843a516b"
          target="_blank"
        >
          <AiFillLinkedin />
        </a>
        <a href="https://github.com/visheskeshari" target="_blank">
          <AiOutlineGithub />
        </a>
        <a
          href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=vishes15022000@gmail.com"
          target="_blank"
        >
          <AiTwotoneMail />
        </a>
      </div>
    </div>
  );
};

export default Footer;

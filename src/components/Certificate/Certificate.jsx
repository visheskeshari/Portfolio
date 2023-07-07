import { Button, Typography } from "@mui/material";
import React from "react";
import { FaTrash } from "react-icons/fa";
import "./Certificate.css";

const Certificate = ({
  url = "",
  title = "Title Here",
  image,
  isAdmin = false,
  id,
}) => {
  return (
    <div className="certificate">
      <a href={url} target="_blank" rel="noopener noreferrer">
        <img src={image} alt="Video" />
        <Typography>{title}</Typography>
      </a>
      {isAdmin && (
        <Button
          style={{
            margin: "auto",
            display: "block",
            color: "rgba(40,40,40,0.7)",
          }}
        >
          <FaTrash />
        </Button>
      )}
    </div>
  );
};

export default Certificate;

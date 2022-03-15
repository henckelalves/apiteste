import React from "react";
import "./Header.css";
import PersonIcon from "@material-ui/icons/Person";
import IconButton from "@material-ui/core/IconButton";
import ForumIcon from "@material-ui/icons/Forum";

const Header = () => {
  return (
    <div>
      <IconButton>
        <PersonIcon fontSize="large" className="header_icon"></PersonIcon>
      </IconButton>
      <img className="header_logo" src="logo192.png" alt="header" />
      <IconButton>
        <ForumIcon fontSize="large" className="header_icon" />
      </IconButton>
    </div>
  );
};

export default Header;

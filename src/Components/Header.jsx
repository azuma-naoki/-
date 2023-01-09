import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../images/logo3.png";
import {Link} from "react-router-dom";

export default function Header() {
  const outer = {
    display:"flex",
    justifyContent:"center",
    // alignItems:"center"
  }
  return (    
    <div style={outer}>
      <Link to="/">
        <img src={logo} width="380"/>
      </Link>
    </div>   
  );
}

import React from 'react'
import Header from "./Header";
import frontImage from "../images/front.png";
import {Button} from "@mui/material";
import buttonImage from "../images/startButton.png";
import {Link} from "react-router-dom";

const FrontPage = () => {
    const buttonStyle = {
        position:"absolute",        
        top:"20%",
        right:"25%", 
        // minWidth: "",
    }
    return (
        <div>            
            <img className="front" src={frontImage}></img>              
            <div>
                <Link to="/print">
                    <Button  variant={"contained"} size={"large"} sx={buttonStyle}>
                        Get Start
                    </Button>
                </Link>

            </div>            
        </div>
    )
}
export default FrontPage;

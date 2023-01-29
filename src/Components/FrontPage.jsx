import React from 'react'
import frontImage from "../images/front.png";
import {Button,Fade,Collapse} from "@mui/material";
import {Link} from "react-router-dom";

const FrontPage = () => {
    const buttonStyle = {
        position:"absolute",        
        top:"15%",
        right:"25%",      
        padding:"50px",
        background: "radial-gradient(rgba(200,200,255,1), rgba(255,255,255,0.4))",
        borderRadius:"100%",
        color:"rgba(0,0,255,0.6)",
        border:"3px solid rgba(0,0,200,0.2)",
        width:"150px",
        height:"150px",
        textTransform: 'none',
        fontWeight:"bold",
    }
    return (
        <div>            
            <Fade in={true} timeout={{appear:1000,enter:500,exit:1200}}>
                <div>            
                    <img className="front" src={frontImage}></img>              
                    <div>
                        <Link to="/print">
                            <Button  variant={"text"} size={"large"} sx={buttonStyle}>
                                Get Started
                            </Button>
                        </Link>

                    </div>         
                </div>   
            </Fade>
        </div>
    )
}
export default FrontPage;

import React from 'react'
import {Box,Button,Slide,Dialog, DialogActions, DialogTitle,DialogContent} from "@mui/material";
import samplePng from "../../images/line.png";
import RenderGraph from '../RenderGraph';

const Modal = (props) => {
    const [isOpen, setIsOpen] = props.modalState;
    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <>
            <Dialog onClose={closeModal} open={isOpen}>
                <DialogTitle>
                    <p>出力画像</p>
                </DialogTitle>
                <DialogContent >
                    <Slide direction="down" in={isOpen} timeout={{appear:2000,enter:200,exit:400}}>       
                        <Box sx={{width:500,height:500}}>
                            <a download>
                                {/* <img src={samplePng}/> */}
                                <RenderGraph />
                            </a>
                        </Box>                                 
                    </Slide>
                    <Button>Download</Button>                    
                </DialogContent>
            </Dialog>
        </>
    )
}

export default Modal

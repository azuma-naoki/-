import React from 'react'
import {Box,Slide,Dialog, DialogActions, DialogTitle,DialogContent} from "@mui/material";
import samplePng from "../../images/line.png";

const Modal = (props) => {
    const [isOpen, setIsOpen] = props.modalState;
    const closeModal = () => {
        setIsOpen(false);
    }
    return (
        <>
            <Dialog
                onClose={closeModal}
                open={isOpen}>
                <DialogTitle>
                    <span>出力画像</span>
                </DialogTitle>
                <DialogContent >
                    <Slide direction="down" in={isOpen} container={Dialog.current}>                    
                    <img src={samplePng}></img>            
                    </Slide>                    
                </DialogContent>
            </Dialog>

        </>
    )
}

export default Modal

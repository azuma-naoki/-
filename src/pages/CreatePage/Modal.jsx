import {useEffect} from 'react'
import {Box,Button,Slide,Dialog, DialogActions, DialogTitle,DialogContent,Typography} from "@mui/material";
import samplePng from "../../images/line.png";
import RenderGraph from '../RenderGraph';
import Errors from "./Errors";

const Modal = (props) => {
    const [isOpen, setIsOpen] = props.modalState;    
    const closeModal = () => {
        setIsOpen(false);
    }        
    const errors = new Errors(props.graphData);        
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
                                {         
                                    errors.existError() ?                           
                                    errors.getError().map((error) => {
                                        return <>
                                            <Typography variant="p" color="error" key={error} sx={{whiteSpace:"pre-wrap"}}>{error}</Typography>
                                            <p></p>
                                        </>;
                                    }):
                                    <>
                                        <RenderGraph/>
                                    </>
                                }                                
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

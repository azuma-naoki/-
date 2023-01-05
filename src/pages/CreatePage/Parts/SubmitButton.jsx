import {Button,Grow,Zoom, ClickAwayListener} from "@mui/material";

const SubmitButton = (props) => {
    return (
        <Button variant="contained" type="submit">
          {props.label}
        </Button>       
    )
}

export default SubmitButton;

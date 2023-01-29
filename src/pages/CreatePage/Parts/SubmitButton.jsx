import {Button} from "@mui/material";
const SubmitButton = (props) => {
    return (        
      <Button disabled={props.disabled} variant="contained" type="submit">
        {props.label}
      </Button>      
    )
}

export default SubmitButton;

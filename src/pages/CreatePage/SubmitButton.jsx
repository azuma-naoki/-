import {Button} from "@mui/material";

const SubmitButton = (props) => {
    return (
        <>
          <Button variant="contained">
            {props.label}
          </Button>
        </>
    )
}

export default SubmitButton;

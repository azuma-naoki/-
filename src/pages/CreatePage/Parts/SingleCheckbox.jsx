import {Checkbox, FormControlLabel} from "@mui/material";
import {useDispatch} from "react-redux";
import {write} from "../store/modules/graphData";

const SingleCheckbox = (props) => {
    const dispatch = useDispatch();
    const sx = {
        '&:hover': { 
            transform:"scale(1.7)",
            transition:"0.1s ease",
        },
    }
    const onChange = (event) => {
        const action = write({
            index: props.index,
            propertyName:props.val, 
            newValue: event.target.checked,
        });
        dispatch(action);
    }
    return (
        <>
            <FormControlLabel control={<Checkbox sx={{...sx}}onChange={onChange}/>} label={props.label}/>        
        </>
    )
}

export default SingleCheckbox;
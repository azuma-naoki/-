import {Switch, FormControlLabel} from "@mui/material";
import {useDispatch} from "react-redux";
import {write} from "../store/modules/graphData";

const SingleSwitch = (props) => {
    const dispatch = useDispatch();
    const onChange = (event) => {
        const action = write({
            propertyName:props.val, 
            newValue: event.target.checked,
        });
        dispatch(action);
    }
    return (
        <>
            <FormControlLabel control={<Switch onChange={onChange}/>} label={props.label}/>        
        </>
    )
}
export default SingleSwitch;
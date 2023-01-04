import {TextField} from "@mui/material";
import {useDispatch} from "react-redux";
import {write} from "./store/modules/graphData";
const TextBox = (props) => {
    const dispatch = useDispatch();
    const onChange = (event) => {
        const action = write({
            propertyName:props.val, 
            newValue: event.target.value
        });
        dispatch(action);
    }
    return (
        <>
            <TextField id="standard-basic" label={props.label} variant="standard" onChange={onChange}/>
        </>
    )
}

export default TextBox;

import {useDispatch} from "react-redux";
import {addDataset} from "../store/modules/graphData";
import {Button} from "@mui/material";

const AddButton = (props) => {
    const dispatch = useDispatch();
    const onClick = (event) => {
        const action = addDataset({});
        dispatch(action);
    }
    return (    
        <Button variant="contained" onClick={onClick}>{props.label}</Button>
    )
}

export default AddButton;

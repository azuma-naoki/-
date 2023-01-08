import {useDispatch} from "react-redux";
import {addDataset} from "../store/modules/graphData";
import {Button} from "@mui/material";
import {maxIndex,initialStates} from "../const";

const AddButton = (props) => {
    const graphType = props.graphType;
    const dispatch = useDispatch();
    const onClick = (event) => {
        const action = addDataset({
            initialState: initialStates[graphType]            
        });
        dispatch(action);
        props.setIndex(prev => {
            return prev < maxIndex - 1 ? props.datasetsSize: maxIndex - 1;
        });
    }
    return (    
        <Button variant="contained" onClick={onClick}>{props.label}</Button>
    )
}

export default AddButton;

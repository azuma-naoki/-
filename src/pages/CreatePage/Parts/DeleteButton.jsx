import {useDispatch} from "react-redux";
import {deleteDataset} from "../store/modules/graphData";
import {Button} from "@mui/material";

const DeleteButton = (props) => {
    const dispatch = useDispatch();
    const onClick = (event) => {
        const action = deleteDataset({
            index: props.index,
        });
        dispatch(action);
        if(props.index != 0) {
            props.setIndex(prev => prev - 1);
        }
    }
    return (    
        props.datasetsSize <= 1 ?
        <Button variant="contained" disabled onClick={onClick}>
        {props.label}</Button>
        :<Button variant="contained" onClick={onClick}>{props.label}</Button>
    )
}

export default DeleteButton;

import {useDispatch} from "react-redux"
import {write} from "../store/modules/graphData";
import {SketchPicker,CirclePicker,GooglePicker,CompactPicker,TwitterPicker} from "react-color";
import {Typography} from "@mui/material";

const ColorPicker = (props) => {
    const dispatch = useDispatch();
    const onChange = (color) => {        
        const action = write({
            propertyName:props.val, 
            index: props.index,
            newValue: color.hex,
        });
        dispatch(action)    
    }
    return (
        <>        
            <Typography variant="caption" sx={{}}>{props.label}</Typography>                       
            <CirclePicker onChange={onChange} width={250} circleSpacing={10}/>
        </>
    )
}
export default ColorPicker;

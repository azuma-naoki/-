import {useDispatch} from "react-redux"
import {write} from "../store/modules/graphData";
// import 
const ColorPicker = (props) => {
    const dispatch = useDispatch();
    const onChange = (event) => {        
        const action = write({
            propertyName:props.val, 
            index: props.index,
            newValue: event.target.value,
        });
        dispatch(action)    
    }
    return (
        <>
            <label>
                {props.label}
                <input type="color" value={props.value} onChange={onChange}/>
            </label>
        </>
    )
}
export default ColorPicker;

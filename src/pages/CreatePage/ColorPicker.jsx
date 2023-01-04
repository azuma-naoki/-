import {useDispatch} from "react-redux"
import {write} from "./store/modules/graphData";
const ColorPicker = (props) => {
    const dispatch = useDispatch();
    const onChange = (event) => {        
        const action = write({propertyName:props.val, newValue: event.target.value});
        dispatch(action)    
    }
    return (
        <>
            <label>
                {props.label}
                <input type="color" onChange={onChange}/>
            </label>
        </>
    )
}
export default ColorPicker;

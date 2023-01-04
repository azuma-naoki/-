import {Button, Typography} from "@mui/material";
import {useDispatch} from "react-redux";
import {write} from "../store/modules/graphData";
const FileInput = (props) => {
    const dispatch = useDispatch();
    const onChange = (event) => {
        const file = event.target.files;
        const fileReader = new FileReader();
        fileReader.readAsText(file[0]);
        fileReader.onload = (event) => {
            let result = fileReader.result.split(/\r\n|\n/);
            result = result.filter(item => item !== "");
            const action = write({
                propertyName:props.val, 
                newValue: result
            });
            dispatch(action);
        }
    }
    return (
        <>
            <Typography variant="caption" component="span" mt={1} gutterBottom>{props.label}</Typography>
            <Button variant="outlined" component="label">ファイルを選択
                <input type="file" hidden onChange={onChange} accept=".txt"/>
            </Button>
        </>
    )
}

export default FileInput;

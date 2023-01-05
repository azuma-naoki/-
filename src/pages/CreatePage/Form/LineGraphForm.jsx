import FileInput from "../Parts/FileInput";
import ColorPicker from "../Parts/ColorPicker";
import TextBox from "../Parts/TextBox";
import SubmitButton from "../Parts/SubmitButton";
import {Grid} from "@mui/material";
const LineGraphForm = () => {
    return (        
        <>
            <Grid container spacing={3}>
                <Grid item xs={12}>                        
                    <FileInput label="x軸:" val={"xs"}/><p></p>
                </Grid>
                <Grid item xs={12}>
                    <FileInput label="y軸:" val={"ys"}/><p></p>
                </Grid>
                <Grid item xs={12} >
                    <TextBox label="凡例:" val={"legend"}/>
                </Grid>
                <Grid item xs={12}>
                    <ColorPicker label="色を選択 " val={"color"}/>
                </Grid>                
            </Grid>    
        </>
    )
}

export default LineGraphForm;

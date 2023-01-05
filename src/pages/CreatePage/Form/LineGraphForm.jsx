import FileInput from "../Parts/FileInput";
import ColorPicker from "../Parts/ColorPicker";
import TextBox from "../Parts/TextBox";
import SingleCheckbox from "../Parts/SingleCheckbox";
import SingleSwitch from "../Parts/SingleSwitch";
import SingleSelect from "../Parts/SingleSelect";
import {Grid} from "@mui/material";

const LineGraphForm = () => {
    return (        
        <>
            <Grid container spacing={2}>
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
                <Grid item xs={12}>
                    <SingleCheckbox label="Gridを表示" val={"grid"}/>
                </Grid>         
                <Grid item xs={12}>
                    <SingleSelect label="linestyle" val={"linestyle"} options={{values:["solid","dashed","dotted"],displays:["solid","dashed","dotted"]}}/>
                </Grid>     
                <Grid item xs={12}/>       
            </Grid>    
        </>
    )
}

export default LineGraphForm;

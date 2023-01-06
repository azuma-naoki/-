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
                <h1>グラフ１</h1>
                <Grid item xs={12}>                        
                    <FileInput label="xdata:" val={"xdata"} index={-1}/><p></p>
                </Grid>
                <Grid item xs={12}>
                    <FileInput label="ydata:" val={"ydata"} index={0}/><p></p>
                </Grid>
                <Grid item xs={12} >
                    <TextBox label="凡例:" val={"legend"} index={0}/>
                </Grid>
                <Grid item xs={12}>
                    <ColorPicker label="色を選択 " val={"color"} index={0}/>
                </Grid>   
                <Grid item xs={12}>
                    <SingleSelect label="linestyle" val={"linestyle"} index={0} options={{values:["solid","dashed","dotted"],displays:["solid","dashed","dotted"]}}/>
                </Grid>     
                <Grid item xs={12} >
                    <TextBox label="タイトル:" val={"title"} index={-1}/>
                </Grid>
                <Grid item xs={12}>
                    <SingleCheckbox label="Gridを表示" val={"grid"} index={-1}/>
                </Grid>         
                <Grid item xs={12}/>       
            </Grid>    
        </>
    )
}

export default LineGraphForm;

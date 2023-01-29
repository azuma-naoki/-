import FileInput from "../Parts/FileInput";
import ColorPicker from "../Parts/ColorPicker";
import TextBox from "../Parts/TextBox";
import SingleCheckbox from "../Parts/SingleCheckbox";
import {Grid, Typography} from "@mui/material";

const BarGraphForm = (props) => {
    const index = props.index;
    const graphData = props.graphData;
    const datasets = graphData.datasets;
    return (        
        <>               
            <Grid container spacing={4}>   
                <Grid item xs={12} >                        
                    <FileInput label="xdata:" val={"xdata"} index={-1} empty={!graphData.xdata.length}/><p></p>
                </Grid>
                <Grid item xs={12}>
                    <FileInput label="ydata:" val={"ydata"} index={index} empty={!datasets[index].ydata.length}/><p></p>
                </Grid>
                <Grid item xs={12}>                    
                    <ColorPicker label="棒の色 " val={"color"} value={datasets[index].color} index={index}/>
                </Grid>   
                <Grid item xs={12} >
                    <TextBox label="タイトル" val={"title"} index={-1}/>
                </Grid>
                <Grid item xs={12} >
                    <TextBox label="凡例:" val={"legend"} value={datasets[index].legend} index={index}/>
                </Grid>
                <Grid item xs={6} >
                    <TextBox label="xLabel" val={"xLabel"} index={-1}/>
                </Grid>
                <Grid item xs={6} >
                    <TextBox label="yLabel" val={"yLabel"} index={-1}/>
                </Grid>
                <Grid item xs={12}>
                    <SingleCheckbox label="横向きにする" val={"barh"} index={-1}/>
                </Grid>   
                <Grid item xs={12}>
                    <SingleCheckbox label="積み上げる" val={"stacked"} index={-1}/>
                </Grid>    
                <Grid item xs={12}>
                    <SingleCheckbox label="Gridを表示" val={"grid"} index={-1}/>
                </Grid>         
                <Grid item xs={12}/>       
            </Grid>                
        </>
            
    )
}


export default BarGraphForm;

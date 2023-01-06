import FileInput from "../Parts/FileInput";
import ColorPicker from "../Parts/ColorPicker";
import TextBox from "../Parts/TextBox";
import SingleCheckbox from "../Parts/SingleCheckbox";
import SingleSwitch from "../Parts/SingleSwitch";
import SingleSelect from "../Parts/SingleSelect";
import GraphSwitch from "../Parts/GraphSwitch";
import {Grid, Typography} from "@mui/material";
import {useState} from "react";
import {useSelector} from "react-redux";
import {graphNum} from "../const";

const LineGraphForm = () => {
    const [index, setIndex] = useState(0);
    const graphData = useSelector(state => state.graphData);
    return (        
        <>            
            <Grid container spacing={3}>
                <Typography variant="p">グラフ{index+1}</Typography>    
                <Grid item xs={12}>
                    <GraphSwitch states={[index,setIndex]} label="グラフ" options={{values:arange(0,graphNum,1),displays:arange(1,graphNum + 1,1)}}/>
                </Grid>     
                <Grid item xs={12}>                        
                    <FileInput label="xdata:" val={"xdata"} index={-1}/><p></p>
                </Grid>
                <Grid item xs={12}>
                    <FileInput label="ydata:" val={"ydata"} index={index}/><p></p>
                </Grid>
                <Grid item xs={12} >
                    <TextBox label="凡例:" val={"legend"} value={graphData.datasets[index].legend} index={index}/>
                </Grid>
                <Grid item xs={12}>
                    <ColorPicker label="色を選択 " val={"color"} value={graphData.datasets[index].color} index={index}/>
                </Grid>   
                <Grid item xs={12}>
                    <SingleSelect label="線のスタイル" val={"linestyle"} value={graphData.datasets[index].linestyle} index={index} options={{values:["solid","dashed","dotted","dashdot"],displays:["solid","dashed","dotted","dashdot"]}}/>
                </Grid>     
                <Grid item xs={12} >
                    <TextBox label="タイトル" val={"title"} index={-1}/>
                </Grid>
                <Grid item xs={12} >
                    <TextBox label="xLabel" val={"xLabel"} index={-1}/>
                </Grid>
                <Grid item xs={12} >
                    <TextBox label="yLabel" val={"yLabel"} index={-1}/>
                </Grid>
                <Grid item xs={12}>
                    <SingleCheckbox label="Gridを表示" val={"grid"} index={-1}/>
                </Grid>         
                <Grid item xs={12}/>       
            </Grid>    
        </>
    )
}

function arange(start, stop, step) {
    const result = []
    for(let i = start; i < stop; i += step) {
        result.push(i);
    }
    return result;
}

export default LineGraphForm;

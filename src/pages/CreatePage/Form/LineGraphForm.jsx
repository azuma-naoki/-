import FileInput from "../Parts/FileInput";
import ColorPicker from "../Parts/ColorPicker";
import TextBox from "../Parts/TextBox";
import SingleCheckbox from "../Parts/SingleCheckbox";
import SingleSelect from "../Parts/SingleSelect";
import GraphSwitch from "../Parts/GraphSwitch";
import DeleteButton from "../Parts/DeleteButton";
import {Grid, Typography} from "@mui/material";
import {useState} from "react";
import {useSelector} from "react-redux";
import AddButton from "../Parts/AddButton";

const LineGraphForm = () => {
    const [index, setIndex] = useState(0);
    const datasets = useSelector(state => state.graphData.datasets);
    return (        
        <>   
            <Grid container spacing={4}>
                {/* <Typography variant="p">グラフ{index+1}</Typography>     */}
                <Grid item xs={12}>
                    <GraphSwitch states={[index,setIndex]} label="グラフ" options={{values:arange(0,datasets.length,1),displays:arange(1,datasets.length + 1,1)}}/>
                </Grid>     
                <Grid item xs={6}>
                    <DeleteButton label="グラフを削除" index={index} setIndex={setIndex}/>                    
                </Grid>
                <Grid item xs={6}>
                    <AddButton label="グラフを追加" index={index} setIndex={setIndex} datasetsSize={datasets.length}/>
                </Grid>
                <Grid item xs={12}>                        
                    <FileInput label="xdata:" val={"xdata"} index={-1}/><p></p>
                </Grid>
                <Grid item xs={12}>
                    <FileInput label="ydata:" val={"ydata"} index={index}/><p></p>
                </Grid>
                <Grid item xs={12} >
                    <TextBox label="凡例:" val={"legend"} value={datasets[index].legend} index={index}/>
                </Grid>
                <Grid item xs={12}>                    
                    <ColorPicker label="線の色 " val={"color"} value={datasets[index].color} index={index}/>
                </Grid>   
                <Grid item xs={12}>
                    <SingleSelect label="線のスタイル" val={"linestyle"} value={datasets[index].linestyle} index={index} options={{values:["solid","dashed","dotted","dashdot"],displays:["solid","dashed","dotted","dashdot"]}}/>
                </Grid>     
                <Grid item xs={6}>
                    <SingleSelect label="マーカーのスタイル" val={"pointStyle"} value={datasets[index].pointStyle} index={index} options={{values:["circle","cross","crossRot","rect","star"],displays:["circle","cross","crossRot","rect","star"]}}/>
                </Grid>   
                <Grid item xs={6}>
                    <SingleSelect label="マーカーの大きさ" val={"pointRadius"} value={datasets[index].pointRadius} index={index} options={{values:[0.1,4,8,12],displays:["なし","小","中","大"]}}/>
                </Grid>   
                <Grid item xs={12} >
                    <TextBox label="タイトル" val={"title"} index={-1}/>
                </Grid>
                <Grid item xs={6} >
                    <TextBox label="xLabel" val={"xLabel"} index={-1}/>
                </Grid>
                <Grid item xs={6} >
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

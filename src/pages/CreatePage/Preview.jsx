import { Chart as Chartjs, registerables } from "chart.js";
import { useSelector } from "react-redux";
import { Chart,Line } from "react-chartjs-2";
import {Typography,Box,Zoom,Slide} from "@mui/material";

Chartjs.register(...registerables);

// const lineStyle = {
//     solid:[1,0],
//     dash:[8,2],
//     dotted:[1,1],
// }

const lineStyle = (graphData) => {
    switch(graphData.linestyle) {
        case "solid":
            return [1,0];
        case "dashed":
            return [8,2];
        case "dotted":
            return [1,5];    
        default:
            return [1,0];
    }
}

const Preview = (props) => {
    const state = useSelector(state => state);
    const graphData = state.graphData
    const graph = {
        labels:graphData.xs,
        datasets: [
            {
                type:"line",
                label:graphData.legend,
                data:graphData.ys,
                borderColor:graphData.color,
                borderDash:lineStyle(graphData),
            }
        ]
    };

    const options = {
        maintainAspectRatio:false,
        responsive:true,
        scales:{
            x:{
                grid:{
                    display:graphData.grid
                }
            },
            y:{
                grid:{
                    display:graphData.grid
                }
            }
        }
    };

    return (
        <>
            <Typography variant="p">preview</Typography>             
            <div>
                <Chart
                    width={props.width}
                    height={props.height}
                    data={graph}
                    options={options}
                    id="chart-key"                
                /> 
            </div>
            <p>{JSON.stringify(graphData)}</p>
        </>
    );
}

export default Preview;
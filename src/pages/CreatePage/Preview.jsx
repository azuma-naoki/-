import { Chart as Chartjs, registerables } from "chart.js";
import { useSelector } from "react-redux";
import { Chart,Line } from "react-chartjs-2";
import {Typography,Box,Zoom,Slide} from "@mui/material";

Chartjs.register(...registerables);

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
        labels:graphData.xdata, //xdata
        datasets: [
            {
                type:"line",  // グラフのタイプ
                data:graphData.ydata, // ydata
                label:graphData.legend ? graphData.legend : "", //凡例
                borderColor:graphData.color, //線の色
                borderDash:lineStyle(graphData), //線の種類
            },
        ]
    };

    const options = {
        maintainAspectRatio:false,
        responsive:true,
        plugins: { 
            title: {
                display: true,
                text: graphData.title,
                font: {
                    size: 15
                }
            },
        }, 
        scales: {
            x: {
                grid:{
                    display:graphData.grid
                }
            },
            y: {
                grid:{
                    display:graphData.grid
                }
            },
        },
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
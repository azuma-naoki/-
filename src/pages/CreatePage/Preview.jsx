import { Chart as Chartjs, registerables } from "chart.js";
import { useSelector } from "react-redux";
import { Chart,Line } from "react-chartjs-2";
import {Typography,Box,Zoom,Slide} from "@mui/material";

Chartjs.register(...registerables);

const lineStyle = (linestyle) => {
    switch(linestyle) {
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

const convert = (dataset) => {
    const result = {
        type:"line",
        data:dataset.ydata,
        label:dataset.legend,
        borderColor:dataset.color,
        borderDash:lineStyle(dataset.linestyle)
    };
    return result;
}

const Preview = (props) => {
    const state = useSelector(state => state);
    const graphData = state.graphData
    console.log(graphData.datasets);


    const graph = {
        labels:graphData.xdata, //xdata
        // datasets: graphData.datasets,
        datasets: [
            convert(graphData.datasets[0])
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
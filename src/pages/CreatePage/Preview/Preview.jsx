import { Chart as Chartjs, registerables } from "chart.js";
import { useSelector } from "react-redux";
import { Chart} from "react-chartjs-2";
import {Typography,Box} from "@mui/material";

Chartjs.register(...registerables);

const convertLineStyle = (linestyle) => {
    switch(linestyle) {
        case "solid":
            return [1,0];
        case "dashed":
            return [8,2];
        case "dotted":
            return [1,5];    
        case "dashdot":
            return [15, 3, 3, 3]
        default:
            return [1,0];
    }
}

// charts.js形式に変換
const convertLineDataset = (dataset) => {
    const pushProperty = (obj, property, value) => {
        if(!value) return;
        obj[property] = value;        
    }
    const chartjsDataset = {          
        // type: "bar",
        // data: dataset.ydata ? dataset.ydata: [],
        // label: dataset.legend,
        // borderColor: dataset.color,
        // borderDash: convertLineStyle(dataset.linestyle),
    };
    pushProperty(chartjsDataset,"type", "line");
    pushProperty(chartjsDataset,"data",  dataset.ydata);
    pushProperty(chartjsDataset,"label", dataset.legend);
    pushProperty(chartjsDataset,"borderColor", dataset.color);
    pushProperty(chartjsDataset,"borderDash", convertLineStyle(dataset.linestyle));
    pushProperty(chartjsDataset,"pointStyle", dataset.pointStyle);
    pushProperty(chartjsDataset,"pointRadius", dataset.pointRadius);
    return chartjsDataset;
}

const Preview = (props) => {
    const graphData = useSelector(state => state.graphData);
    const graph = {
        labels:graphData.xdata, //xdata
        datasets: graphData.datasets.map((dataset) => {
            return convertLineDataset(dataset)
        })
    };
    const lineOptions = {
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
                title:{
                    display: true,
                    text: graphData.xLabel,
                },
                grid:{
                    display:graphData.grid
                }
            },
            y: {
                title:{
                    display: true,
                    text: graphData.yLabel,
                },
                grid:{
                    display:graphData.grid
                }
            },
        },
    };
    
    return (
        <Box sx={{backgroundColor:"#ffeeff",height:"100%",position:"relative",width:"100%"}}>
            <Box sx={{backgroundColor:"#fffbff",position:"sticky",top:"40px",padding:"15px" ,border:"0px solid pink"}}>
                <Typography variant="p" sx={{color:"#ff66ee"}}>preview</Typography>             
                <div>
                    <Chart
                        width={props.width}
                        height={props.height}
                        data={graph}
                        options={lineOptions}
                        id="chart-key"                
                    /> 
                </div>
                <p>{JSON.stringify(graphData, null, 2)}</p>
            </Box>            
        </Box>
    );
}

export default Preview;
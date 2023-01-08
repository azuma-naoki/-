import { Chart as Chartjs, registerables } from "chart.js";
import { useSelector } from "react-redux";
import { Chart} from "react-chartjs-2";
import {Typography,Box} from "@mui/material";
import backgroundImage from "../../../images/background.png";
import {scales} from "./scales";
import {converter} from "./converter";

Chartjs.register(...registerables);

const Preview = (props) => {
    const graphType = props.graphType;
    const graphData = useSelector(state => state.graphData);
    const graph = {
        labels:graphData.xdata, //xdata
        datasets: graphData.datasets.map((dataset) => {
            // return switchGraphConverter(graphType,dataset);
            return converter(dataset,graphType);
        })
    };
    const chartOptions = {
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
    }
    console.log(graphType)
    console.log(scales(graphData)[graphType]);
    return (        
        <Box className="display" sx={{height:"100%",position:"relative",width:"100%"}}>
            <Box sx={{backgroundColor:"#ffffff",position:"sticky",top:"40px",margin:0,padding:"20px" ,borderRight:"1px dashed black", borderBottom:"3px solid #eeeeee", borderTop:"3px solid #eeeeee"}}>
                <Typography variant="h7" sx={{background:"#eeffff", color:"#e91e63"}}>preview</Typography>             
                <div>
                    <Chart
                        width={props.width}
                        height={props.height}
                        data={graph}
                        options={{                       
                            scales:scales(graphData)[graphType],
                            ...chartOptions,
                        }}
                        id="chart-key"                
                    /> 
                </div>
                <p>{JSON.stringify(graphData, null, 2)}</p>
            </Box>            
        </Box>
    );
}

export default Preview;
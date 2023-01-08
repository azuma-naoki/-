import { Chart as Chartjs, registerables } from "chart.js";
import { useSelector } from "react-redux";
import { Chart, Pie, Doughnut, PolarArea} from "react-chartjs-2";
import {Typography,Box} from "@mui/material";
import {converter} from "./converter";
import {options} from "./options";

Chartjs.register(...registerables);

const Preview = (props) => {
    const graphType = props.graphType;
    const graphData = useSelector(state => state.graphData);
    const decideLabels = () => {
        switch(graphType) {
            case "line":
            case "bar":
                return graphData.xdata;
            case "pie": 
            case "doughnut":
            case "polarArea":
            case "radar":
                return graphData.labels;
            case "scatter":
            case "bubble":
                    return;
                console.log("検討してください");
        }
    }
    
    const graph = {        
        labels: decideLabels(),
        datasets: graphData.datasets.map((dataset) => {
            return converter(graphData,dataset,graphType);
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
        }         
    }
    return (        
        <Box className="display" sx={{height:"100%",position:"relative",width:"100%"}}>
            <Box sx={{backgroundColor:"#ffffff",position:"sticky",top:"40px",margin:0,padding:"20px" ,borderRight:"1px dashed black", borderBottom:"3px solid #eeeeee", borderTop:"3px solid #eeeeee"}}>
                <Typography variant="h7" sx={{background:"#eeffff", color:"#e91e63"}}>preview</Typography>             
                <div>
                    {GraphDisplayer()}
                </div>
                <p>{JSON.stringify(graphData, null, 2)}</p>
            </Box>            
        </Box>
    );
    

    function GraphDisplayer() {
        console.log(graphType);
        switch(graphType) {
            case "pie": 
            return(
                <Pie
                    width={props.width}
                    height={props.height}
                    data={graph}
                    options={{                                           
                        ...options(graphData)[graphType],
                        ...chartOptions,
                    }}
                    id="chart-key"                
                />        )
            case "doughnut": return( 
                <Doughnut
                    width={props.width}
                    height={props.height}
                    data={graph}
                    options={{                                           
                        ...options(graphData)[graphType],
                        ...chartOptions,
                    }}
                    id="chart-key"                
                />)        
            case "polarArea": return(
                <PolarArea
                    width={props.width}
                    height={props.height}
                    data={graph}
                    options={{                                           
                        ...options(graphData)[graphType],
                        ...chartOptions,
                    }}
                    id="chart-key"                
                />
            )
            default: return( 
                <Chart
                    width={props.width}
                    height={props.height}
                    data={graph}
                    options={{                                           
                        ...options(graphData)[graphType],
                        ...chartOptions,
                    }}
                    id="chart-key"                
                /> )
            }
        }
}
export default Preview;
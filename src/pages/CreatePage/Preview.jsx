import { Chart as Chartjs, registerables } from "chart.js";
import { useSelector } from "react-redux";
import { Chart,Line } from "react-chartjs-2";
import {Typography,Box} from "@mui/material";

Chartjs.register(...registerables);

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
            }
        ]
    };

    const options = {
        maintainAspectRatio:false,
        responsive:true,
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
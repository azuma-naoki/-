import { Chart as Chartjs, registerables } from "chart.js";
import { useSelector } from "react-redux";
import { Chart,Line } from "react-chartjs-2";
import {Typography,Box} from "@mui/material";

Chartjs.register(...registerables);

const Preview = () => {
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
        responsive:false,
    };

    return (
        <Box style={{maxWidth:"100%"}}>
            <Typography variant="p">preview</Typography>
            <Chart
                width={800}
                height={400}
                data={graph}
                options={options}
                id="chart-key"                
            /> 
            <p>{JSON.stringify(graphData)}</p>
        </Box>
    );
}

export default Preview;
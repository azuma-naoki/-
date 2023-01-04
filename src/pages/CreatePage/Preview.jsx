import { Chart as Chartjs, registerables } from "chart.js";
import { useSelector } from "react-redux";
import { Chart,Line } from "react-chartjs-2";

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
    };

    return (
        <div>
            <h1>Preview</h1>
            <div style = {{width:"50%",height:"50%"}}>
                <Chart
                    height={300}
                    width={300}
                    data={graph}
                    options={options}
                    id="chart-key"
                /> 
            </div>
            <p>{JSON.stringify(graphData)}</p>
        </div>
    );
}

export default Preview;
export const scales = (graphData) => {
    return {
        line: {
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
        bar: {
            x: {
                title:{
                    display: true,
                    text: graphData.xLabel,
                },
                grid:{
                    display:graphData.grid
                },
                stacked: graphData.stacked  // 積み上げの指定
            },
            y: {
                title:{
                    display: true,
                    text: graphData.yLabel,
                },
                grid:{
                    display:graphData.grid
                },
                stacked: graphData.stacked  // 積み上げの指定
            },
        },
        scatter: {
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
        bubble: {
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
    }
}
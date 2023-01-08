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
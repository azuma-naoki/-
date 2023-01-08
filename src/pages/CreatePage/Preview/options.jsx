import {scales} from "./scales";

export const options = (graphData) => {
    return {
        line:{
            scales:scales(graphData)["line"],
        },
        bar:{
            scales:scales(graphData)["bar"],
            indexAxis:graphData.barh ? "y" : "x" ,   
            plugins: {
                stacked100: { enable: true },
            },         
        },
        scatter:{
            scales:scales(graphData)["scatter"],
        },
        bubble: {
            scales:scales(graphData)["bubble"],
        }
    }
}
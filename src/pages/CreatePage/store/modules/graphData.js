import { createSlice } from "@reduxjs/toolkit"
import {produce} from "immer";
import {graphNum} from "../../const";

const initialStates = {
    line: {
        linestyle:"solid", 
        color:"#0084ff",    
        ydata:[1,2,3,4,5],
        legend:"",
    },
}

const graphData = createSlice({
    name: "graphData",            
    initialState: {
        grid:false,    
        xdata:[1,2,3,4,5],
        datasets:createArray(graphNum, initialStates.line),    
    },    
    reducers: {
        write(state,{payload}) {
            const newState = produce(state, draft => { 
                if(payload.index === -1) {
                    draft[payload.propertyName] = payload.newValue;
                } else {
                    draft.datasets[payload.index][payload.propertyName] = payload.newValue;
                }
            });
            return newState;
        },
    }
})

function createArray(num,init) {
    const result = [];
    for(let i = 0;i < num; i++) {
        result.push(init);
    }
    return result;
}

const {write} = graphData.actions;

export {write}
export default graphData.reducer
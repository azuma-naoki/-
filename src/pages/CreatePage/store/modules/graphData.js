import { createSlice } from "@reduxjs/toolkit"
import {produce} from "immer";
import {maxIndex} from "../../const";

const initialStates = {
    line: {
        linestyle:"solid", 
        color:"#0084ff",    
        legend:"",
    },
}

const graphData = createSlice({
    name: "graphData",            
    initialState: {
        grid:false,    
        datasets:createArray(1, initialStates.line),    
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
        deleteDataset(state, {payload}) {
            if(state.datasets.length <= 1) {
                return;
            }
            const newState = produce(state, draft => {                             
                draft.datasets.splice(payload.index,1);
            });
            return newState;
        },
        addDataset(state, {payload}) {
            if(state.datasets.length >= maxIndex) {
                return;
            }
            const newState = produce(state, draft => {                             
                draft.datasets.push(initialStates.line);                
            });
            return newState;
        }
    }
})

function createArray(num,init) {
    const result = [];
    for(let i = 0;i < num; i++) {
        result.push(init);
    }
    return result;
}

const {write,deleteDataset,addDataset} = graphData.actions;

export {write,deleteDataset,addDataset}
export default graphData.reducer
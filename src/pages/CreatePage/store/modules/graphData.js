import { createSlice } from "@reduxjs/toolkit"
import {produce} from "immer";
import {maxIndex,initialStates} from "../../const";

const graphData = createSlice({
    name: "graphData",            
    initialState: {
        ...initialStates.common,  
        datasets:[{
            type:"line",
            ...initialStates.line,
        }]
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
                draft.datasets.push(payload.initialState);                
            });
            return newState;
        },
        resetState(state, {payload}) {
            const newState = {
                ...initialStates.common,  
                datasets:[payload.initialState]
            };            
            return newState;
        }
    }
})

const {write,deleteDataset,addDataset,resetState} = graphData.actions;

export {write,deleteDataset,addDataset,resetState}
export default graphData.reducer
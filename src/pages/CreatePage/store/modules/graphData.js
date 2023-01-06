import { createSlice } from "@reduxjs/toolkit"
import {produce} from "immer";
const graphData = createSlice({
    name: "graphData",
    initialState: {
        grid:false,
        datasets:[
            {linestyle:"solid", color:"#0084ff"},
            {linestyle:"solid", color:"#0084ff"},
            {linestyle:"solid", color:"#0084ff"},
            {linestyle:"solid", color:"#0084ff"},
            {linestyle:"solid", color:"#0084ff"},
        ]
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
        addData(state,{type,payload}) {
            
        }
    }
})

const {write} = graphData.actions;

export {write}
export default graphData.reducer
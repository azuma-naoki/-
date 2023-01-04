import { createSlice } from "@reduxjs/toolkit"

const graphData = createSlice({
    name: "graphData",
    initialState: {},
    reducers: {
        write(state,{type,payload}) {
            const newObj = {...state};
            newObj[payload.propertyName] = payload.newValue;
            return newObj;
        }
    }
})

const {write} = graphData.actions;

export {write}
export default graphData.reducer
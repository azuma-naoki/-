import { configureStore } from "@reduxjs/toolkit";
import reducer from "./modules/graphData";

export default configureStore({
    reducer: {
        graphData: reducer
    }
});
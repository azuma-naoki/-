import GraphForm from "./Form/GraphForm";
import Preview from "./Preview";
import { Provider } from "react-redux";
import store from "./store";
import {Container,Box,Grid} from "@mui/material";
const CreatePage = () => {
    return (
        <Provider store ={store} >
            <Grid container style={{height:1000, margin:50}}>
                <Grid container item xs={8}>
                    <Preview/>
                </Grid>
                <Grid container item xs={4} style={{height:1000}}>
                    <GraphForm/>
                </Grid>
            </Grid>
        </Provider>
    )
}
export default CreatePage;

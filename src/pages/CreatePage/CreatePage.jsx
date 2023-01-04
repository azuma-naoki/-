import GraphForm from "./Form/GraphForm";
import Preview from "./Preview";
import { Provider } from "react-redux";
import store from "./store";
import {Container,Box,Grid} from "@mui/material";
const CreatePage = () => {
    return (
        <Provider store ={store} >
            <Grid container spacing={2}>
                <Grid item xs={8}>
                    <Preview/>
                </Grid>
                <Grid item xs={4}>
                    <GraphForm/>
                </Grid>
            </Grid>
        </Provider>
    )
}
export default CreatePage;
import GraphForm from "./Form/GraphForm";
import Preview from "./Preview";
import { Provider } from "react-redux";
import store from "./store";
import {Container,Box,Grid,Typography} from "@mui/material";
import { useSelector } from "react-redux";
const CreatePage = () => {
    return (
        <Provider store = {store} >
            <Grid container spacing={2} style={{paddingTop:40}}>
                <Grid item xs={1}/>
                <Grid item xs={8} style={{backgroundColor:"none"}}>                    
                    <Preview height={400}/>
                </Grid>
                <Grid item xs={2} style={{paddingTop:40, backgroundColor:"none"}}>
                    <GraphForm/>
                </Grid>
                <Grid item xs={1}/>
            </Grid>
        </Provider>
    )
}
export default CreatePage;
import GraphForm from "./Form/GraphForm";
import Preview from "./Preview/Preview";
import { Provider } from "react-redux";
import store from "./store";
import {Container,Box,Grid,Typography,Fade} from "@mui/material";
import {useState} from "react";
const CreatePage = () => {
    const [graphType, setGraphType] = useState("line");
    return (
        <Provider store = {store}>   
            <Fade in={true} timeout={{appear:1000,enter:1500,exit:1000}}>
            <Grid container spacing={0} sx={{backgroundColor:"#FFFFFF",border:"5px solid #bbbbbb",width:"90%",margin:"30px auto 260px auto",borderRadius:20,boxShadow: "5px 8px 0px 5px #00d6e0"}}>
                <Grid container spacing={0} sx={{backgroundColor:"white",border:"5px solid #dddddd",margin:"40px 100px 320px 100px"}}> {/* 画面 */}
                    <Grid item xs={8} sx={{backgroundColor:"none"}}>                    
                        <Preview height={400} graphType={graphType}/>
                    </Grid>
                    <Grid item xs={4} sx={{padding:"40px",backgroundColor:"none"}}>
                        <GraphForm graphTypeState={[graphType, setGraphType]}/>
                    </Grid>                
                </Grid>
            </Grid>
            </Fade> 
        </Provider>
    )
}
export default CreatePage;

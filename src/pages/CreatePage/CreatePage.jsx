import GraphForm from "./Form/GraphForm";
import Preview from "./Preview/Preview";
import { Provider } from "react-redux";
import store from "./store";
import {Container,Box,Grid,Typography,Slide} from "@mui/material";
import SubmitButton from "./Parts/SubmitButton";
import Modal from "./Modal";
const CreatePage = () => {
    return (
        <Provider store = {store}>    
            <Grid container spacing={0} sx={{backgroundColor:"#FFFFFF",border:"5px ridge #BBBBBB",width:"90%",margin:"30px auto 60px auto",borderRadius:20,boxShadow: "5px 8px 0px 5px rgba(0,0,0,0.6)"}}>
                <Grid container spacing={0} sx={{backgroundColor:"white",border:"5px solid #AAAAAA",margin:"40px 100px 320px 100px"}}> {/* 画面 */}
                    <Grid item xs={8} sx={{padding:"40px",backgroundColor:"none"}}>                    
                        <Preview height={400}/>
                    </Grid>
                    <Grid item xs={4} sx={{padding:"40px",backgroundColor:"none"}}>
                        <GraphForm/>
                    </Grid>                
                </Grid>
            </Grid>
        </Provider>
    )
}
export default CreatePage;

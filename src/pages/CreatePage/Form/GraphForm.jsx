import LineGraphForm from "./LineGraphForm";
import {useState} from "react";
import SubmitButton from "../Parts/SubmitButton";
import Modal from "../Modal";
import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import GraphSwitch from "../Parts/GraphSwitch";
import DeleteButton from "../Parts/DeleteButton";
import AddButton from "../Parts/AddButton";

const GraphForm = () => {
    const [index, setIndex] = useState(0);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const datasets = useSelector(state => state.graphData.datasets);
    const pushSubmitButton = (event) => {
        event.preventDefault();
        // 将来的にここを変える;修正
        setIsOpenModal(prev => !prev);
    }    
    
    return (        
        <>        
            <Modal modalState={[isOpenModal,setIsOpenModal]}/>

            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <GraphSwitch states={[index,setIndex]} label="グラフ" options={{values:arange(0,datasets.length,1),displays:arange(1,datasets.length + 1,1)}}/>
                </Grid>     
                <Grid item xs={6}>
                    <DeleteButton label="グラフを削除" index={index} setIndex={setIndex}/>                    
                </Grid>
                <Grid item xs={6}>
                    <AddButton label="グラフを追加" index={index} setIndex={setIndex} datasetsSize={datasets.length}/>
                </Grid>
                <Grid item xs={12}/>
            </Grid>

            <LineGraphForm index={index} datasets={datasets}/>     
                     
            <form onSubmit={pushSubmitButton}>
                <SubmitButton label="グラフを作成" sx={{padding:"90px"}}/>      
            </form>
        </>
    )
}

function arange(start, stop, step) {
    const result = []
    for(let i = start; i < stop; i += step) {
        result.push(i);
    }
    return result;
}

export default GraphForm;

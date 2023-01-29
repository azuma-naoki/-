import LineGraphForm from "./LineGraphForm";
import BarGraphForm from "./BarGraphForm";
import {useState,useEffect} from "react";
import SubmitButton from "../Parts/SubmitButton";
import Modal from "../Modal";
import {Grid} from "@mui/material";
import {useSelector} from "react-redux";
import GraphSwitch from "../Parts/GraphSwitch";
import DeleteButton from "../Parts/DeleteButton";
import SingleSelect from "../Parts/SingleSelect";
import AddButton from "../Parts/AddButton";
import GraphTypeSelector from "../Parts/GraphTypeSelector";
import ScatterGraphForm from "../Form/ScatterGraphForm";
import BubbleGraphForm from "../Form/BubbleGraphForm";
import PieGraphForm from "../Form/PieGraphForm";
import DoughnutGraphForm from "../Form/DoughnutGraphForm";
import PolarAreaGraphForm from "../Form/PolarAreaGraphForm";
import RadarGraphForm from "../Form/RadarGraphForm";

// graphForm作成のフロー
// XGraphFromコンポーネントを作成
// renderGraphFormにXGraphFormコンポーネントを登録
// converter.jsxにてconverterを登録
// scales.jsxにてscaleを登録
// options.jsxにてoptionを登録
// const.jsにて初期値を登録
//pie系の場合はpreviewのchartsに注意

const GraphForm = (props) => {
    const [index, setIndex] = useState(0);
    const [isOpenModal, setIsOpenModal] = useState(false);
    const graphData = useSelector(state => state.graphData);
    const [readyOk,setReadyOk] = useState(false);
    const datasets = graphData.datasets;
    const [graphType, setGraphType] = props.graphTypeState;
    useEffect(() => {
        if(datasets) {
            setGraphType(datasets[0].type)
        }    
    },[])    
    const pushSubmitButton = (event) => {
        event.preventDefault();            
        setIsOpenModal(prev => !prev);
    }        
    return (        
        <>                    
            <Modal graphData={graphData} modalState={[isOpenModal,setIsOpenModal]}/>            
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <GraphTypeSelector index={index} graphTypeState={[graphType, setGraphType]} label="グラフの種類" options={{values:["line","bar","scatter","bubble","pie","doughnut","polarArea","radar"],displays:["折れ線グラフ","棒グラフ","散布図","バブルチャート","円グラフ","ドーナツグラフ","鶏頭図","レーダーチャート"]}}/>
                </Grid>   
                <Grid item xs={12}>
                    <GraphSwitch states={[index,setIndex]} label="グラフ" options={{values:arange(0,datasets.length,1),displays:arange(1,datasets.length + 1,1)}}/>
                </Grid>                                 
                <Grid item xs={6}>
                    <DeleteButton label="グラフを削除" datasets={datasets} index={index} setIndex={setIndex} datasetsSize={datasets.length}/>                    
                </Grid>
                <Grid item xs={6}>
                    <AddButton label="グラフを追加" graphType={graphType} index={index} setIndex={setIndex} datasetsSize={datasets.length}/>
                </Grid>                    
                <Grid item xs={12} sx={{borderBottom:"1px dashed black", marginBottom:"30px",marginTop:"20px"}}/>
            </Grid>
            {
                renderGraphForm(graphType,index,graphData) 
            }
            
            <Grid container>
                <Grid xs={6} item>
                    <form onSubmit={pushSubmitButton}>
                        {readyOk ?
                            <SubmitButton label="グラフを出力" disabled={false} sx={{padding:"90px"}}/>:
                            <SubmitButton label="グラフを出力" disabled={false} sx={{padding:"90px"}}/>      
                        }
                    </form>
                </Grid>
                <Grid xs={6} item>
                    <form>
                        <SubmitButton disabled={true} label="コードを出力" sx={{padding:"90px"}}/>      
                    </form>
                </Grid>  
            </Grid>                        
        </>
    )
}

function renderGraphForm(graphType,index,graphData) {
    const datasets = graphData.datasets;
    if(!datasets[index]) {
        return <></>;
    }
    switch(graphType) {
        case "line":
            return <LineGraphForm index={index} graphData={graphData}/>     
        case "bar":
            return <BarGraphForm index={index} graphData={graphData}/>     
        case "scatter":
            return <ScatterGraphForm index={index} graphData={graphData}/>    
        case "bubble":
            return <BubbleGraphForm index={index} graphData={graphData}/>
        case "pie":
            return <PieGraphForm index={index} graphData={graphData}/>
        case "doughnut":
            return <DoughnutGraphForm index={index} graphData={graphData}/>
        case "polarArea":
            return <PolarAreaGraphForm index={index} graphData={graphData}/>    
        case "radar":
            return <RadarGraphForm index={index} graphData={graphData}/>
        default:
            return <></>
    }
}

function arange(start, stop, step) {
    const result = []
    for(let i = start; i < stop; i += step) {
        result.push(i);
    }
    return result;
}

export default GraphForm;

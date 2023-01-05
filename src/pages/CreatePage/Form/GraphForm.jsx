import LineGraphForm from "./LineGraphForm";
import {useSelector} from "react-redux";
import {useState} from "react";
import SubmitButton from "../Parts/SubmitButton";
import Modal from "../Modal";
const GraphForm = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const graphData = useSelector(state => state.graphData);

    const pushSubmitButton = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(graphData);

        // 将来的にここを変える;修正
        setIsOpenModal(prev => !prev);
    }    
    
    return (        
        <>        
            <Modal modalState={[isOpenModal,setIsOpenModal]}/>
            <form onSubmit={pushSubmitButton}>
                <LineGraphForm/>              
                <SubmitButton label="グラフを作成"/>      
            </form>
        </>
    )
}

export default GraphForm;

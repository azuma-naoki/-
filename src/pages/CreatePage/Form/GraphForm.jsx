import LineGraphForm from "./LineGraphForm";
import {useState} from "react";
import SubmitButton from "../Parts/SubmitButton";
import Modal from "../Modal";
const GraphForm = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const pushSubmitButton = (event) => {
        event.preventDefault();
        // 将来的にここを変える;修正
        setIsOpenModal(prev => !prev);
    }    
    
    return (        
        <>        
            <Modal modalState={[isOpenModal,setIsOpenModal]}/>
            <LineGraphForm/>              
            <form onSubmit={pushSubmitButton}>
                <SubmitButton label="グラフを作成" sx={{padding:"90px"}}/>      
            </form>
        </>
    )
}

export default GraphForm;

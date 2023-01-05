import LineGraphForm from "./LineGraphForm";
import {useSelector} from "react-redux";
const GraphForm = () => {
    const graphData = useSelector(state => state.graphData);
    const pushSubmitButton = (event) => {
        event.preventDefault();
        console.log(event);
        console.log(graphData);
    }    
    return (        
        <>
            <form onSubmit={pushSubmitButton}>
                <LineGraphForm/>        
            </form>
        </>
    )
}

export default GraphForm;

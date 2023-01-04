import GraphForm from "./Form/GraphForm";
import Preview from "./Preview";
import { Provider } from "react-redux";
import store from "./store";

const CreatePage = () => {
    return (
        <Provider store ={store}>
            <GraphForm/>
            <Preview/>
        </Provider>
    )
}
export default CreatePage;

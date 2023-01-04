import FileInput from "../Parts/FileInput";
import ColorPicker from "../Parts/ColorPicker";
import TextBox from "../Parts/TextBox";
import SubmitButton from "../Parts/SubmitButton";
const GraphForm = () => {
    const pushSubmitButton = (event) => {
        event.preventDefault();
    }    
    return (        
        <>
            <form onSubmit={pushSubmitButton}>
                <FileInput label="x軸:" val={"xs"}/><p></p>
                <FileInput label="y軸:" val={"ys"}/><p></p>
                <TextBox label="凡例:" val={"legend"}/>
                <p></p>
                <ColorPicker label="色を選択 " val={"color"}/>
                <p></p>
                <SubmitButton label="グラフを作成"/>
            </form>
        </>
    )
}

export default GraphForm;

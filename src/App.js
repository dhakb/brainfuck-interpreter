import {useState} from "react";
import {interpreter} from "./interpreter"
import Button from '@mui/material/Button';
import Editor from "@monaco-editor/react";

import "./App.css"

function App() {
    const [inputValue, setInputValue] = useState("")
    const [output, setOutPut] = useState("")


    const execute = () => {
        setOutPut(interpreter(inputValue))
    }


    const clearOutput = () => {
        setOutPut("")
    }

    return (
        <div className="container">
            <div className="editor-container">
                <Editor
                    theme={"vs-dark"}
                    defaultValue="// type your BF program"
                    onChange={(e) => setInputValue(e)}
                    value={inputValue}
                    className="editor"
                />
                <Button onClick={execute} variant="contained" color="success"  sx={{borderRadius: 0}}>Run</Button>
            </div>

            <div className="output-container">
                <div className="output" >{output}</div>
                <div className="clear-button">
                    <Button onClick={clearOutput} color="error" variant="contained">clear</Button>
                </div>
            </div>
        </div>
    );
}

export default App;

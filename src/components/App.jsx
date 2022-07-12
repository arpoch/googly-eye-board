import React from "react";
import Title from "./Title";
import DarkMode from "./DarkMode";
import ModeStateStore from "../binder/ModeStateStore";
import './App.css';

function App() {

    return (
        <div className="App">
            <ModeStateStore>
                <DarkMode/>
            </ModeStateStore>
            <Title/>
        </div>
    );
}

export default App;
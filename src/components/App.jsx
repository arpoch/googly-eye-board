import React, { useState } from "react";
import CursorTracker from "./CursorTracker";
import GooglyEye from "./GooglyEye"
import Drawing from "./Drawing";
import Title from "./Title";

function App(){
    
    const [mouseX,setMouseX]=useState(0);
    const [mouseY,setMouseY]=useState(0);

    return (
            <div className="App">
                <Drawing />
                <Title />
                <CursorTracker
                    setMouseX={setMouseX}
                    setMouseY={setMouseY}
                />
                <GooglyEye
                    eyeX={mouseX}
                    eyeY={mouseY}
                />
            </div>
        );
    }
export default App;
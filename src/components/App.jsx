import React, {useCallback, useContext, useMemo, useRef, useState} from "react";
import Layout from "./Layout";
import CanvasViewModel from "../viewmodel/CanvasViewModel";
import "./App.css"
import CanvasStateStore from "../Model/CanvasStateStore";

function App() {

    const ref = useRef(null);
    const [canvas,setCanvas]=useState(null);
    const canvasViewModel = useMemo(()=>new CanvasViewModel(canvas),[canvas]);

    console.log("creating")

    const canvasRef = useCallback((current)=>{
        if(current!=null && ref.current!==current) {
            console.log("Rendered")
            ref.current = current;
            current.width = window.innerWidth;
            current.height = window.innerHeight;
            const context = current.getContext('2d');
            setCanvas(context);
        }
    },[]);

    return (
        <div className="App">
            <canvas
                className="canvas"
                ref={canvasRef}
                style={{position: "absolute" }}
                onMouseMove={canvasViewModel.handleMouseMoves}
                onMouseDown={canvasViewModel.handleMouseDown}
                onMouseUp={canvasViewModel.handleMouseUp}
            />
            {(canvas!=null)
                ?
                <CanvasStateStore>
                    <Layout canvasViewModel={canvasViewModel}/>
                </CanvasStateStore>
                :
                <h1>Null</h1>}
        </div>
    )
}

export default App;
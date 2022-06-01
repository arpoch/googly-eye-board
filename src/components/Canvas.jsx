import React, {useCallback, useContext, useRef} from "react";
import CanvasViewModel from "../viewmodel/CanvasViewModel";
import {CanvasContext} from "../model/CanvasStateStore";
import Sidebar from "./Sidebar";
import SidebarStateStore from "../model/SidebarStateStore";

function Canvas() {

    const ref = useRef(null);
    const canvasContext = useContext(CanvasContext);
    const canvasViewModel = new CanvasViewModel(canvasContext);

    console.log("creating");

    const canvasRef = useCallback((current)=>{
        if(current!=null && ref.current!==current) {
            console.log("Rendered")
            ref.current = current;
            current.width = window.innerWidth;
            current.height = window.innerHeight;
            const context = current.getContext('2d');
            CanvasViewModel.setCanvas(context);
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
            {(CanvasViewModel.getCanvas()!=null)
                ?
                    <SidebarStateStore>
                        <Sidebar canvasViewModel={canvasViewModel}/>
                    </SidebarStateStore>
                :
                <h1>Null</h1>
            }
        </div>
    )
}

export default Canvas;

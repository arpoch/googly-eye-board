import React, {useCallback, useContext, useEffect, useRef} from "react";
import CanvasViewModel from "../viewmodel/CanvasViewModel";
import {CanvasContext} from "../binder/CanvasStateStore";
import Sidebar from "./Sidebar/Sidebar";
import SidebarStateStore from "../binder/SidebarStateStore";
import "./Canvas.css";

function Canvas() {

    const ref = useRef(null);
    const canvasContext = useContext(CanvasContext);
    const canvasViewModel = new CanvasViewModel(canvasContext);

    useEffect(()=>{
        window.addEventListener("resize",()=>{
            if(ref.current!=null){
                ref.current.width = window.innerWidth;
                ref.current.height = window.innerHeight;
            }
        })
    },[]);

    const canvasRef = useCallback((current)=>{
        function setAttributes(){
            if(localStorage.getItem("mode")==="black"){
                document.documentElement.setAttribute("theme-mode","dark");
            }else{
                document.documentElement.setAttribute("theme-mode","light");
            }
        }

        if(current!=null && ref.current!==current) {
            ref.current = current;
            current.width = window.innerWidth;
            current.height = window.innerHeight;
            current.style.backgroundColor = localStorage.getItem("mode");
            setAttributes();
            const context = current.getContext('2d');
            CanvasViewModel.setCanvas(context);
        }
    },[]);

    return (
        <div className="App">
            <canvas
                className="canvas"
                ref={canvasRef}
                style={{position: "relative"}}
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

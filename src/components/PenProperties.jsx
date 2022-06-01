import {IconContext} from "react-icons";
import {IoMdArrowDropup} from "react-icons/all";
import {useCallback, useContext, useMemo, useRef} from "react";
import {PropsContext} from "../model/PropertiesStateStore";
import PenPropertiesViewModel from "../viewmodel/PenPropertiesViewModel";
import "./PenProperties.css"

function PenProperties({canvasViewModel}){

    const ref = useRef(null);
    const penPropsContext = useContext(PropsContext);
    const penPropertiesViewModel = useMemo(
        ()=>new PenPropertiesViewModel(penPropsContext,canvasViewModel),
        [penPropsContext,canvasViewModel]);

    const activeCallback = useCallback((current)=>{
        ref.current = current;
    },[]);

    const dotCanvas = useCallback((current)=>{
        if(current==null) return;
        const width = current.width;
        const height = current.height;
        const canvas = current.getContext("2d");
        const lineWidth = penPropertiesViewModel.getSliderValue();
        canvas.clearRect(0,0,
            width,
            height);
        canvas.beginPath();
        canvas.arc(
            width/2,
            height/2,
            lineWidth,0,2*Math.PI,true);
        canvas.fillStyle = penPropertiesViewModel.getSwatchColor();
        canvas.fill();
    },[penPropertiesViewModel]);

    function handleSwatchClick(target,code){
        const prevTarget = ref.current;
        prevTarget.className = "swatch";
        target.target.className += " active";
        ref.current = target.target;
        penPropertiesViewModel.handleSwatchColor(code);
    }

    function handleSlider(e){
        penPropertiesViewModel.handleSlider(e.target.value);
    }

    function handlePropsClick(){
        const target = document.getElementsByClassName("pen-menu")[0];
        if(target.style.display === "block"){
            target.style.display = "none";
        }else {
            target.style.display = "block";
        }
    }

    return(
        <>
            <IconContext.Provider value={{title: "Pen", size: "1.5em", className: 'react-icons-props'}}>
                <button
                    onClick={handlePropsClick}
                    className={'sidebar-button props-menu-button'}>
                    <IoMdArrowDropup />
                </button>
            </IconContext.Provider>
            <div className={'pen-menu'}>
                <div className={'line-width'}>
                    <div className={"dot-container"}>
                        <canvas width={55} height={45} className={'dot-canvas'} ref={dotCanvas}/>
                    </div>
                    <div className={"slider-container"}>
                        <input
                            type={"range"}
                            onChange={handleSlider}
                            min={1}
                            max={20}
                            value={penPropertiesViewModel.getSliderValue()}
                            className={"slider"}/>
                    </div>
                    <p className={"text"}>Thickness</p>
                </div>
                <div className={'palette'}>
                    <button
                        onClick={(e)=>handleSwatchClick(e,"#fcc135")}
                        className={'swatch'}
                        style={{backgroundColor: "#fcc135"}}/>
                    <button
                        onClick={(e)=>handleSwatchClick(e,"#ffa31a")}
                        className={'swatch'}
                        style={{backgroundColor: "#ffa31a"}}/>
                    <button
                        onClick={(e)=>handleSwatchClick(e,"#ff751a")}
                        className={'swatch'}
                        style={{backgroundColor: "#ff751a"}}/>
                    <button
                        onClick={(e)=>handleSwatchClick(e,"#8000ff")}
                        className={'swatch'}
                        style={{backgroundColor: "#8000ff"}}/>
                    <button
                        onClick={(e)=>handleSwatchClick(e,"#9933ff")}
                        className={'swatch'}
                        style={{backgroundColor: "#9933ff"}}/>
                    <button
                        onClick={(e)=>handleSwatchClick(e,"#e600ac")}
                        className={'swatch'}
                        style={{backgroundColor: "#e600ac"}}/>
                    <button
                        onClick={(e)=>handleSwatchClick(e,"#66e0ff")}
                        className={'swatch'}
                        style={{backgroundColor: "#66e0ff"}}/>
                    <button
                        onClick={(e)=>handleSwatchClick(e,"#1a75ff")}
                        className={'swatch'}
                        style={{backgroundColor: "#1a75ff"}}/>
                    <button
                        onClick={(e)=>handleSwatchClick(e,"#0052cc")}
                        className={'swatch'}
                        style={{backgroundColor: "#0052cc"}}/>
                    <button
                        onClick={(e)=>handleSwatchClick(e,"#00e600")}
                        className={'swatch'}
                        style={{backgroundColor: "#00e600"}}/>
                    <button
                        onClick={(e)=>handleSwatchClick(e,"#009900")}
                        className={'swatch'}
                        style={{backgroundColor: "#009900"}}/>
                    <button
                        ref={activeCallback}
                        onClick={(e)=>handleSwatchClick(e,"#000000")}
                        className={'swatch active'}
                        style={{backgroundColor: "#000000"}}/>
                </div>
            </div>
        </>
    );
}

export default PenProperties;
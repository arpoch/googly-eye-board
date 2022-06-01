import './GooglyEye.css';
import {useContext, useEffect} from "react";
import {SidebarContext} from "../model/SidebarStateStore";
import GooglyEyeViewModel from "../viewmodel/GooglyEyeViewModel";
import {IconContext} from "react-icons";
import { GrAdd } from "react-icons/all";
import {GoogleEyeContext} from "../model/GooglyEyeStateStore";

function GooglyEye({canvasViewModel}){

    //Cause render each time value changes
    const sidebarContext = useContext(SidebarContext);
    const googleEyeContext =  useContext(GoogleEyeContext);

    const googlyEyeViewModel = new GooglyEyeViewModel(sidebarContext,googleEyeContext,canvasViewModel);

    useEffect(() => {
        const controller = new AbortController();
        //Works on initial render only
        document.getElementsByClassName
        ("message")[0].addEventListener("animationend",()=>{
            document.getElementsByClassName("message")[0].style.display = "none";
        },{once:true});

        document.getElementsByClassName("canvas")[0].addEventListener("mousemove", (e) =>{
                googlyEyeViewModel.setIrsPosition(e.clientX,e.clientY);
                //GooglyEyeViewModel.setMousePosition(e.clientX,e.clientY);
            }
            ,{signal: controller.signal});
        return () => {controller.abort();}
    },);

    function handleClick(){
        googlyEyeViewModel.addGoogleEye();
    }

    function setDisplayIcon(){
        hideBorders();
        return <GrAdd/>
    }

    function hideBorders(){
        googlyEyeViewModel.hideEyeContainerBorders();
    }

    return (
        <>
            <IconContext.Provider value={{title: "Pen", size: "2.3em", className: 'react-icons'}}>
                <button className={"sidebar-button"} onClick={handleClick}>{setDisplayIcon()}</button>
                <span className={"message"}><br/>Add a googly eye to make things more fun!</span>
            </IconContext.Provider>
        </>
    );
}

export default GooglyEye;

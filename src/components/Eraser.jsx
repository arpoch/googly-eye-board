import {SidebarContext} from "../Model/SidebarStateStore";
import {useContext} from "react";
import {RiEraserLine, RiEraserFill} from 'react-icons/ri';
import {IconContext} from "react-icons";
import EraserViewModel from "../viewmodel/EraserViewModel";


function Eraser({canvasViewModel}){
    //TODO Optimise the re-rendering of context
    const sidebarContext = useContext(SidebarContext)
    const eraserViewModel = new EraserViewModel(sidebarContext,canvasViewModel);

    function handleClick(){
        eraserViewModel.handleEraserClick();
    }

    function setDisplayIcon(){
        if(eraserViewModel.getEraserClick()) {
            return <RiEraserFill />
        }
        else {
            return <RiEraserLine />
        }
    }

    return (
        <>
            <IconContext.Provider value={{size: "2.3em", className: 'react-icons'}}>
                <button onClick={handleClick}>{setDisplayIcon()}</button>
            </IconContext.Provider>
        </>
    );

}

export default Eraser;
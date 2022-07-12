import {SidebarContext} from "../../binder/SidebarStateStore";
import {useContext} from "react";
import {RiEraserLine, RiEraserFill} from 'react-icons/ri';
import {IconContext} from "react-icons";
import EraserViewModel from "../../viewmodel/EraserViewModel";
import {PropsContext} from "../../binder/PropertiesStateStore";


function Eraser({canvasViewModel}){
    //TODO Optimise the re-rendering of context
    const sidebarContext = useContext(SidebarContext);
    const propsContext = useContext(PropsContext);
    const eraserViewModel = new EraserViewModel(propsContext,sidebarContext,canvasViewModel);

    function handleClick(){
        eraserViewModel.handleEraserClick();
    }

    function setDisplayIcon() {
        if(eraserViewModel.getEraserClick()) {
            eraserViewModel.startErasing();
            return <RiEraserFill />
        }
        else {
            eraserViewModel.stopErasing();
            return <RiEraserLine />
        }
    }

    return (
        <>
            <IconContext.Provider value={{size: "2.3em", className: 'react-icons'}}>
                <button className={"sidebar-button"} onClick={handleClick}>{setDisplayIcon()}</button>
            </IconContext.Provider>
        </>
    );

}

export default Eraser;
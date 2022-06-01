import {IconContext} from "react-icons";
import {BsPen, BsPenFill} from "react-icons/bs";
import {useContext, useMemo} from "react";
import PenViewModel from "../viewmodel/PenViewModel"
import {SidebarContext} from "../model/SidebarStateStore";
import {PropsContext} from "../model/PropertiesStateStore";

function Pen({canvasViewModel}){
    //TODO Optimise the re-rendering of context
    const sidebarContext = useContext(SidebarContext);
    const propsContext = useContext(PropsContext);
    const penViewModel = useMemo(
        ()=>new PenViewModel(propsContext,sidebarContext,canvasViewModel),
        [propsContext,sidebarContext,canvasViewModel]);

    function handleClick(){
        penViewModel.handlePenClick();
    }

    function setDisplayIcon(){
        penViewModel.setPenProperties();
        if(penViewModel.getPenClick()){
            penViewModel.startDrawing();
            return <BsPenFill/>
        } else {
            penViewModel.stopDrawing();
            return <BsPen/>
        }
    }

    return(
        <>
            <IconContext.Provider value={{title: "Pen", size: "2.3em", className: 'react-icons'}}>
                <button className={"sidebar-button pen"} onClick={handleClick}>{setDisplayIcon()}</button>
            </IconContext.Provider>
        </>
    );
}

export default Pen;
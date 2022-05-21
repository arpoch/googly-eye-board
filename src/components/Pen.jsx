import {IconContext} from "react-icons";
import {BsPen, BsPenFill} from "react-icons/bs";
import {useContext} from "react";
import PenViewModel from "../viewmodel/PenViewModel"
import {SidebarContext} from "../Model/SidebarStateStore";

function Pen({canvasViewModel}){
    //TODO Optimise the re-rendering of context
    const sidebarContext = useContext(SidebarContext);
    const penViewModel = new PenViewModel(sidebarContext,canvasViewModel);

    function handleClick(){
        penViewModel.handlePenClick();
    }

    function setDisplayIcon(){
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
                <button onClick={handleClick}>{setDisplayIcon()}</button>
            </IconContext.Provider>
        </>
    );
}

export default Pen;
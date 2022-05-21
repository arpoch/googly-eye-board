import {IconContext} from "react-icons";
import {useContext} from "react";
import {SidebarContext} from "../model/SidebarStateStore";
import {GiArrowCursor, GrCursor} from "react-icons/all";
import SelectionViewModel from "../viewmodel/SelectionViewModel";

function Selection({canvasViewModel}){
    //TODO Optimise the re-rendering of context
    const sidebarContext = useContext(SidebarContext);
    const selectViewModel = new SelectionViewModel(sidebarContext,canvasViewModel);

    function handleClick(){
        selectViewModel.handleIconClick();
    }

    function setDisplayIcon(){
        if(selectViewModel.getIconClick()){
            return <GiArrowCursor/>
        } else {
            return <GrCursor/>
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

export default Selection;
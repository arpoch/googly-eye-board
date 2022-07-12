import {IconContext} from "react-icons";
import {useContext} from "react";
import {SidebarContext} from "../../binder/SidebarStateStore";
import {GiArrowCursor} from "react-icons/gi";
import {GrCursor} from "react-icons/gr";
import SelectionViewModel from "../../viewmodel/SelectionViewModel";

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
            <IconContext.Provider value={{title: "Select", size: "2.3em", className: 'react-icons'}}>
                <button className={"sidebar-button"} onClick={handleClick}>{setDisplayIcon()}</button>
            </IconContext.Provider>
        </>
    );
}

export default Selection;
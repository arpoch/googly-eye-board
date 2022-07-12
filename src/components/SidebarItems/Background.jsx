import {useContext} from "react";
import {IconContext} from "react-icons";
import BackgroundViewModel from "../../viewmodel/BackgroundViewModel";
import {SidebarContext} from "../../binder/SidebarStateStore";
import {BsImage, BsImageFill} from "react-icons/all";


const Background = ({canvasViewModel}) => {

    const sidebarContext = useContext(SidebarContext);
    const backgroundViewModel = new BackgroundViewModel(sidebarContext,canvasViewModel);

    function handleClick(){
        backgroundViewModel.handleIconClick();
    }

    function setDisplayIcon(){
        if(backgroundViewModel.getIconClick()){
            backgroundViewModel.addBackground();
            return <BsImageFill />
        } else {
            return <BsImage />
        }
    }

    return(
        <>
            <IconContext.Provider value={{title: "Background", size: "2.3em", className: 'react-icons'}}>
                <button onClick={handleClick}>{setDisplayIcon()}</button>
            </IconContext.Provider>
        </>
    );

}

export default Background;
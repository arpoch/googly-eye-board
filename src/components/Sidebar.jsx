import "./Sidebar.css";
import {useState} from "react";
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/all";
import GooglyEyeStateStore from "../model/GooglyEyeStateStore";
import "./PropertiesMenuButton.css"
import PenProperties from "./PenProperties";
import Pen from "./Pen";
import Eraser from "./Eraser";
import Selection from "./Selection";
import GooglyEye from "./GooglyEye";
import PropertiesStateStore from "../model/PropertiesStateStore";

const Sidebar = ({canvasViewModel}) => {

    const [isSidebarHidden, setIsSidebarHidden] = useState(false);

    function hideSideBar() {
        const closeBtn = document.getElementsByClassName("sidebar");
        if (closeBtn[0] !== undefined) {
            closeBtn[0].style.bottom = '-45px';
        }
    }

    function showSidebar() {
        const closeBtn = document.getElementsByClassName("sidebar");
        if (closeBtn[0] !== undefined) {
            closeBtn[0].style.bottom = '0px';
        }
    }

    function handleClick() {
        setIsSidebarHidden(!isSidebarHidden);
    }

    function showIcon() {
        if (isSidebarHidden) {
            hideSideBar();
            return <AiOutlineArrowUp/>
        } else {
            showSidebar();
            return <AiOutlineArrowDown/>
        }
    }

    return (
        <div className="container">
            <PropertiesStateStore>
                <div className={'menu'}>
                    <div className={'menu-container'}>
                        <div className={'menu-item'}>
                            <PenProperties/>
                        </div>
                    </div>
                </div>
                <div className='sidebar'>
                    <div className="sidebar-container">
                        <div className="sidebar-item" title={"Pen"}>
                            <Pen canvasViewModel={canvasViewModel}/>
                        </div>
                        <div className="sidebar-item" title={"Eraser"}>
                            <Eraser canvasViewModel={canvasViewModel}/>
                        </div>
                        {/*<div className="sidebar-item" title={"Background"}>*/}
                        {/*    <Background canvasViewModel={canvasViewModel}/>*/}
                        {/*</div>*/}
                        <GooglyEyeStateStore>
                            <div className="sidebar-item" title={"Add"}>
                                <GooglyEye canvasViewModel={canvasViewModel}/>
                            </div>
                        </GooglyEyeStateStore>
                        <div className="sidebar-item" title={"Select"}>
                            <Selection canvasViewModel={canvasViewModel}/>
                        </div>
                    </div>
                </div>
            </PropertiesStateStore>
            {/*Pop-Up Button*/}
            {/*<IconContext.Provider value={{size: "2.3em", className: 'react-icons'}}>*/}
            {/*    <button onClick={handleClick}>{showIcon()}</button>*/}
            {/*</IconContext.Provider>*/}
        </div>
    );
}

export default Sidebar;
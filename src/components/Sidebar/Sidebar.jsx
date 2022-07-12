import "./Sidebar.css";
import {useState} from "react";
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";
import PropertiesStateStore from "../../binder/PropertiesStateStore";
import SidebarItemsProperties from "../SidebarItemsProperties/SidebarItemsProperties";
import SidebarItems from "../SidebarItems/SidebarItems";

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
                <SidebarItemsProperties />
                <SidebarItems canvasViewModel={canvasViewModel} />
            </PropertiesStateStore>
            {/*Pop-Up Button*/}
            {/*<IconContext.Provider value={{size: "2.3em", className: 'react-icons'}}>*/}
            {/*    <button onClick={handleClick}>{showIcon()}</button>*/}
            {/*</IconContext.Provider>*/}
        </div>
    );
}

export default Sidebar;
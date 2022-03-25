import {BsPen, BsPenFill} from 'react-icons/bs';
import {RiEraserLine, RiEraserFill} from 'react-icons/ri';
import {IconContext} from "react-icons";
import "./Sidebar.css";

const Sidebar = ({isPenClicked,isEraserClicked}) => {

    function displayPenIcon(){
        if(isPenClicked) return <BsPenFill/>
        else return <BsPen/>
    }

    function displayEraserIcon(){
        if(isEraserClicked) return <RiEraserFill/>
        else return <RiEraserLine/>
    }

    return (
        <div className='sidebar'>
            <div className="sidebar-container">
                <div className="sidebar-item">
                    <IconContext.Provider value={{title: "Pen", size: "2.3em", className: 'react-icons'}}>
                        <a>{displayPenIcon()}</a>
                    </IconContext.Provider>
                </div>
                <div className="sidebar-item">
                    <IconContext.Provider value={{size: "2.3em", className: 'react-icons'}}>
                        <a>{displayEraserIcon()}</a>
                    </IconContext.Provider>
                </div>
            </div>
            <div className='collapse'>
                <p>close</p>
            </div>
        </div>
    );
}

export default Sidebar;
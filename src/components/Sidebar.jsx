import "./Sidebar.css";
import Pen from "./Pen";
import Eraser from "./Eraser";
import Background from "./Background";
import Selection from "./Selection";

const Sidebar = ({canvasViewModel}) => {

    return (
        <div className='sidebar'>
            <div className="sidebar-container">
                <div className="sidebar-item">
                    <Pen canvasViewModel={canvasViewModel} />
                </div>
                <div className="sidebar-item">
                    <Eraser canvasViewModel={canvasViewModel} />
                </div>
                <div className="sidebar-item">
                    <Background canvasViewModel={canvasViewModel} />
                </div>
                <div className="sidebar-item">
                    <Selection canvasViewModel={canvasViewModel} />
                </div>
            </div>
            <div className='collapse'>
                <p>close</p>
            </div>
        </div>
    );
}

export default Sidebar;
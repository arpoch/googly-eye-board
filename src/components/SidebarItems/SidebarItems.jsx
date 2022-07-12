import Pen from "./Pen";
import Eraser from "./Eraser";
import GooglyEyeStateStore from "../../binder/GooglyEyeStateStore";
import GooglyEye from "./GooglyEye";
import Selection from "./Selection";


function SidebarItems({canvasViewModel}){
    return (
        <>
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
        </>
    )
}

export default SidebarItems;
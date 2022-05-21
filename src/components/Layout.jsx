import Title from "./Title";
import GooglyEye from "./GooglyEye";
import Sidebar from "./Sidebar";
import SidebarStateStore from "../Model/SidebarStateStore";

function Layout({canvasViewModel}) {

    // imageUrl={()=>{const image = new Image(); image.src="../assets/celebrations.jpg"; return image }}4
    return (
        <>
            <Title/>
            <SidebarStateStore>
                <GooglyEye/>
                <Sidebar canvasViewModel={canvasViewModel}/>
            </SidebarStateStore>


        </>
    );
}

export default Layout;
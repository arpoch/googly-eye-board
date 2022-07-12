import {IoMdArrowDropup} from "react-icons/io";
import {useContext, useMemo} from "react";
import {PropsContext} from "../../binder/PropertiesStateStore";
import PenPropertiesViewModel from "../../viewmodel/PenPropertiesViewModel";
import "./PenProperties.css"
import PropertiesButton from "../SidebarItemsProperties/PropertiesButton";
import Slider from "./Slider";
import Palette from "./Palette";

function PenProperties({canvasViewModel}){

    const penPropsContext = useContext(PropsContext);
    const penPropertiesViewModel = useMemo(
        ()=>new PenPropertiesViewModel(penPropsContext,canvasViewModel),
        [penPropsContext,canvasViewModel]);

    function handlePropsClick(){
        const target = document.getElementsByClassName("pen-menu")[0];
        if(target.style.display === "block"){
            target.style.display = "none";
        }else {
            target.style.display = "block";
        }
    }

    return(
        <>
            <PropertiesButton
                title={"Pen"}
                className={"ri-pen-props"}
                onClickEventHandler={handlePropsClick}
                icon={<IoMdArrowDropup />}
            />
            <div className={'pen-menu'}>
                <Slider penPropertiesViewModel={penPropertiesViewModel}/>
                <Palette penPropertiesViewModel={penPropertiesViewModel} />
            </div>
        </>
    );
}

export default PenProperties;
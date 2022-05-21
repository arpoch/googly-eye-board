import './GooglyEye.css';
import {useContext, useEffect, useState} from "react";
import {SidebarContext} from "../Model/SidebarStateStore";

function GooglyEye(){

    const sidebarContext = useContext(SidebarContext);
    const [eyePosition,setEyePosition]=useState({x: "", y:""});

    function handleMouseEvent(e){
        setEyePosition({x:getX(e.clientX), y:getY(e.clientY)});
    }

    function handleContainerClick(){
        if(sidebarContext.states.Select.isSelected){
        }else {
        }
    }

    useEffect(() => {
        window.addEventListener("mousemove", handleMouseEvent);
        return () => {
            window.removeEventListener("mousemove", handleMouseEvent);
        }
    },[]);

    function getX(clientX) {
        if ((clientX * 100 / window.innerWidth) < 20) {
            return 20 + "%";
        } else if ((clientX * 100 / window.innerWidth) > 80) {
            return 80 + "%";
        } else {
            return clientX * 100 / window.innerWidth + '%';
        }
    }

    function getY(clientY) {
        if ((clientY * 100 / window.innerHeight) < 20) {
            return 20 + "%";
        } else if ((clientY * 100 / window.innerHeight) > 80) {
            return 80 + "%";
        } else {
            return clientY * 100 / window.innerHeight + '%';
        }
    }

    return (
        <div className={"container-box"} onClick={handleContainerClick}>
            <div className="Eye-ball" >
                <div className="Irs" style= {{ left: eyePosition.x, top: eyePosition.y }}>
                </div>
            </div>
        </div>

    );
}

export default GooglyEye;

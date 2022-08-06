import {IconContext} from "react-icons";
import {RiSunLine} from "react-icons/ri";
import {FiMoon} from "react-icons/fi";
import "./DarkMode.css"
import ModeViewModel from "../viewmodel/ModeViewModel";
import {useContext} from "react";
import {ModeContext} from "../binder/ModeStateStore";

function DarkMode() {
    const modeContext = useContext(ModeContext);
    const modeViewModel = new ModeViewModel(modeContext);

    function handleClick(){
        modeViewModel.getThemeMode();
    }

    function showIcon() {
        if(modeViewModel.isDarkMode()){
            document.documentElement.setAttribute("theme-mode","dark");
            return <FiMoon />
        }else {
            document.documentElement.setAttribute("theme-mode","light");
            return <RiSunLine />
        }
    }

    return (
        <div className={"dark-mode"}>
            <IconContext.Provider value={{title: "Pen", size: "2.5em", className: 'ri-theme-mode'}}>
                <button className={"mode"} onClick={handleClick}>{showIcon()}</button>
            </IconContext.Provider>
        </div>
    );


}

export default DarkMode;
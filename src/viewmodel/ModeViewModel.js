
class ModeViewModel {

    modeContext =  null;

    constructor(modeContext) {
        this.modeContext =  modeContext;
    }

    getThemeMode(){
        this.modeContext.handleThemeChange(this.isDarkMode()?"white":"black");
    }

    isDarkMode(){
        return localStorage.getItem("mode") === "black";
    }
}

export default ModeViewModel;
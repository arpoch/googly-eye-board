
class ModeViewModel {

    modeContext =  null;

    constructor(modeContext) {
        this.modeContext =  modeContext;
    }

    getThemeMode(){
        this.modeContext.handleThemeChange(this.isDarkMode()?"white":"black");
    }

    isDarkMode(){
        if(localStorage.getItem("mode")==null){
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        }else {
            return localStorage.getItem("mode") === "black";
        }
    }
}

export default ModeViewModel;
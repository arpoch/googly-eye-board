import CanvasViewModel from "./CanvasViewModel";

class EraserViewModel{

    sidebarContext = null;
    canvasViewModel = null;
    propsContext = null;
    static eraser = false;
    static isErasing = false;

    constructor(propsContext,sidebarContext,canvasViewModel) {
        this.propsContext = propsContext;
        this.sidebarContext = sidebarContext;
        this.canvasViewModel = canvasViewModel;
    }

    static eraserMove(nativeEvent){
        if(EraserViewModel.eraser && EraserViewModel.isErasing){
            const canvas = CanvasViewModel.getCanvas();
            canvas.lineTo(nativeEvent.offsetX, nativeEvent.offsetY);
            canvas.stroke();
        }
    }

    static eraserDown(nativeEvent) {
        const canvas = CanvasViewModel.getCanvas();
        EraserViewModel.isErasing = true;
        canvas.beginPath();
        canvas.moveTo(nativeEvent.offsetX, nativeEvent.offsetY);
    }

    static eraserUp(){
        const canvas = CanvasViewModel.getCanvas();
        EraserViewModel.isErasing = false;
        canvas.closePath();
    }

    handleEraserClick(){
        this.sidebarContext.handleEraserClick();
    }

    getEraserClick(){
        return this.sidebarContext.states.Eraser.isEraserClicked;
    }

    startErasing(){
        const canvas = document.getElementsByClassName("canvas")[0];
        canvas.addEventListener("mousedown",
            EraserViewModel.eraserDown,
        );
        canvas.addEventListener("mousemove",
            EraserViewModel.eraserMove,
        );
        canvas.addEventListener("mouseup",
            EraserViewModel.eraserUp,
        );
        EraserViewModel.eraser = true;
        this.setEraserProperties();
        // this.canvasViewModel.startErasing(this.getEraserClick());
    }

    stopErasing(){
        if(!EraserViewModel.eraser)
            return;
        const canvas = document.getElementsByClassName("canvas")[0];
        canvas.removeEventListener("mousemove",EraserViewModel.eraserMove);
        canvas.removeEventListener("mousedown",EraserViewModel.eraserDown);
        canvas.removeEventListener("mouseup",EraserViewModel.eraserUp);
        EraserViewModel.eraser = false;
        // this.canvasViewModel.stopErasing(this.getEraserClick());
    }

    setEraserProperties() {
        if (!EraserViewModel.eraser)
            return;
        let color = localStorage.getItem("mode") === "black" ? "#000000" : "#ffffff";
        this.canvasViewModel.setCanvasProperties(
            color,
            this.propsContext.states.EraserProps.radius
        );
    }
}

export default EraserViewModel;
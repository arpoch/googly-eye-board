import CanvasViewModel from "./CanvasViewModel";

class PenViewModel{

    sidebarContext = null;
    canvasViewModel = null;
    propsContext = null;
    // controller = new AbortController();
    static penDraw = false;
    static isDrawing = false;

    constructor(propsContext,sidebarContext,canvasViewModel) {
        this.propsContext = propsContext;
        this.sidebarContext = sidebarContext;
        this.canvasViewModel = canvasViewModel;
    }

    static penMove(nativeEvent){
        if(PenViewModel.penDraw && PenViewModel.isDrawing) {
            const canvas = CanvasViewModel.getCanvas();
            canvas.lineTo(nativeEvent.offsetX, nativeEvent.offsetY);
            canvas.stroke();
        }
    }

    static penDown(nativeEvent){
        const canvas = CanvasViewModel.getCanvas();
        PenViewModel.isDrawing = true;
        canvas.beginPath();
        canvas.moveTo(nativeEvent.offsetX, nativeEvent.offsetY);
    }

    static penUp(nativeEvent){
        const canvas = CanvasViewModel.getCanvas();
        PenViewModel.isDrawing = false;
        canvas.closePath();
    }

    handlePenClick(){
        this.sidebarContext.handlePenClick();
    }

    getPenClick(){
        return this.sidebarContext.states.Pen.isPenClicked;
    }

    startDrawing() {
        PenViewModel.penDraw = true;
        this.setPenProperties();
        const canvas = document.getElementsByClassName("canvas")[0];
        canvas.addEventListener("mousedown",
            PenViewModel.penDown,
            // {signal: this.controller.signal}
        );
        canvas.addEventListener("mousemove",
            PenViewModel.penMove,
            // {signal: this.controller.signal}
        );
        canvas.addEventListener("mouseup",
            PenViewModel.penUp,
            // {signal: this.controller.signal}
        );

    }

    stopDrawing() {
        if (!PenViewModel.penDraw)
            return;
        const canvas = document.getElementsByClassName("canvas")[0];
        canvas.removeEventListener("mousemove",PenViewModel.penMove);
        canvas.removeEventListener("mousedown",PenViewModel.penDown);
        canvas.removeEventListener("mouseup",PenViewModel.penUp);
        PenViewModel.penDraw = false;
    }

    setPenProperties(){
        if(!PenViewModel.penDraw)
            return;
        if(this.propsContext.states.PenProps.color===""){
            let color = localStorage.getItem("mode")==="black"?"#ffffff":"#000000";
            this.canvasViewModel.setCanvasProperties(
                color,
                this.propsContext.states.PenProps.lineWidth
            )
        }else {
            this.canvasViewModel.setCanvasStroke(this.propsContext.states.PenProps.color);
            this.canvasViewModel.setCanvasLineWidth(this.propsContext.states.PenProps.lineWidth);
        }
    }
}

export default PenViewModel;
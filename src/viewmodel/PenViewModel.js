import CanvasViewModel from "./CanvasViewModel";

class PenViewModel{

    context = null;
    canvasViewModel = null;

    constructor(context,canvasViewModel) {
        this.context = context;
        this.canvasViewModel = canvasViewModel;
    }

    handlePenClick(){
        this.context.handlePenClick();
    }

    getPenClick(){
        return this.context.states.Pen.isPenClicked;
    }

    defaultPenProperties(){
        this.setPenProperties("black",0.7,"round");
    }

    setPenProperties(stroke,width,cap){
        const canvas = CanvasViewModel.canvas;
        if(canvas==null) {
            console.log("Canvas not initialized");
            return;
        }
        canvas.strokeStyle = stroke;
        canvas.width = width;
        canvas.cap = cap;
    }

    startDrawing(){
        this.defaultPenProperties();
        this.canvasViewModel.startDrawing(this.getPenClick());
    }

    stopDrawing(){
        this.canvasViewModel.stopDrawing(this.getPenClick());
    }
}

export default PenViewModel;
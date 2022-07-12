
class CanvasViewModel{

    static CanvasContext = null;


    constructor(canvasContext) {
        CanvasViewModel.CanvasContext = canvasContext;
    }

    handleMouseMoves({nativeEvent}){}

    handleMouseDown({nativeEvent}){}

    handleMouseUp(){}

    static setCanvas(canvas){
        CanvasViewModel.CanvasContext.setCanvas(canvas);
    }

    static getCanvas(){
        return CanvasViewModel.CanvasContext.states.Canvas.canvas;
    }

    static getMousePosition(){
        return CanvasViewModel.CanvasContext.states.Canvas.mousePos;
    }

    setCanvasProperties(stroke,width,cap="round"){
        CanvasViewModel.getCanvas().strokeStyle = stroke;
        CanvasViewModel.getCanvas().lineWidth = width;
        CanvasViewModel.getCanvas().cap = cap;
    }

    setCanvasStroke(stroke){
        CanvasViewModel.getCanvas().strokeStyle = stroke;
    }

    setCanvasLineWidth(width){
        CanvasViewModel.getCanvas().lineWidth = width;
    }
}

export default CanvasViewModel;
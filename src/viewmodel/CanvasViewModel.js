
class CanvasViewModel{

    static CanvasContext = null;
    static penDraw = false;
    static isDrawing = false;
    static eraser = false;
    static isErasing = false;

    constructor(canvasContext) {
        CanvasViewModel.CanvasContext = canvasContext;
    }

    handleMouseMoves({nativeEvent}){
        console.log("Canvas")
        if(CanvasViewModel.penDraw && CanvasViewModel.isDrawing) {
            CanvasViewModel.getCanvas().lineTo(nativeEvent.offsetX, nativeEvent.offsetY);
            CanvasViewModel.getCanvas().stroke();
        }else if(CanvasViewModel.eraser && CanvasViewModel.isErasing) {
            CanvasViewModel.getCanvas().arc(nativeEvent.offsetX, nativeEvent.offsetY, 10, 0, 2 * Math.PI);
            CanvasViewModel.getCanvas().stroke();
        }
    }

    handleMouseDown({nativeEvent}){
        if(CanvasViewModel.penDraw) {
            console.log("Down");
            CanvasViewModel.isDrawing = true;
            CanvasViewModel.getCanvas().beginPath();
            CanvasViewModel.getCanvas().moveTo(nativeEvent.offsetX, nativeEvent.offsetY);
        }else if(CanvasViewModel.eraser){
            console.log("Down "+nativeEvent.offsetX+" "+nativeEvent.offsetY);
            CanvasViewModel.isErasing = true;
            CanvasViewModel.getCanvas().beginPath();
            CanvasViewModel.getCanvas().moveTo(nativeEvent.offsetX, nativeEvent.offsetY);

        }
    }

    handleMouseUp(){
        if(CanvasViewModel.penDraw) {
            console.log("Up");
            CanvasViewModel.isDrawing = false;
            CanvasViewModel.getCanvas().closePath();
        }else if (CanvasViewModel.eraser){
            CanvasViewModel.isErasing = false;
            CanvasViewModel.getCanvas().closePath();
        }
        console.log("Here");
    }

    static setCanvas(canvas){
        CanvasViewModel.CanvasContext.setCanvas(canvas);
    }

    static getCanvas(){
        return CanvasViewModel.CanvasContext.states.Canvas.canvas;
    }

    static getMousePosition(){
        return CanvasViewModel.CanvasContext.states.Canvas.mousePos;
    }

    startDrawing(value){
        CanvasViewModel.penDraw = value;
    }

    stopDrawing(value){
        CanvasViewModel.penDraw = value;
    }

    startErasing(value){
        CanvasViewModel.getCanvas().globalCompositionOperation = 'destination-out';
        CanvasViewModel.eraser = value;
    }

    stopErasing(value){
        CanvasViewModel.getCanvas().globalCompositionOperation = 'source-over';
        CanvasViewModel.eraser = value;
    }

    setCanvasProperties(stroke,width,cap="round"){
        CanvasViewModel.getCanvas().strokeStyle = stroke;
        CanvasViewModel.getCanvas().lineWidth = width;
        CanvasViewModel.getCanvas().cap = cap;
    }

}

export default CanvasViewModel;
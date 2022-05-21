
class CanvasViewModel{

    static penDraw = false;
    static canvas = null;
    static isDrawing = false;

    constructor(canvas) {
        CanvasViewModel.canvas = canvas;
    }

    handleMouseMoves({nativeEvent}){
        if(CanvasViewModel.penDraw && CanvasViewModel.isDrawing) {
            CanvasViewModel.canvas.lineTo(nativeEvent.offsetX, nativeEvent.offsetY);
            CanvasViewModel.canvas.stroke();
        }
    }

    handleMouseDown({nativeEvent}){
        if(CanvasViewModel.penDraw) {
            console.log("Down");
            CanvasViewModel.isDrawing = true;
            CanvasViewModel.canvas.beginPath();
            CanvasViewModel.canvas.moveTo(nativeEvent.offsetX, nativeEvent.offsetY);
        }
    }

    handleMouseUp({nativeEvent}){
        if(CanvasViewModel.penDraw) {
            console.log("Up");
            CanvasViewModel.isDrawing = false;
            CanvasViewModel.canvas.closePath();
        }
    }

    set setCanvas(canvas){
        CanvasViewModel.canvas = canvas;
    }

    get getCanvas(){
        return CanvasViewModel.canvas;
    }

    startDrawing(value){
        CanvasViewModel.penDraw = value;
    }

    stopDrawing(value){
        CanvasViewModel.penDraw = value;
    }


    initEraser(value){

    }


}

export default CanvasViewModel;
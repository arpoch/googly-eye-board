
class CanvasViewModel{

    static CanvasContext = null;

    constructor(canvasContext) {
        CanvasViewModel.CanvasContext = canvasContext;
    }

    static setCanvas(canvas){
        CanvasViewModel.CanvasContext.setCanvas(canvas);
    }

    static getCanvas(){
        return CanvasViewModel.CanvasContext.states.Canvas.canvas;
    }

    static setCanvasElement(element){
        CanvasViewModel.CanvasContext.setDOMElement(element);
    }

    static getCanvasElement(){
        return CanvasViewModel.CanvasContext.states.Canvas.dElement;
    }

    static setCursor(item){
        if(item==="PEN"){
            CanvasViewModel.getCanvasElement().style.cursor = "url(https://img.icons8.com/external-others-inmotus-design/67/000000/external-Pen-result-others-inmotus-design-3.png) 25 45, crosshair";
        }else if(item==="ERASER"){
            CanvasViewModel.getCanvasElement().style.cursor = "url(https://img.icons8.com/external-those-icons-lineal-color-those-icons/32/000000/external-Eraser-design-those-icons-lineal-color-those-icons.png)  10 30, pointer";
        }else if(item==="DEFAULT"){
            CanvasViewModel.getCanvasElement().style.cursor = "pointer";
        }
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
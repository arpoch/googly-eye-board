
class PenViewModel{

    sidebarContext = null;
    canvasViewModel = null;
    propsContext = null;

    constructor(propsContext,sidebarContext,canvasViewModel) {
        this.propsContext = propsContext;
        this.sidebarContext = sidebarContext;
        this.canvasViewModel = canvasViewModel;
    }

    handlePenClick(){
        this.sidebarContext.handlePenClick();
    }

    getPenClick(){
        return this.sidebarContext.states.Pen.isPenClicked;
    }

    startDrawing(){
        this.canvasViewModel.startDrawing(this.getPenClick());
    }

    stopDrawing(){
        this.canvasViewModel.stopDrawing(this.getPenClick());
    }

    setPenProperties(){
        this.canvasViewModel.setCanvasProperties(
            this.propsContext.states.PenProps.color,
            this.propsContext.states.PenProps.lineWidth
        );
    }
}

export default PenViewModel;
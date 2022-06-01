
class EraserViewModel{

    sidebarContext = null;
    canvasViewModel = null;
    propsContext = null;

    constructor(propsContext,sidebarContext,canvasViewModel) {
        this.propsContext = propsContext;
        this.sidebarContext = sidebarContext;
        this.canvasViewModel = canvasViewModel;
    }

    handleEraserClick(){
        this.sidebarContext.handleEraserClick();
    }

    getEraserClick(){
        return this.sidebarContext.states.Eraser.isEraserClicked;
    }


    startErasing(){
        // console.log(this.propsContext.states.EraserProps.)
        this.canvasViewModel.setCanvasProperties(
            this.propsContext.states.EraserProps.color,
            this.propsContext.states.EraserProps.radius);
        this.canvasViewModel.startErasing(this.getEraserClick());
    }

    stopErasing(){
        this.canvasViewModel.stopErasing(this.getEraserClick());
    }
}

export default EraserViewModel;
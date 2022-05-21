
class EraserViewModel{

    context = null;
    canvasViewModel = null;

    constructor(context,canvasViewModel) {
        this.context = context;
        this.canvasViewModel = canvasViewModel;
    }

    handleEraserClick(){
        this.context.handleEraserClick();
    }

    getEraserClick(){
        return this.context.states.Eraser.isEraserClicked;
    }
}

export default EraserViewModel;
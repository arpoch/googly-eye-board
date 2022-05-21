
class BackgroundViewModel{

    context = null;
    canvasViewModel = null;

    constructor(context,canvasViewModel) {
        this.context = context;
        this.canvasViewModel = canvasViewModel;
    }

    handleIconClick(){
        this.context.handleBackgroundClick();
    }

    getIconClick(){
        return this.context.states.Background.isBackgroundClicked;
    }

    addBackground(){

    }
}

export default BackgroundViewModel;
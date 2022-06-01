
class PenPropertiesViewModel{

    propsContext = null;
    canvasViewModel = null;

    constructor(context,canvasViewModel) {
        this.propsContext = context;
        this.canvasViewModel = canvasViewModel;
    }

    handleSwatchColor(code){
        this.propsContext.handleLineColor(code);
    }

    handleSlider(e){
        this.propsContext.handleLineWidth(e);
    }

    getSliderValue(){
        return this.propsContext.states.PenProps.lineWidth;
    }

    getSwatchColor(){
        return this.propsContext.states.PenProps.color;
    }
}

export default PenPropertiesViewModel;
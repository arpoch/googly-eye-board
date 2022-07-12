
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
        if(this.propsContext.states.PenProps.color===""){
            return  localStorage.getItem("mode")==="black"?"#ffffff":"#000000";
        }else {
            return  this.propsContext.states.PenProps.color;
        }
    }
}

export default PenPropertiesViewModel;
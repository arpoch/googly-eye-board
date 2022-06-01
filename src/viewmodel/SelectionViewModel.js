
class SelectionViewModel{

    context = null;
    canvasViewModel = null;

    constructor(context,canvasViewModel) {
        this.context = context;
        this.canvasViewModel = canvasViewModel;
    }

    handleIconClick(){
       this.context.handleSelection();
    }

    getIconClick(){
      return this.context.states.Select.isSelected;
    }

}

export default SelectionViewModel;
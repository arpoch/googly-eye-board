
class GooglyEyeViewModel {

    static sidebarContext = null;
    static context = null;
    static canvasViewModel = null;
    static eyeBallTarget = null;
    googleEye = null;
    eyeBall = null;
    irs = null;
    isEyeContainerPressed = false;
    borderProps={
        northBorder:{
            isPressed: false,
        },
        southBorder:{
            isPressed: false,
        },
    };
    types={
        NORTH:"NORTH_BORDER",
        SOUTH:"SOUTH_BORDER",
    }

    constructor(sidebarContext,googleEyeContext,canvasViewModel) {
        GooglyEyeViewModel.sidebarContext = sidebarContext;
        GooglyEyeViewModel.context = googleEyeContext;
        GooglyEyeViewModel.canvasViewModel = canvasViewModel;
    }

    handleIconClick(){
        this.addGoogleEye();
    }

    getIconClick(){
        return GooglyEyeViewModel.context.states.IsClicked.click;
    }

    //Eye Events
    setEyeContainerBorders(e){
        if(GooglyEyeViewModel.eyeBallTarget!==null && GooglyEyeViewModel.eyeBallTarget!==e) {
            GooglyEyeViewModel.eyeBallTarget.querySelector(".top-border").style.display = "none";
            GooglyEyeViewModel.eyeBallTarget.querySelector(".bottom-border").style.display = "none";
            GooglyEyeViewModel.eyeBallTarget.querySelector(".right-border").style.display = "none";
            GooglyEyeViewModel.eyeBallTarget.querySelector(".left-border").style.display = "none";
        }
        GooglyEyeViewModel.eyeBallTarget = e;
        e.querySelector(".top-border").style.display = "block";
        e.querySelector(".bottom-border").style.display = "block";
        e.querySelector(".right-border").style.display = "block";
        e.querySelector(".left-border").style.display = "block";
    }

    hideEyeContainerBorders() {
        if(GooglyEyeViewModel.eyeBallTarget!==null && !GooglyEyeViewModel.sidebarContext.states.Select.isSelected) {
            GooglyEyeViewModel.eyeBallTarget.querySelector(".top-border").style.display = "none";
            GooglyEyeViewModel.eyeBallTarget.querySelector(".bottom-border").style.display = "none";
            GooglyEyeViewModel.eyeBallTarget.querySelector(".right-border").style.display = "none";
            GooglyEyeViewModel.eyeBallTarget.querySelector(".left-border").style.display = "none";
        }
    }
    selectEyeball(e){
        if(GooglyEyeViewModel.sidebarContext.states.Select.isSelected) {
            const target = e.currentTarget;
            this.setEyeContainerBorders(target);
            // target.style.cursor = "move";
            this.isEyeContainerPressed=true;
        }
    }
    dragEyeball(e){
        if(this.isEyeContainerPressed && GooglyEyeViewModel.sidebarContext.states.Select.isSelected) {
            const target = e.currentTarget;
            target.style.top = e.clientY + "px";
            target.style.left = e.clientX + "px";
        }
    }
    dropEyeball(e){
        if(GooglyEyeViewModel.sidebarContext.states.Select.isSelected) {
            const target = e.currentTarget;
            target.style.border = "";
            // target.style.cursor = "default";
            this.isEyeContainerPressed=false;
        }
    }

    //Border Events
    moveUp(target,e){
        // console.log(target);/
        if(e.clientY<target.y){
            target.target.closest(".eye-container").style.height=e.clientY+"px";
        }
    }

    nsBorderMouseDown(con,et){}


    nsBorderMouseUp(e){}

    addGoogleEye(){
        console.log("Adding..")

        //Main-container
        this.googleEye = document.createElement('div');
        this.googleEye.className = "eye-container";
        this.googleEye.onmousemove = (e)=>{
            this.dragEyeball(e);
        };
        this.googleEye.onmousedown = (e)=>{
            this.selectEyeball(e)
        };
        this.googleEye.onmouseup = (e)=>{
            this.dropEyeball(e);
        };

        //Borders
        const topBorder = document.createElement("div");
        topBorder.className="top-border";
        // topBorder.onmousedown = (e)=> this.nsBorderMouseDown(this,e);
        // topBorder.onmouseup = (e)=> this.nsBorderMouseUp(e);

        this.googleEye.appendChild(topBorder);
        const leftBorder =  document.createElement("div");
        leftBorder.className="left-border";
        this.googleEye.appendChild(leftBorder);
        const rightBorder = document.createElement("div");
        rightBorder.className="right-border";
        this.googleEye.appendChild(rightBorder);

        //Eye
        this.eyeBall = document.createElement('div');
        this.eyeBall.className = "Eye-ball";
        this.googleEye.appendChild(this.eyeBall);
        //Irs
        this.irs = document.createElement('div');
        this.irs.className = "Irs";
        this.irs.style.left = "50%";
        this.irs.style.right = "50%";
        this.eyeBall.appendChild(this.irs);

        //Border
        const bottomBorder = document.createElement("div");
        bottomBorder.className="bottom-border";
        this.googleEye.appendChild(bottomBorder);

        //Canvas
        const canvas = document.getElementsByClassName("canvas")[0];
        canvas.after(this.googleEye);
    }

    getWindowMidX(){
        return window.innerWidth/2;
    }

    getWindowMidY(){
        return window.innerHeight/2;
    }

    checkValue(value){
        if (value < 20) {
            return 20 + "%";
        } else if (value > 80) {
            return 80 + "%";
        } else {
            return value;
        }
    }

    getX(clientX,EyeX) {
        if(EyeX<this.getWindowMidX()) {
            let value = (clientX*100/window.innerWidth)+(50-EyeX*100/window.innerWidth);
            return this.checkValue(value)+"%";
        }else if(EyeX>this.getWindowMidX()){
            let value = (clientX*100/window.innerWidth)-(EyeX*100/window.innerWidth-50);
            return this.checkValue(value)+"%";
        }else{
            return this.checkValue(clientX * 100 / window.innerWidth)+"%";
        }
    }

    getY(clientY,EyeY) {
        if(EyeY<this.getWindowMidY()) {
            let value = (clientY*100/window.innerHeight)+(50-EyeY*100/window.innerHeight);
            return this.checkValue(value)+"%";
        }else if(EyeY>this.getWindowMidY()){
            let value = (clientY*100/window.innerHeight)-(EyeY*100/window.innerHeight-50);
            return this.checkValue(value)+"%";
        }else{
            return this.checkValue(clientY * 100 / window.innerHeight)+"%";
        }
    }

    static setMousePosition(clientX,clientY){
        GooglyEyeViewModel.context.handleMousePosition({x:clientX, y:clientY });
    }

    setIrsPosition(x,y) {
        const eyeCon = document.getElementsByClassName("eye-container");
        const irsList = document.getElementsByClassName("Irs");
        for(let index = 0;index<irsList.length;index++){
            irsList[index].style.top = this.getY(y,parseInt(eyeCon[index].style.top));
            irsList[index].style.left = this.getX(x,parseInt(eyeCon[index].style.left));
        }
    }
}

export default GooglyEyeViewModel;
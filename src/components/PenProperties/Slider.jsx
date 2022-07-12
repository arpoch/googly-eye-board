import {useCallback} from "react";


function Slider({penPropertiesViewModel}){

    const dotCanvas = useCallback((current)=>{
        if(current==null) return;
        const width = current.width;
        const height = current.height;
        const canvas = current.getContext("2d");
        const lineWidth = penPropertiesViewModel.getSliderValue();
        canvas.clearRect(0,0,
            width,
            height);
        canvas.beginPath();
        canvas.arc(
            width/2,
            height/2,
            lineWidth,0,2*Math.PI,true);
        canvas.fillStyle = penPropertiesViewModel.getSwatchColor();
        canvas.fill();
    },[penPropertiesViewModel]);

    function handleSlider(e){
        penPropertiesViewModel.handleSlider(e.target.value);
    }

    return(
        <>
            <div className={'dot-slider-container'}>
                <div className={"dot-container"}>
                    <canvas width={55} height={45} className={'dot-canvas'} ref={dotCanvas}/>
                </div>
                <div className={"slider-container"}>
                    <input
                        type={"range"}
                        onChange={handleSlider}
                        min={1}
                        max={20}
                        value={penPropertiesViewModel.getSliderValue()}
                        className={"slider"}/>
                </div>
                <p className={"text"}>Thickness</p>
            </div>
        </>
    )
}

export default Slider;
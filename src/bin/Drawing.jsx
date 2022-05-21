import React, { useEffect, useRef, useState } from "react";
import "./Drawing.css"
function Drawing({imageUrl}) {

    const canvasRef = useRef(null);
    const canvasContext = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    //PEN component
    // useEffect(() => {
    //     const canvas = canvasRef.current;
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerHeight;
    //     const context = canvas.getContext('2d');
    //     context.strokeStyle = 'black';
    //     context.lineWidth = 0.7;
    //     context.lineCap = 'round';
    //     canvasContext.current = context;
    // }, [])

    //TODO: useCallback here
    // useEffect(() => {
    //     console.log(imageUrl);
    //     changeBackground(canvasContext.current,imageUrl);
    // }, [imageUrl]);


    // useEffect(()=>{
    //     const canvas = canvasRef.current;
    //     canvas.width = window.innerWidth;
    //     canvas.height = window.innerHeight;
    //     const context = canvas.getContext('2d');
    //     context.strokeStyle = 'black';
    //     context.lineWidth = 3;
    //     context.lineCap = 'round';
    //     context.drawImage(image,0,0,1920,800);
    //     console.log(image)
    //     canvasContext.current = context;
    // },image.onload);

    // function changeBackground(canvas,image){
    //     if (!image.complete) {
    //         image.onload = () => {
    //             canvas.current.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
    //         }
    //     } else {
    //         canvas.current.drawImage(image, 0, 0, window.innerWidth, window.innerHeight);
    //     }
    // }

    function startDrawing({nativeEvent}) {
        canvasContext.current.beginPath();
        canvasContext.current.moveTo(nativeEvent.offsetX, nativeEvent.offsetY);
        setIsDrawing(true);
    }

    function handleDraw({nativeEvent}) {
        if (!isDrawing) {
            return;
        }
        canvasContext.current.lineTo(nativeEvent.offsetX, nativeEvent.offsetY);
        canvasContext.current.stroke();
    }

    function stopDrawing() {
        canvasContext.current.closePath();
        setIsDrawing(false);
    }

    return (
        <>
            <canvas id="board"
                ref={canvasRef}
                onMouseMove={handleDraw}
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
            >
            </canvas>
        </>
    );
}

export default Drawing;

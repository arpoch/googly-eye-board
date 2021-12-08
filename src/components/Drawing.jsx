import React, { useEffect, useRef, useState } from "react";
import "./Drawing.css"
function Drawing() {

    const canvasRef = useRef(null);
    const canvasContext = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        const context = canvas.getContext('2d');
        context.strokeStyle = 'black';
        context.lineWidth = 3;
        context.lineCap = 'round';
        canvasContext.current = context;
    }, [])

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

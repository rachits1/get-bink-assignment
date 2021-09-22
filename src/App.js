import React, {useState,useEffect,useRef} from 'react';

function App() {
    const canvasRef = useRef(null);
    const ctx = useRef(null);
    const [isDrawing, setIsDrawing] = useState(false);

    useEffect(()=>{
        console.log(canvasRef.current)
        canvasRef.current.width = window.innerWidth;
        ctx.current = canvasRef.current.getContext('2d');
        console.log(ctx.current)
    },[])


    function startDrawing(){
        setIsDrawing(true)
    }

    function stopDrawing(){
        setIsDrawing(false)
        ctx.current.beginPath()
    }

    function draw(e){
        const {clientX, clientY} = e;
        if(!isDrawing) return;
        ctx.current.strokeStyle = "black";
        ctx.current.lineWidth = 5;
        ctx.current.lineCap = "round";
        ctx.current.lineTo(clientX,clientY)
        ctx.current.stroke()
        ctx.current.beginPath()
        ctx.current.moveTo(clientX,clientY)
    }

    function clearDrawing(){
        ctx.current.clearRect(0,0,ctx.current.canvas.width,ctx.current.canvas.height)
    }

    return (
        <div className="app">
            <canvas
                ref={canvasRef} 
                height={600}
                onMouseDown={startDrawing}
                onMouseUp={stopDrawing}
                onMouseMove={draw}
                style={{border: "2px solid black"}}
            />
            <button className="btn" onClick={clearDrawing}>Clear</button>
        </div>
    )
}

export default App;

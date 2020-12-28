import React, { useEffect, useRef } from "react";
import './AnimationHeader.css'
function AnimationHeader() {
     
    const canvasRef=useRef(null);
    
    // Similaire à componentDidMount et componentDidUpdate : 
      useEffect(() => {
        const canvas=canvasRef.current;
        canvas.width=(window.innerWidth);
        canvas.height=(window.innerHeight);
        const ctx=canvas.getContext("2d");
        const hypoténuse=Math.sqrt(Math.pow(canvas.width,2)+Math.pow(canvas.height,2));
        let frequence=0.01;
        
        function animate(){
            
            requestAnimationFrame(animate);
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.beginPath();
            ctx.beginPath();
            ctx.moveTo(canvas.width,0);
            ctx.fillStyle='midnightblue';
           
            for(let i=0; i<hypoténuse; i+=1){
                let Vwidth=canvas.width/hypoténuse;
                let Vheight=canvas.height/hypoténuse;
                ctx.fillRect(canvas.width-Vwidth*(i),
                            Vheight*(i)+Math.sin(i*0.01+frequence)*10,
                            2,
                            canvas.height+100);
            }
            frequence-=0.01;
        }

        animate();

    }, []);
   
   
    return (
        <>
            <hr/>
            <canvas
            id="header"
            ref={canvasRef}
            >
            </canvas>
        </>
    )
    
}

export default AnimationHeader;
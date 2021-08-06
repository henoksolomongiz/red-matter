import React, { useEffect, useRef } from 'react';

import { useAppSelector } from '../../app/hooks';
import { getRectangle } from './panelSlice';





const Canvas = () => {
  const rectangles = useAppSelector(getRectangle);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  let isDown: boolean = false;
  let dragTarget: any = null;
  let startX: any = null;
  let startY: any = null;

  useEffect(() => {
    draw();
  }, [rectangles])

  const draw = () => {
    if (!canvasRef.current) {
      return;
    }
    const canvas: HTMLCanvasElement = canvasRef.current;
    const context = canvas.getContext('2d');
    if (context) {
      rectangles.map(rec => {
        context.fillRect(rec.x, rec.y, rec.width, rec.height);
        context.strokeStyle = rec.color;
        context.lineJoin = 'round';
        context.lineWidth = 2;
        context.font = "30px Arial";
        context.fillText(rec.color, rec.x, rec.y);
      });


    }
  }


  // identify the click event in the rectangle
  const hitBox = (x: number, y: number) => {
    let isTarget = null;
    for (let i = 0; i < rectangles.length; i++) {
      const box = rectangles[i];
      if (x >= box.x && x <= box.x + box.width && y >= box.y && y <= box.y + box.height) {
        dragTarget = box;
        isTarget = true;
        break;
      }
    }
    return isTarget;
  }

  const handleMouseDown = (e: any) => {
 
  }
  const handleMouseMove = (e: any) => {
    if (!isDown) return;

   
    draw();
  }
  const handleMouseUp = (e: any) => {
    dragTarget = null;
    isDown = false;
  }
  const handleMouseOut = (e: any) => {
    handleMouseUp(e);
  }
  return <canvas ref={canvasRef} height={400} width={400} onMouseDown={handleMouseDown}
    onMouseMove={handleMouseMove}
    onMouseUp={handleMouseUp}
    onMouseOut={handleMouseOut} />;
};



export default Canvas;
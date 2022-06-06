import React from "react";
import { useSelector } from "react-redux";
import styles from "./CarImage.module.scss";
import CarPart from "./CarPart/CarPart";
export default function CarImage() {
    const parts = useSelector(state => state.parts.data)
    const defaultView = {x0: 0, y0: 0, x1: 989.12, y1: 1386.36}
    const [currentView, setCurrentView] = React.useState(
      {x0: 0, y0: 0, x1: 989.12, y1: 1386.36}
    )
    const [mousePos, setMousePos] = React.useState({
      x: 0,
      y: 0,
    });
    const [zoom, setZoom] = React.useState(1);
    const [pointed, setPointed] = React.useState(false);
    const edges = {
      x: defaultView.x1 - currentView.x1,
      y: defaultView.y1 - currentView.y1,
    };

    const handleZoomIn = () => {
      if (zoom >= 2) return
      setCurrentView(curr => {
        return {...curr, 
          x0: curr.x0 * 1.2,
          y0: curr.y0 * 1.2,
          x1: curr.x1 / 1.2,
          y1: curr.y1 / 1.2
        }
      })
      setZoom(curr => curr + 0.2);
    }
    const handleZoomOut = () => {
      if (zoom <= 1) return
      setCurrentView(curr => {
        return {...curr, 
          x1: curr.x1 * 1.2,
          y1: curr.y1 * 1.2,
          x0: curr.x0 / 1.2,
          y0: curr.y0 / 1.2,
        }
      })
      setZoom(curr => curr - 0.2)
    }

    const handleTouchStart = (x, y) => {
      setPointed(true);
      setMousePos({x: x, y: y})
    }
    const handleMove = (x,y) => {
      if (!pointed) return;
      const diffX = mousePos.x - x
      const diffY = mousePos.y - y
      const newPos = {
        x: currentView.x0 + diffX,
        y: currentView.y0 + diffY
      }
      setCurrentView(curr => {
        return {...curr, 
          x0: newPos.x < 0 ? 0 : (newPos.x > edges.x ? edges.x : newPos.x),
          y0: newPos.y < 0 ? 0 : (newPos.y > edges.y ? edges.y : newPos.y)
        }
      })
      setMousePos({x: x, y: y})
    }
    const handleTouchEnd = () => {
      setPointed(false);
    }
  return (
    <div className={styles.image_container}>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox={Object.values(currentView).join(' ')} 
          onTouchMove={e => handleMove(e.touches[0].clientX, e.touches[0].clientY)} 
          onTouchStart={e => handleTouchStart(e.touches[0].clientX, e.touches[0].clientY)}
          onPointerMove={e => handleMove(e.clientX, e.clientY)}
          onPointerDown={(e) => handleTouchStart(e.clientX, e.clientY)}
          onTouchEnd={handleTouchEnd}
          onPointerUp={handleTouchEnd}
          onMouseLeave={handleTouchEnd}
        >
            {parts.map(part => <CarPart key={part.id} part={part} />)}
        </svg>
        <div className={styles.zoom_buttons}>
          <button onClick={handleZoomIn}>+</button>
          <button onClick={handleZoomOut}>-</button>
        </div>
    </div>
  );
}

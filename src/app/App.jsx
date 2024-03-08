import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { COLORS, PIXEL_SIZE, REFRESH_RATE, useInterval } from "../utils";
import { PaintBar } from "../components/PaintBar";
import { ActivePixel } from "../components/ActivePixel";
import { Canvas } from "../components/Canvas";

export function App() {
  const ref = useRef(null);
  const [activePixel, setActivePixel] = useState(null);
  const [activeColor, setActiveColor] = useState(COLORS[0]);
  const [isDebounced, setIsDebounced] = useState(false);
  const [delay, setDelay] = useState(REFRESH_RATE);
  
  async function paint() {
    if (!ref.current) {
      return;
    }
    if (isDebounced) {
      setIsDebounced(false);
      setDelay(1600);
      return;
    }
    setDelay(REFRESH_RATE);
    const ctx = ref.current.getContext("2d");
    const response = await fetch("/api/refresh");
    const result = await response.json();
    for (const { x, y, value } of result) {
      ctx.fillStyle = value;
      ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, 1 * PIXEL_SIZE, 1 * PIXEL_SIZE);
    }
  }
  useEffect(() => {
    paint();
  }, []);
  useEffect(() => {
    setActivePixel(null);
  }, [activeColor]);
  useInterval(() => {
    paint();
  }, delay);

  return (
    <div>
      <Canvas
        ref={ref}
        onUpdate={(x, y) => {
          setActivePixel({ x, y });
          const ctx = ref.current.getContext("2d");
          ctx.fillStyle = activeColor;
          ctx.fillRect(x * PIXEL_SIZE, y * PIXEL_SIZE, 1 * PIXEL_SIZE, 1 * PIXEL_SIZE);

          setIsDebounced(true);
          fetch("/api/click", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ x, y, value: activeColor }),
          });
        }}
      />
      <ActivePixel activePixel={activePixel} activeColor={activeColor} />
      <PaintBar activeColor={activeColor} setActiveColor={setActiveColor} />
    </div>
  );
}

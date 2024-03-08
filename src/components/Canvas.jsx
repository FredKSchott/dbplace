import { forwardRef } from "react";
import { GRID_HEIGHT, GRID_WIDTH, PIXEL_SIZE } from "../utils";

export const Canvas = forwardRef(({ onUpdate }, ref) => {
  return (
    <canvas
      height={GRID_HEIGHT * PIXEL_SIZE}
      width={GRID_WIDTH * PIXEL_SIZE}
      ref={ref}
      style={{ marginBottom: 64 }}
      onClick={(e) => {
        const x = Math.floor(e.pageX / PIXEL_SIZE);
        const y = Math.floor(e.pageY / PIXEL_SIZE);
        onUpdate(x, y);
      }}
    ></canvas>
  );
});

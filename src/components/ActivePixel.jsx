import { PIXEL_SIZE } from "../utils";

export function ActivePixel({ activePixel, activeColor }) {
  if (!activePixel) {
    return null;
  }
  return (
    <div
      style={{
        position: "absolute",
        top: activePixel.y * PIXEL_SIZE,
        left: activePixel.x * PIXEL_SIZE,
        height: PIXEL_SIZE,
        width: PIXEL_SIZE,
        background: activeColor,
      }}
    />
  );
}

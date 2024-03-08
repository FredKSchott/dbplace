import { COLORS } from "../utils";

function PaintSelector({ color, onClick, isActive }) {
  return (
    <button
      style={{
        height: 50,
        width: 50,
        background: color,
        border: "none",
        outline: "none",
        cursor: "pointer",
        opacity: isActive ? 1 : 0.5,
        margin: 4,
      }}
      onClick={() => onClick()}
    />
  );
}

export function PaintBar({activeColor, setActiveColor}) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: 64,
        background: "white",
        borderTop: "7px solid #333",
        display: "flex",
        gap: 4,
        alignItems: "center",
      }}
    >
      {COLORS.map((color) => (
        <PaintSelector
          key={color}
          color={color}
          isActive={color === activeColor}
          onClick={() => {
            setActiveColor(color);
          }}
        />
      ))}
    </div>
  );
}

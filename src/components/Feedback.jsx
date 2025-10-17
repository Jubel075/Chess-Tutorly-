import React from "react";

export default function Feedback({ type, message, visible }) {
  if (!visible) return null;

  let backgroundColor = "#27ae60";
  if (type === "error") backgroundColor = "#e74c3c";
  if (type === "hint") backgroundColor = "#f39c12";

  return (
    <div
      style={{
        position: "fixed",
        bottom: "1rem",
        right: "1rem",
        padding: "1rem",
        backgroundColor,
        color: "white",
        borderRadius: "5px",
        boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
        animation: "fade-in 0.5s",
      }}
      role="alert"
    >
      {message}
    </div>
  );
}

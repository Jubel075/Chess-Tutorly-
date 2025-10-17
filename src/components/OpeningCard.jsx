import React from "react";

export default function OpeningCard({ opening, progress, onClick }) {
  return (
    <div
      className="opening-card"
      onClick={() => onClick(opening.id)}
      style={{
        cursor: "pointer",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "1rem",
        margin: "0.5rem",
        backgroundColor: "#fff",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
      tabIndex={0}
      role="button"
      onKeyDown={(e) => {
        if (e.key === "Enter") onClick(opening.id);
      }}
    >
      <h2>{opening.name}</h2>
      <p>
        Difficulty: <strong>{opening.difficulty}</strong>
      </p>
      <p>Progress: {progress ? `${progress}%` : "0%"}</p>
    </div>
  );
}

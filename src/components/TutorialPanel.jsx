import React from "react";

export default function TutorialPanel({
  currentMove,
  totalMoves,
  explanation,
  onNext,
  onPrevious,
}) {
  return (
    <div style={{ marginTop: "1rem" }}>
      <p>
        Move {currentMove} of {totalMoves}
      </p>
      <p>{explanation}</p>
      <button onClick={onPrevious} disabled={currentMove <= 1}>
        Previous Move
      </button>
      <button onClick={onNext} disabled={currentMove >= totalMoves}>
        Next Move
      </button>
    </div>
  );
}

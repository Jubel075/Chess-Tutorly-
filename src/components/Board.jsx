import React, { useState, useEffect } from "react";
import { PIECE_UNICODE } from "../utils/chessUtils";

const files = ["a", "b", "c", "d", "e", "f", "g", "h"];

export default function Board({ position, onMove, highlightSquares = [], orientation = "white" }) {
  // position: 2D array 8x8 with piece notation or null
  // onMove: callback(from, to)
  // highlightSquares: array of board squares like 'e4'
  // orientation: 'white' or 'black'

  const [selected, setSelected] = useState(null);
  const [dragging, setDragging] = useState(null);
  const [legalMoves, setLegalMoves] = useState([]);

  // Helper: convert index to board square notation
  const indexToSquare = (row, col) => {
    const file = orientation === "white" ? files[col] : files[7 - col];
    const rank = orientation === "white" ? 8 - row : row + 1;
    return file + rank;
  };

  // Helper: convert square notation to row col
  const squareToIndex = (sq) => {
    const file = sq.charCodeAt(0) - "a".charCodeAt(0);
    const rank = 8 - parseInt(sq[1], 10);
    return [rank, file];
  };

  // Handle click on square
  const handleSquareClick = (row, col) => {
    const square = indexToSquare(row, col);
    if (selected) {
      if (legalMoves.includes(square)) {
        onMove(selected, square);
        setSelected(null);
        setLegalMoves([]);
      } else {
        setSelected(square);
        // Calculate legal moves for selected square (if needed)
      }
    } else {
      setSelected(square);
      // Calculate legal moves for selected square
    }
  };

  // Alternate square colors
  const isLightSquare = (row, col) => {
    return (row + col) % 2 === 0;
  };

  // Render board squares
  const squares = [];
  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const sq = indexToSquare(row, col);
      const piece = position[row][col];
      const lightSquare = isLightSquare(row, col);
      const highlightSelected = selected === sq ? "highlight-selected" : "";
      const highlightLegal = highlightSquares.includes(sq) ? "highlight-legal" : "";
      const className = `square ${lightSquare ? "light" : "dark"} ${highlightSelected} ${highlightLegal}`;
      squares.push(
        <div
          key={sq}
          className={className}
          onClick={() => handleSquareClick(row, col)}
          role="button"
          aria-label={sq}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSquareClick(row, col);
          }}
        >
          {piece ? PIECE_UNICODE[piece] : ""}
        </div>
      );
    }
  }

  return <div className="chess-board">{squares}</div>;
}

// Basic Unicode pieces by notation
export const PIECE_UNICODE = {
  p: "♟",
  r: "♜",
  n: "♞",
  b: "♝",
  q: "♛",
  k: "♚",
  P: "♙",
  R: "♖",
  N: "♘",
  B: "♗",
  Q: "♕",
  K: "♔",
};

// Initialize starting chessboard position as 2D array
export function initializeBoard() {
  return [
    ["r", "n", "b", "q", "k", "b", "n", "r"],
    ["p", "p", "p", "p", "p", "p", "p", "p"],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    [null, null, null, null, null, null, null, null],
    ["P", "P", "P", "P", "P", "P", "P", "P"],
    ["R", "N", "B", "Q", "K", "B", "N", "R"],
  ];
}

// Placeholder move validator and applier for algebraic notation move string e.g. "e2e4"
export function makeMoveFromAlgebraic(position, move) {
  // Parse move like "e2e4"
  const fromFile = move.charCodeAt(0) - "a".charCodeAt(0);
  const fromRank = 8 - parseInt(move[1], 10);
  const toFile = move.charCodeAt(2) - "a".charCodeAt(0);
  const toRank = 8 - parseInt(move[3], 10);

  // Create new copied position array
  const newPos = position.map((row) => row.slice());
  // Move piece
  newPos[toRank][toFile] = newPos[fromRank][fromFile];
  newPos[fromRank][fromFile] = null;

  return newPos;
}

import { describe, it, expect } from "vitest";
import { initializeBoard, makeMoveFromAlgebraic } from "../src/utils/chessUtils.js";

describe("Chess Utils", () => {
  it("should initialize starting position", () => {
    const board = initializeBoard();
    expect(board[0][4]).toBe("k");
    expect(board[7][4]).toBe("K");
  });

  it("should move pawn e2 to e4 correctly", () => {
    let board = initializeBoard();
    const newBoard = makeMoveFromAlgebraic(board, "e2e4");
    expect(newBoard[6][4]).toBe(null);
    expect(newBoard[4][4]).toBe("P");
  });
});

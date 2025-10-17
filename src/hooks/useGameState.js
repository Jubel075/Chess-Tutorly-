import { useReducer, useEffect } from "react";
import { loadProgress, saveProgress } from "../utils/storage";
import { initializeBoard, makeMoveFromAlgebraic } from "../utils/chessUtils";

const initialState = {
  position: initializeBoard(), // 8x8 array with pieces
  moveHistory: [],
  currentMoveIndex: 0,
  selectedOpening: null,
  tutorialStep: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_OPENING":
      return {
        ...state,
        selectedOpening: action.opening,
        position: initializeBoard(),
        moveHistory: [],
        currentMoveIndex: 0,
        tutorialStep: 0,
      };
    case "MAKE_MOVE":
      const newPos = makeMoveFromAlgebraic(state.position, action.move);
      return {
        ...state,
        position: newPos,
        moveHistory: [...state.moveHistory, action.move],
        currentMoveIndex: state.currentMoveIndex + 1,
        tutorialStep: state.tutorialStep + 1,
      };
    case "RESET":
      return { ...initialState };
    case "SET_TUTORIAL_STEP":
      return { ...state, tutorialStep: action.step };
    default:
      return state;
  }
}

export default function useGameState() {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    const saved = loadProgress();
    return saved || init;
  });

  useEffect(() => {
    saveProgress(state);
  }, [state]);

  return [state, dispatch];
}

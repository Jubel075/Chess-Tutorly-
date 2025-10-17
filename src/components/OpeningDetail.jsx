import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Chess } from "chess.js";
import { Chessboard } from "react-chessboard";
import openings from "../data/openings";

export default function OpeningDetail() {
  const { id } = useParams();
  const opening = openings.find((o) => o.id === id);
  const [currentMoveIndex, setCurrentMoveIndex] = useState(0);
  const [game, setGame] = useState(new Chess());
  const [position, setPosition] = useState("start");
  const [showQuiz, setShowQuiz] = useState(false);
  const [quizAnswer, setQuizAnswer] = useState(null);
  const [showTips, setShowTips] = useState(false);
  const [autoPlay, setAutoPlay] = useState(false);
  const [boardOrientation, setBoardOrientation] = useState("white");

  useEffect(() => {
    const newGame = new Chess();
    for (let i = 0; i < currentMoveIndex; i++) {
      newGame.move(opening.moves[i]);
    }
    setGame(newGame);
    setPosition(newGame.fen());
  }, [currentMoveIndex, opening]);

  useEffect(() => {
    let interval;
    if (autoPlay && currentMoveIndex < opening.moves.length) {
      interval = setInterval(() => {
        nextMove();
      }, 1500);
    }
    return () => clearInterval(interval);
  }, [autoPlay, currentMoveIndex]);

  if (!opening) {
    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Opening not found</h2>
        <Link to="/" style={{ color: "#667eea" }}>← Back to Openings</Link>
      </div>
    );
  }

  const nextMove = () => {
    if (currentMoveIndex < opening.moves.length) {
      setCurrentMoveIndex(currentMoveIndex + 1);
    } else {
      setAutoPlay(false);
    }
  };

  const prevMove = () => {
    if (currentMoveIndex > 0) {
      setCurrentMoveIndex(currentMoveIndex - 1);
    }
  };

  const reset = () => {
    setCurrentMoveIndex(0);
    setAutoPlay(false);
  };

  const progress = (currentMoveIndex / opening.moves.length) * 100;

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "#4CAF50";
      case "Intermediate": return "#FF9800";
      case "Advanced": return "#F44336";
      default: return "#666";
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1600px", margin: "0 auto" }}>
      {/* Navigation */}
      <Link
        to="/"
        style={{
          color: "#667eea",
          textDecoration: "none",
          marginBottom: "1rem",
          display: "inline-flex",
          alignItems: "center",
          gap: "0.5rem",
          fontSize: "1rem",
          fontWeight: "500"
        }}
      >
        ← Back to Openings
      </Link>

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "2rem",
        borderRadius: "16px",
        color: "white",
        marginTop: "1rem",
        marginBottom: "2rem"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h1 style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>{opening.name}</h1>
            <p style={{ fontSize: "1.1rem", opacity: 0.9, marginBottom: "1rem" }}>
              {opening.description}
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <span style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                fontSize: "0.9rem"
              }}>
                📚 {opening.category}
              </span>
              <span style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                fontSize: "0.9rem"
              }}>
                🎯 {opening.difficulty}
              </span>
              <span style={{
                backgroundColor: "rgba(255,255,255,0.2)",
                padding: "0.5rem 1rem",
                borderRadius: "20px",
                fontSize: "0.9rem"
              }}>
                🔥 {opening.popularity}% Popular
              </span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div style={{ marginTop: "1.5rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
            <span style={{ fontSize: "0.9rem", opacity: 0.9 }}>Your Progress</span>
            <span style={{ fontSize: "0.9rem", fontWeight: "bold" }}>
              {currentMoveIndex} / {opening.moves.length} moves
            </span>
          </div>
          <div style={{
            backgroundColor: "rgba(255,255,255,0.2)",
            borderRadius: "10px",
            height: "10px",
            overflow: "hidden"
          }}>
            <div style={{
              backgroundColor: "#4CAF50",
              height: "100%",
              width: `${progress}%`,
              borderRadius: "10px",
              transition: "width 0.3s"
            }} />
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "minmax(400px, 600px) 1fr",
        gap: "2rem",
        alignItems: "start"
      }}>
        {/* Left Column - Chessboard */}
        <div>
          <div style={{
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)"
          }}>
            <div style={{ marginBottom: "1rem", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <h3 style={{ margin: 0 }}>Board Position</h3>
              <button
                onClick={() => setBoardOrientation(boardOrientation === "white" ? "black" : "white")}
                style={{
                  padding: "0.5rem 1rem",
                  backgroundColor: "#f5f5f5",
                  border: "none",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "0.9rem"
                }}
              >
                🔄 Flip Board
              </button>
            </div>
            <Chessboard
              position={position}
              boardWidth={Math.min(window.innerWidth - 100, 550)}
              arePiecesDraggable={false}
              boardOrientation={boardOrientation}
              customBoardStyle={{
                borderRadius: "8px",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
              }}
            />

            {/* Playback Controls */}
            <div style={{ marginTop: "1.5rem" }}>
              <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
                <button
                  onClick={() => setCurrentMoveIndex(0)}
                  disabled={currentMoveIndex === 0}
                  style={{
                    flex: 1,
                    padding: "0.75rem",
                    backgroundColor: currentMoveIndex === 0 ? "#e0e0e0" : "#f5f5f5",
                    color: "#333",
                    border: "none",
                    borderRadius: "8px",
                    cursor: currentMoveIndex === 0 ? "not-allowed" : "pointer",
                    fontSize: "0.9rem",
                    fontWeight: "500"
                  }}
                >
                  ⏮ Start
                </button>
                <button
                  onClick={prevMove}
                  disabled={currentMoveIndex === 0}
                  style={{
                    flex: 1,
                    padding: "0.75rem",
                    backgroundColor: currentMoveIndex === 0 ? "#e0e0e0" : "#667eea",
                    color: currentMoveIndex === 0 ? "#999" : "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: currentMoveIndex === 0 ? "not-allowed" : "pointer",
                    fontSize: "0.9rem",
                    fontWeight: "600"
                  }}
                >
                  ← Previous
                </button>
                <button
                  onClick={() => setAutoPlay(!autoPlay)}
                  style={{
                    flex: 1,
                    padding: "0.75rem",
                    backgroundColor: autoPlay ? "#F44336" : "#4CAF50",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    fontWeight: "600"
                  }}
                >
                  {autoPlay ? "⏸ Pause" : "▶ Auto Play"}
                </button>
                <button
                  onClick={nextMove}
                  disabled={currentMoveIndex === opening.moves.length}
                  style={{
                    flex: 1,
                    padding: "0.75rem",
                    backgroundColor: currentMoveIndex === opening.moves.length ? "#e0e0e0" : "#667eea",
                    color: currentMoveIndex === opening.moves.length ? "#999" : "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: currentMoveIndex === opening.moves.length ? "not-allowed" : "pointer",
                    fontSize: "0.9rem",
                    fontWeight: "600"
                  }}
                >
                  Next →
                </button>
                <button
                  onClick={reset}
                  style={{
                    flex: 1,
                    padding: "0.75rem",
                    backgroundColor: "#FF9800",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    cursor: "pointer",
                    fontSize: "0.9rem",
                    fontWeight: "600"
                  }}
                >
                  🔄 Reset
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Information */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {/* Current Move Explanation */}
          <div style={{
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)"
          }}>
            <h3 style={{ marginTop: 0, display: "flex", alignItems: "center", gap: "0.5rem" }}>
              📖 Current Move
            </h3>
            {currentMoveIndex === 0 ? (
              <div>
                <p style={{ fontSize: "1.1rem", color: "#333", fontWeight: "500" }}>
                  Starting Position
                </p>
                <p style={{ color: "#666", marginTop: "0.5rem" }}>
                  Click "Next" or "Auto Play" to begin learning this opening move by move.
                </p>
              </div>
            ) : (
              <div>
                <div style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "#667eea",
                  marginBottom: "1rem",
                  fontFamily: "monospace"
                }}>
                  {Math.ceil(currentMoveIndex / 2)}. {opening.moves[currentMoveIndex - 1]}
                </div>
                <p style={{ color: "#333", lineHeight: "1.7", fontSize: "1.05rem" }}>
                  {opening.explanation[currentMoveIndex - 1]}
                </p>
              </div>
            )}
          </div>

          {/* Move Sequence */}
          <div style={{
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)"
          }}>
            <h3 style={{ marginTop: 0, display: "flex", alignItems: "center", gap: "0.5rem" }}>
              📝 Move Sequence
            </h3>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(80px, 1fr))",
              gap: "0.5rem",
              marginTop: "1rem"
            }}>
              {opening.moves.map((move, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentMoveIndex(index + 1)}
                  style={{
                    padding: "0.75rem",
                    backgroundColor: index < currentMoveIndex ? "#667eea" : "#f5f5f5",
                    color: index < currentMoveIndex ? "white" : "#333",
                    borderRadius: "8px",
                    textAlign: "center",
                    cursor: "pointer",
                    fontWeight: index === currentMoveIndex - 1 ? "bold" : "normal",
                    border: index === currentMoveIndex - 1 ? "2px solid #FF9800" : "2px solid transparent",
                    transition: "all 0.2s",
                    fontFamily: "monospace"
                  }}
                  onMouseOver={(e) => {
                    if (index >= currentMoveIndex) {
                      e.target.style.backgroundColor = "#e8e8e8";
                    }
                  }}
                  onMouseOut={(e) => {
                    if (index >= currentMoveIndex) {
                      e.target.style.backgroundColor = "#f5f5f5";
                    }
                  }}
                >
                  {Math.ceil((index + 1) / 2)}. {move}
                </div>
              ))}
            </div>
          </div>

          {/* Tips Section */}
          <div style={{
            backgroundColor: "white",
            padding: "1.5rem",
            borderRadius: "12px",
            boxShadow: "0 4px 16px rgba(0,0,0,0.1)"
          }}>
            <div
              onClick={() => setShowTips(!showTips)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: "pointer"
              }}
            >
              <h3 style={{ margin: 0, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                💡 Key Tips & Strategies
              </h3>
              <span style={{ fontSize: "1.5rem" }}>{showTips ? "−" : "+"}</span>
            </div>
            {showTips && (
              <ul style={{ marginTop: "1rem", paddingLeft: "1.5rem", lineHeight: "1.8" }}>
                {opening.tips.map((tip, index) => (
                  <li key={index} style={{ color: "#666", marginBottom: "0.5rem" }}>
                    {tip}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Famous Games */}
          <div style={{
            backgroundColor: "#f8f9ff",
            padding: "1.5rem",
            borderRadius: "12px",
            border: "1px solid #e0e0e0"
          }}>
            <h3 style={{ marginTop: 0, display: "flex", alignItems: "center", gap: "0.5rem" }}>
              🏆 Famous Games
            </h3>
            {opening.famousGames.map((game, index) => (
              <div key={index} style={{ marginBottom: "0.5rem" }}>
                <strong>{game.player}</strong> ({game.year}) - {game.result}
              </div>
            ))}
          </div>

          {/* Quiz Section */}
          {opening.quiz && (
            <div style={{
              backgroundColor: "white",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 4px 16px rgba(0,0,0,0.1)"
            }}>
              <div
                onClick={() => setShowQuiz(!showQuiz)}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  cursor: "pointer"
                }}
              >
                <h3 style={{ margin: 0, display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  🧠 Test Your Knowledge
                </h3>
                <span style={{ fontSize: "1.5rem" }}>{showQuiz ? "−" : "+"}</span>
              </div>
              {showQuiz && opening.quiz.map((q, qIndex) => (
                <div key={qIndex} style={{ marginTop: "1rem" }}>
                  <p style={{ fontWeight: "600", marginBottom: "1rem", color: "#333" }}>
                    {q.question}
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                    {q.options.map((option, oIndex) => (
                      <button
                        key={oIndex}
                        onClick={() => setQuizAnswer(oIndex)}
                        style={{
                          padding: "0.75rem 1rem",
                          textAlign: "left",
                          backgroundColor: quizAnswer === null ? "#f5f5f5" : 
                            oIndex === q.correct ? "#4CAF50" :
                            quizAnswer === oIndex ? "#F44336" : "#f5f5f5",
                          color: quizAnswer !== null && (oIndex === q.correct || quizAnswer === oIndex) ? "white" : "#333",
                          border: "none",
                          borderRadius: "8px",
                          cursor: quizAnswer === null ? "pointer" : "default",
                          transition: "all 0.2s"
                        }}
                        disabled={quizAnswer !== null}
                      >
                        {option}
                        {quizAnswer !== null && oIndex === q.correct && " ✓"}
                        {quizAnswer === oIndex && oIndex !== q.correct && " ✗"}
                      </button>
                    ))}
                  </div>
                  {quizAnswer !== null && (
                    <button
                      onClick={() => setQuizAnswer(null)}
                      style={{
                        marginTop: "1rem",
                        padding: "0.5rem 1rem",
                        backgroundColor: "#667eea",
                        color: "white",
                        border: "none",
                        borderRadius: "6px",
                        cursor: "pointer"
                      }}
                    >
                      Try Again
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

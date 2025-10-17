import React, { useState } from "react";
import { Link } from "react-router-dom";
import openings from "../data/openings";

export default function OpeningSelector() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredOpenings = openings.filter((opening) => {
    const matchesFilter = filter === "all" || opening.category === filter;
    const matchesSearch = opening.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Beginner": return "#4CAF50";
      case "Intermediate": return "#FF9800";
      case "Advanced": return "#F44336";
      default: return "#666";
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "1400px", margin: "0 auto" }}>
      {/* Hero Section */}
      <div style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        padding: "3rem 2rem",
        borderRadius: "16px",
        color: "white",
        marginBottom: "2rem",
        boxShadow: "0 8px 32px rgba(0,0,0,0.1)"
      }}>
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", fontWeight: "700" }}>
          Master Chess Openings
        </h2>
        <p style={{ fontSize: "1.2rem", opacity: 0.9, maxWidth: "700px" }}>
          Learn proven opening strategies used by grandmasters. Interactive lessons with move-by-move explanations.
        </p>
        <div style={{ marginTop: "1.5rem", display: "flex", gap: "2rem", flexWrap: "wrap" }}>
          <div>
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>{openings.length}</div>
            <div style={{ opacity: 0.8 }}>Openings Available</div>
          </div>
          <div>
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>100+</div>
            <div style={{ opacity: 0.8 }}>Practice Moves</div>
          </div>
          <div>
            <div style={{ fontSize: "2rem", fontWeight: "bold" }}>⭐️</div>
            <div style={{ opacity: 0.8 }}>Interactive Learning</div>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div style={{
        display: "flex",
        gap: "1rem",
        marginBottom: "2rem",
        flexWrap: "wrap",
        alignItems: "center"
      }}>
        <input
          type="text"
          placeholder="🔍 Search openings..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            flex: 1,
            minWidth: "250px",
            padding: "0.75rem 1rem",
            fontSize: "1rem",
            border: "2px solid #e0e0e0",
            borderRadius: "8px",
            outline: "none",
            transition: "border 0.3s"
          }}
          onFocus={(e) => e.target.style.borderColor = "#667eea"}
          onBlur={(e) => e.target.style.borderColor = "#e0e0e0"}
        />
        
        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
          {["all", "King's Pawn", "Queen's Pawn"].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              style={{
                padding: "0.75rem 1.5rem",
                backgroundColor: filter === category ? "#667eea" : "#f5f5f5",
                color: filter === category ? "white" : "#333",
                border: "none",
                borderRadius: "8px",
                cursor: "pointer",
                fontWeight: "500",
                transition: "all 0.3s",
                textTransform: "capitalize"
              }}
              onMouseOver={(e) => {
                if (filter !== category) {
                  e.target.style.backgroundColor = "#e8e8e8";
                }
              }}
              onMouseOut={(e) => {
                if (filter !== category) {
                  e.target.style.backgroundColor = "#f5f5f5";
                }
              }}
            >
              {category === "all" ? "All Openings" : category}
            </button>
          ))}
        </div>
      </div>

      {/* Opening Cards Grid */}
      <div style={{ 
        display: "grid", 
        gridTemplateColumns: "repeat(auto-fill, minmax(350px, 1fr))",
        gap: "1.5rem"
      }}>
        {filteredOpenings.map((opening) => (
          <Link
            key={opening.id}
            to={`/opening/${opening.id}`}
            style={{
              textDecoration: "none",
              border: "1px solid #e0e0e0",
              borderRadius: "12px",
              padding: "0",
              backgroundColor: "white",
              transition: "all 0.3s ease",
              cursor: "pointer",
              overflow: "hidden",
              boxShadow: "0 2px 8px rgba(0,0,0,0.05)"
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.15)";
              e.currentTarget.style.borderColor = "#667eea";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.05)";
              e.currentTarget.style.borderColor = "#e0e0e0";
            }}
          >
            {/* Card Header */}
            <div style={{
              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
              padding: "1.5rem",
              color: "white"
            }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "start", marginBottom: "0.5rem" }}>
                <h3 style={{ fontSize: "1.4rem", fontWeight: "600", margin: 0 }}>
                  {opening.name}
                </h3>
                <span style={{
                  backgroundColor: "rgba(255,255,255,0.2)",
                  padding: "0.25rem 0.75rem",
                  borderRadius: "12px",
                  fontSize: "0.85rem",
                  fontWeight: "500"
                }}>
                  {opening.category}
                </span>
              </div>
            </div>

            {/* Card Body */}
            <div style={{ padding: "1.5rem" }}>
              <p style={{ color: "#666", fontSize: "0.95rem", lineHeight: "1.6", marginBottom: "1rem" }}>
                {opening.description}
              </p>

              {/* Stats Row */}
              <div style={{
                display: "flex",
                gap: "1rem",
                marginBottom: "1rem",
                paddingTop: "1rem",
                borderTop: "1px solid #f0f0f0"
              }}>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.75rem", color: "#999", marginBottom: "0.25rem" }}>
                    DIFFICULTY
                  </div>
                  <div style={{
                    color: getDifficultyColor(opening.difficulty),
                    fontWeight: "600",
                    fontSize: "0.9rem"
                  }}>
                    {opening.difficulty}
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.75rem", color: "#999", marginBottom: "0.25rem" }}>
                    POPULARITY
                  </div>
                  <div style={{
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    color: "#333"
                  }}>
                    {opening.popularity}%
                  </div>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: "0.75rem", color: "#999", marginBottom: "0.25rem" }}>
                    MOVES
                  </div>
                  <div style={{
                    fontWeight: "600",
                    fontSize: "0.9rem",
                    color: "#333"
                  }}>
                    {opening.moves.length}
                  </div>
                </div>
              </div>

              {/* Progress Bar (simulated) */}
              <div style={{
                backgroundColor: "#f5f5f5",
                borderRadius: "8px",
                height: "6px",
                overflow: "hidden",
                marginBottom: "0.75rem"
              }}>
                <div style={{
                  backgroundColor: "#4CAF50",
                  height: "100%",
                  width: "0%",
                  borderRadius: "8px",
                  transition: "width 0.3s"
                }} />
              </div>

              <div style={{
                color: "#667eea",
                fontSize: "0.9rem",
                fontWeight: "600",
                display: "flex",
                alignItems: "center",
                gap: "0.5rem"
              }}>
                Start Learning →
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredOpenings.length === 0 && (
        <div style={{
          textAlign: "center",
          padding: "4rem 2rem",
          color: "#999"
        }}>
          <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
          <h3>No openings found</h3>
          <p>Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}

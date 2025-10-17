import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import OpeningSelector from "./components/OpeningSelector";
import OpeningDetail from "./components/OpeningDetail";
import "./index.css";

export default function App() {
  return (
    <div className="container">
      <header className="flex flex-center" style={{ marginBottom: "1rem" }}>
        <h1>Chess Opening Tutor</h1>
      </header>
      <Routes>
        <Route path="/" element={<OpeningSelector />} />
        <Route path="/opening/:id" element={<OpeningDetail />} />
        <Route
          path="*"
          element={
            <main>
              <p>There's nothing here!</p>
              <Link to="/">Go Home</Link>
            </main>
          }
        />
      </Routes>
    </div>
  );
}

// Optional if using BrowserRouter in main.jsx and Routes in App.jsx
// Can be used to organize route definitions if project grows.

import React from "react";
import { Routes, Route } from "react-router-dom";
import OpeningSelector from "./components/OpeningSelector";
import OpeningDetail from "./components/OpeningDetail";

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<OpeningSelector />} />
      <Route path="/opening/:id" element={<OpeningDetail />} />
    </Routes>
  );
}

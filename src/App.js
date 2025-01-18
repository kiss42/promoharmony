import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArtistPage from "./pages/ArtistPage";

const App = () => {
  return (
    <Routes>
      {/* Home Route */}
      <Route path="/" element={<HomePage />} />

      {/* Dynamic Artist Route */}
      <Route path="/artist/:artistId" element={<ArtistPage />} />

      {/* Redirect unmatched paths to the homepage */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default App;

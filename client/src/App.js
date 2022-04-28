import React from "react";
import { Routes, Route } from "react-router-dom";

import PhonesList from "./pages/PhonesList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PhonesList />} />
        <Route path="/:id" element={<PhonesList />} />
      </Routes>
    </div>
  );
}

export default App;

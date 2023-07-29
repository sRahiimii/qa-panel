import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionsList from "./containers/QuestionsList";

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuestionsList />} />
      </Routes>
    </Router>
  );
}

export default AppRouter;

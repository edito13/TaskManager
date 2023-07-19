import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";

const nada = true;

const Routers = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/tasks" element={nada ? <Navigate to={"/"} /> : <Tasks />} />
      <Route path="*" element={<h1>Not Found</h1>} />
    </Routes>
  </Router>
);

export default Routers;

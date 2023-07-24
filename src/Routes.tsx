import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./pages/Home";
import Tasks from "./pages/Tasks";
import { useAuth } from "./contexts/auth";

const Routers = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/tasks"
          element={!isAuthenticated ? <Navigate to={"/"} /> : <Tasks />}
        />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
};

export default Routers;

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddNote from "./pages/AddNote";

const App = () => {
  return (
    <Router>
      <nav>
        <Link to="/"> Home</Link> | <Link to="/add"> Add</Link>
      </nav>
      <hr />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddNote />} />
      </Routes>
    </Router>
  );
};

export default App;

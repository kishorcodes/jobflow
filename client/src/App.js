import "./App.css";
import SearchResults from "./pages/SearchResults";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import PostJob from "./pages/PostJob";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/blog" element={<SearchResults />}></Route>
        <Route exact path="/postjob" element={<PostJob />}></Route>

      </Routes>
    </Router>
  );
}

export default App;

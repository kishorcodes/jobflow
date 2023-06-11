import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import PostJob from "./pages/PostJob";
import SearchResults from "./pages/SearchResults";
import Signup from "./pages/Signup";
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/search/:query" element={<SearchResults />}></Route>
        <Route exact path="/postjob" element={<PostJob />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route exact path="/signup" element={<Signup />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

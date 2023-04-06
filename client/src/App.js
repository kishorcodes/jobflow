import logo from "./logoo.svg";
import "./App.css";
import NavBar from "./components/Navbar";
import Landing from "./components/Landing";
import Search from "./components/Search";
import NewJobs from "./components/NewJobs";
import TabsExample from "./components/Filter";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Landing> </Landing>
      {/* <Search></Search> */}
      <TabsExample></TabsExample>
      <NewJobs></NewJobs>
    </div>
  );
}

export default App;

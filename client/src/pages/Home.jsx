import NewJobs from "../components/NewJobs";
import TabsExample from "../components/Filter";
import NavBar from "../components/Navbar";
import Landing from "../components/Landing";

const Home = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Landing> </Landing>
      <TabsExample></TabsExample>
      <NewJobs></NewJobs>
    </div>
  );
};

export default Home;

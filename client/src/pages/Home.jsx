import FilterJobs from "../components/FilterJobs";
import Landing from "../components/Landing";
import NavBar from "../components/Navbar";
import NewJobs from "../components/NewJobs";

const Home = () => {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Landing> </Landing>
      <FilterJobs></FilterJobs>
      <NewJobs></NewJobs>
    </div>
  );
};

export default Home;

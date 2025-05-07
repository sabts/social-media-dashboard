import AllFollowers from "./components/all-followers/AllFollowers";
import OverviewBoxes from "./components/overview-boxes/OverviewBoxes";

const App = () => {
  return (
    <>
    <header className="header-div">
      <h1>Social Media Dashboard</h1>
      <p className="totalfollowerstext">Total Followers: 23,004</p>
    </header>
    <AllFollowers></AllFollowers>
   <OverviewBoxes></OverviewBoxes>
    </>
  );
};

export default App;

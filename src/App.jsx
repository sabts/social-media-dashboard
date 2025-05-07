import AllFollowers from "./components/all-followers/AllFollowers";
import AllOverviews from "./components/all-overviews/AllOverviews";

const App = () => {
  return (
    <>
    <header className="header-div">
      <h1>Social Media Dashboard</h1>
      <p className="totalfollowerstext">Total Followers: 23,004</p>
    </header>
    <AllFollowers></AllFollowers>
    <h2>Overview - Today</h2>
    <AllOverviews></AllOverviews>
    </>
  );
};

export default App;

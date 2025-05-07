import AllFollowers from "./components/all-followers/AllFollowers";

const App = () => {
  return (
    <>
    <header className="header-div">
      <h1>Social Media Dashboard</h1>
      <p className="totalfollowerstext">Total Followers: 23,004</p>
    </header>
    <AllFollowers></AllFollowers>
    </>
  );
};

export default App;


import { v4 } from "uuid";
import TotalFollowers from "../total-followers/TotalFollowers";
import { TOTAL_FOLLOWERS } from "../total-followers/total_followers";

const AllFollowers = () => {
  return (
    <div>
      {TOTAL_FOLLOWERS.map((socialacount) => (
        <TotalFollowers key={v4} {...socialacount} />
      ))}
    </div>
  );
};

export default AllFollowers;
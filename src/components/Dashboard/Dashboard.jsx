import { TierCard } from "../TierCard/TierCard";
import { UserCard } from "../UserCard/UserCard";
import "./Dashboard.css";

export const Dashboard = () => {
  return (
    <div id="top-background-image">
      <div className="container">
        <div className="row">
          <div className="col-4 text-light border border-primary">
            <UserCard></UserCard>
          </div>
          <div className="col-8 text-light border border-primary">
            <div>
              <h1>My CMX Rewards</h1>
            </div>
            <TierCard></TierCard>
          </div>
        </div>
      </div>
    </div>
  );
};

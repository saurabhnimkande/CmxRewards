import { TierCard } from "../TierCard/TierCard";
import { UserCard } from "../UserCard/UserCard";
import "./Dashboard.css";

export const Dashboard = () => {
  return (
    <div id="top-background-image">
      <div className="container">
        <div className="row" id="top-row-height">
          <div className="col-4 text-light">
            <UserCard></UserCard>
          </div>
          <div className="col-8 text-light">
            <div id="cmx-rewards-title">
              <h1>My CMX Rewards</h1>
            </div>
            <TierCard></TierCard>
            <div className="mt-5">
              <h2>Food and Beverage Purchase</h2>
              <h6>
                Do 4 more Food & Beverage purchases to reach Platinum tier.
              </h6>
            </div>
            <div>
              <div>
                <input type="range" id="slider" min="1" max="8" />
              </div>
              <div id="slider-details">
                <div>0</div>
                <div>No of Tickets</div>
                <div>7</div>
              </div>
            </div>
            <p>
              You have secured <span className="gold">GOLD</span> until Dec
              31st, 2023
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

import "./TierCard.css";
export const TierCard = () => {
  return (
    <div id="tier-card-div">
      <div id="tier-card-text-top">
        <div className="text-start">
          <p className="m-0">Current Tier</p>
          <h1 className="m-0 fs-2 gold">GOLD</h1>
        </div>
        <div className="text-end">
          <p className="m-0">Loyalty Number</p>
          <h1 className="m-0 fs-4 mt-2">25050407656799</h1>
        </div>
      </div>
      <div>
        <div>
          <span className="material-symbols-outlined check-circle">
            check_circle
          </span>
          <strong>
            Only two more Food & Beverage purchases to become Platinum
          </strong>
        </div>
        <div>
          <span className="material-symbols-outlined check-circle">
            check_circle
          </span>
          <strong>Buy 2 more tickets to get your next free ticket</strong>
        </div>
        <div>
          <span className="material-symbols-outlined check-circle">
            check_circle
          </span>
          <strong>
            Earn 220 more Food & Beverage points to receive you next reward
          </strong>
        </div>
      </div>
      <div id="tier-card-rewards-div">
        <div id="cmx-rewards-div">
          <div id="cmx-rewards-div-content">CMX REWARDS OR CODE</div>
        </div>
        <div>VIEW YOUR UNCLAIMED REWARDS</div>
      </div>
    </div>
  );
};

import "./Chart.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Chart = () => {
  return (
    <div id="chart-main-div">
      <div></div>
      <div>
        <CircularProgressbarWithChildren
          background={true}
          value={66}
          styles={buildStyles({
            // Colors
            pathColor: `rgba(139, 0, 0, ${100 / 100})`,
            textColor: "#f88",
            trailColor: "#d6d6d6",
            backgroundColor: "white",
          })}
        >
          <h1 className="chart-child-heading">
            <strong>07</strong>
          </h1>
          <p className="chart-child-text">TICKETS PURCHASED</p>
          <p className="chart-child-text">OUT OF 27</p>
        </CircularProgressbarWithChildren>
        <div className="chart-text-label">
          <p>Buy 2 more tickets, to get</p>
          <p>your next free ticket</p>
        </div>
      </div>
      <div>
        <CircularProgressbarWithChildren
          background={true}
          value={100}
          styles={buildStyles({
            // Colors
            pathColor: `rgba(139, 0, 0, ${100 / 100})`,
            textColor: "#f88",
            trailColor: "#d6d6d6",
            backgroundColor: "white",
          })}
        >
          <h1 className="chart-child-heading">
            <strong>500</strong>
          </h1>
          <p className="chart-child-text">FOOD & BEVERAGE</p>
          <p className="chart-child-text">POINTS OUT OF 500</p>
        </CircularProgressbarWithChildren>
        <div className="chart-text-label">
          <button>REDEEM NOW</button>
        </div>
      </div>
      <div>
        <p>1. All free tickets expire 60 days after issuance.</p>
        <p>2. Excludes alcohol. Vouchers expire 60 days after issuance.</p>
        <p>3. Convenience fee & upgrade fees apply. Excludes holidays.</p>
        <p>
          4. Every 500 points can be redeemed for free tickets or for free food
          & beverage vouchers.
        </p>
      </div>
    </div>
  );
};

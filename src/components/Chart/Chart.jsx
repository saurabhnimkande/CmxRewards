import "./Chart.css";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

export const Chart = () => {
  const percentage = 66;
  return (
    <div id="chart-main-div">
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
          <h1 style={{ color: "black" }}>
            <strong>07</strong>
          </h1>
          <p style={{ color: "black" }}>TICKETS PURCHASED</p>
          <p style={{ color: "black" }}>OUT OF 27</p>
        </CircularProgressbarWithChildren>
        <p>Buy 2 more tickets, to get</p>
        <p>your next free ticket</p>
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
          <h1 style={{ color: "black" }}>
            <strong>500</strong>
          </h1>
          <p style={{ color: "black" }}>FOOD & BEVERAGE</p>
          <p style={{ color: "black" }}>POINTS OUT OF 500</p>
        </CircularProgressbarWithChildren>
        <button>REDEEM NOW</button>
      </div>
    </div>
  );
};

import "./App.css";
import { Chart } from "./components/Chart/Chart";
import { Dashboard } from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div className="App">
      <Dashboard></Dashboard>
      <Chart></Chart>
    </div>
  );
}

export default App;

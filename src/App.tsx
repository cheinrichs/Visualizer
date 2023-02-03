import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import networkgraph from "highcharts/modules/networkgraph";

if (typeof Highcharts === "object") {
  networkgraph(Highcharts);
}

const options = {
  series: [
    {
      marker: { radius: 13 },
      nodes: [
        { marker: { radius: 70 }, id: "./App.tsx" },
        { marker: { radius: 50 }, id: "./index.tsx" },
        { marker: { radius: 10 }, id: "react-dom/client" },
        { marker: { radius: 10 }, id: "@testing-library/react" },
        { marker: { radius: 10 }, id: "./logo.svg" },
        { marker: { radius: 10 }, id: "highcharts-react-official" },
        { marker: { radius: 10 }, id: "highcharts/modules/networkgraph" },
        { marker: { radius: 10 }, id: "./App.css" },
        { marker: { radius: 10 }, id: "react" },
        { marker: { radius: 10 }, id: "./reportWebVitals" },
        { marker: { radius: 50 }, id: "./App.test.tsx" },
        { marker: { radius: 10 }, id: "./index.css" },
        { marker: { radius: 10 }, id: "./App" },
        { marker: { radius: 10 }, id: "highcharts" },
      ],
      data: [
        ["./index.tsx", "react"],
        ["./index.tsx", "react-dom/client"],
        ["./index.tsx", "./index.css"],
        ["./index.tsx", "./App"],
        ["./index.tsx", "./reportWebVitals"],
        ["./App.tsx", "react"],
        ["./App.tsx", "./logo.svg"],
        ["./App.tsx", "./App.css"],
        ["./App.tsx", "highcharts"],
        ["./App.tsx", "highcharts-react-official"],
        ["./App.tsx", "highcharts/modules/networkgraph"],
        ["./App.test.tsx", "react"],
        ["./App.test.tsx", "@testing-library/react"],
        ["./App.test.tsx", "./App"],
      ],
      dataLabels: {
        allowOverlap: "true",
        style: { textOutline: "false" },
        linkFormat: "",
        enabled: "true",
      },
    },
  ],
  chart: { type: "networkgraph" },
  title: { text: "File Size and Connection Chart" },
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </header>
    </div>
  );
}

export default App;

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import networkgraph from "highcharts/modules/networkgraph";

if (typeof Highcharts === "object") {
  networkgraph(Highcharts);
}

var dirDist50 = "#E8544E",
  dirDist10 = "#FFD265",
  dirDistLess10 = "#2AA775";

const options = {
  chart: {
    type: "networkgraph",
  },
  title: {
    text: "Super Chart",
  },
  series: [
    {
      marker: {
        radius: 13,
      },
      dataLabels: {
        enabled: true,
        linkFormat: "",
        allowOverlap: true,
        style: {
          textOutline: false,
        },
      },
      data: [
        ["Seoul ICN", "Daegu"],
        ["Seoul ICN", "Busan"],
        ["Busan", "Seoul GMP"],
        ["Busan", "Yangyang"],

        ["Daegu", "Seoul GMP"],
        ["Daegu", "Jeju"],

        ["Seoul GMP", "Gwangju"],
        ["Seoul GMP", "Yeosu"],
        ["Seoul GMP", "Sacheon"],
        ["Seoul GMP", "Ulsan"],
        ["Seoul GMP", "Pohang"],

        ["Jeju", "Gwangju"],
        ["Jeju", "Gunsan"],
        ["Jeju", "Wonju"],
        ["Jeju", "Yangyang"],
        ["Jeju", "Daegu"],
        ["Jeju", "Yeosu"],
        ["Jeju", "Sacheon"],
        ["Jeju", "Ulsan"],
        ["Jeju", "Busan"],
        ["Jeju", "Cheongju"],
      ],
      nodes: [
        {
          id: "Seoul ICN",
          marker: {
            radius: 30,
          },
          color: dirDist50,
        },
        {
          id: "Daegu",
          marker: {
            radius: 10,
          },
          color: dirDistLess10,
        },
        {
          id: "Busan",
          marker: {
            radius: 30,
          },
          color: dirDist50,
        },
        {
          id: "Seoul GMP",
          marker: {
            radius: 20,
          },
          color: dirDist10,
        },
        {
          id: "Jeju",
          marker: {
            radius: 30,
          },
          color: dirDist50,
        },
        {
          id: "Gwangju",
          marker: {
            radius: 10,
          },
          color: dirDistLess10,
        },
        {
          id: "Yeosu",
          marker: {
            radius: 10,
          },
          color: dirDistLess10,
        },
        {
          id: "Sacheon",
          marker: {
            radius: 10,
          },
          color: dirDistLess10,
        },
        {
          id: "Ulsan",
          marker: {
            radius: 10,
          },
          color: dirDistLess10,
        },
        {
          id: "Pohang",
          marker: {
            radius: 20,
          },
          color: dirDist10,
        },
        {
          id: "Gunsan",
          marker: {
            radius: 10,
          },
          color: dirDistLess10,
        },
        {
          id: "Wonju",
          marker: {
            radius: 10,
          },
          color: dirDistLess10,
        },
        {
          id: "Yangyang",
          marker: {
            radius: 10,
          },
          color: dirDistLess10,
        },
        {
          id: "Cheongju",
          marker: {
            radius: 20,
          },
          color: dirDist10,
        },
      ],
    },
  ],
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

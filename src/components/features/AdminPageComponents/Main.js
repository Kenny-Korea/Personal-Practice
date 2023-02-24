import React from "react";
import Chart from "../Chart";
import DoughnutChart from "../DoughnutChart";
import QuickView from "./QuickView";
import SalesView from "./SalesView";

const Main = () => {
  return (
    <>
      <hr />
      <h3>DashBoard</h3>
      <hr />
      <Chart />
      <DoughnutChart />
      <QuickView />
      <SalesView />
    </>
  );
};

export default Main;

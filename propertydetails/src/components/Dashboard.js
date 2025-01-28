import React from "react";
import { useAppContext } from "../context/AppContext";

const Dashboard = () => {
  const { state } = useAppContext();

  const countByStatus = (status) =>
    state.agreements.filter((agreement) => agreement.agreementStatus === status).length;

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>
      <div className="stats">
        <div className="stat-card">
          <h2>Total Properties</h2>
          <p>{state.properties.length}</p>
        </div>
        <div className="stat-card">
          <h2>Total Tenants</h2>
          <p>{state.tenants.length}</p>
        </div>
        <div className="stat-card">
          <h2>Total Agreements</h2>
          <p>{state.agreements.length}</p>
        </div>
        <div className="stat-card">
          <h2>Drafted Agreements</h2>
          <p>{countByStatus("Drafted")}</p>
        </div>
        <div className="stat-card">
          <h2>Completed Agreements</h2>
          <p>{countByStatus("Completed")}</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

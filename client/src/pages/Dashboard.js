import React from 'react';
// components
import Container from "../components/Container/Container";
import DashboardDetails from "../components/DashboardDetails/DashboardDetails";

function Dashboard() {
  return (
    <Container className="dashboardContainer">
      <h1>Hello USERNAME</h1>
      <DashboardDetails />
    </Container>
  )
}

export default Dashboard;

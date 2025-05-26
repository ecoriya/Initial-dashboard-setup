import React from 'react';

const DashboardCard = ({ icon, title, value }) => {
  return (
    <div className="dashboard-card">
      <div className="dashboard-card-icon">{icon}</div>
      <div className="dashboard-card-content">
        <div className="dashboard-card-title">{title}</div>
        <div className="dashboard-card-value">{value}</div>
      </div>
    </div>
  );
};

export default DashboardCard;

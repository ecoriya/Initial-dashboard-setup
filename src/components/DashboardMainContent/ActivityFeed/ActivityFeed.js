import React from "react";
import { CalendarDays } from "lucide-react"; 
import "./ActivityFeed.css";

const ActivityFeed = () => {
  return (
    <section className="activity-feed">
      <div className="activity-header">
        <div className="activity-title">
          <CalendarDays className="activity-icon" />
          <h3>Activity</h3>
        </div>
        <p>3 appointments on this week</p>
      </div>
      <div className="activity-grid">
        <div className="activity-bar-chart">
          <div className="bar" style={{ height: "40%" }}><span>Mon</span></div>
          <div className="bar" style={{ height: "60%" }}><span>Tue</span></div>
          <div className="bar" style={{ height: "20%" }}><span>Wed</span></div>
          <div className="bar" style={{ height: "80%" }}><span>Thu</span></div>
          <div className="bar" style={{ height: "40%" }}><span>Fri</span></div>
          <div className="bar" style={{ height: "20%" }}><span>Sat</span></div>
          <div className="bar" style={{ height: "10%" }}><span>Sun</span></div>
        </div>
      </div>
    </section>
  );
};

export default ActivityFeed;

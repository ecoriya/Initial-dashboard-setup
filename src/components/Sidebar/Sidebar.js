
import React from "react";
import "./Sidebar.css";
import {
  Home,
  History,
  Calendar,
  CalendarCheck,
  BarChart,
  TestTube,
  MessageCircle,
  HelpCircle,
  Settings,
} from "lucide-react";

const iconMap = {
  Home,
  History,
  Calendar,
  CalendarCheck,
  BarChart,
  TestTube,
  MessageCircle,
  HelpCircle,
  Settings,
};

const navLinks = [
  { name: "Dashboard", icon: "Home" },
  { name: "History", icon: "History" },
  { name: "Calendar", icon: "Calendar" },
  { name: "Appointments", icon: "CalendarCheck" },
  { name: "Statistics", icon: "BarChart" },
  { name: "Tests", icon: "TestTube" },
  { name: "Chat", icon: "MessageCircle" },
  { name: "Support", icon: "HelpCircle" },
  { name: "Settings", icon: "Settings" },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="logo-container">
        <h2 className="logo-text">
          <span style={{ color: "#00C6AD" }}>Health</span>
          <span style={{ color: "#4A4A4A" }}>care.</span>
        </h2>
      </div>

      <h4 className="sidebar-section-title">General</h4>

      <ul className="nav-list">
        {navLinks.map(({ name, icon }) => {
          const IconComponent = iconMap[icon];
          return (
            <li key={name} className="nav-item">
              {IconComponent && <IconComponent size={20} className="nav-icon" />}
              <span className="nav-label">{name}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;

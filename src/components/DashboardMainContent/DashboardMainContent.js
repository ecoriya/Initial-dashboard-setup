import DashboardOverview from "./DashboardOverview/DashboardOverview";
import AnatomySection from "./AnatomySection/AnatomySection";
import HealthStatusCards from "./HealthStatusCards/HealthStatusCards";
import CalendarView from "./CalendarView/CalendarView";
import UpcomingSchedule from "./UpcomingSchedule/UpcomingSchedule";
import ActivityFeed from "./ActivityFeed/ActivityFeed";
import "./DashboardMainContent.css";

const DashboardMainContent = () => {
  return (
    <main className="dashboard-main-content">
      <div className="top-section">
        <div className="left-top">
          <DashboardOverview />
          <div className="anatomy-health">
            <AnatomySection />
            <HealthStatusCards />
          </div>
          <ActivityFeed />
        </div>

       
        <div className="right-top">
  <div className="calendar-scroll-wrapper">
    <CalendarView />
  </div>
  <UpcomingSchedule />
</div>

</div>
    </main>
  );
};

export default DashboardMainContent;
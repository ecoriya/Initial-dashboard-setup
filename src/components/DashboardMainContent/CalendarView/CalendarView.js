import React from "react";
import "./CalenderView.css";

const appointments = {
  26: [{ time: "09:00", title: "Dentist", doctor: "Dr. Cameron Williamson", icon: "🦷" }],
  27: [{ time: "11:00", title: "Physiotherapy Appointment", doctor: "Dr. Meredith Grey", icon: "🦴" }],
};

const daysInWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const baseTimes = ["09:00", "11:00", "13:00", "15:00"];
const extraTimes = ["16:00", "17:00", "18:00"];


const extraTimeDays = [0, 3, 4, 5];

const CalendarView = () => {
  return (
    <div className="calendar-container">
      
      <section className="calendar-overview">
        <div className="top-bar">
          <h2 className="calendar-title">October 2021</h2>
          <div className="nav-icons">
            <span className="arrow" role="button" tabIndex={0} aria-label="Previous month">←</span>
            <span className="arrow" role="button" tabIndex={0} aria-label="Next month">→</span>
            <div className="user-profile" aria-label="User profile">👩‍⚕️ DR. Supriya</div>
            <button className="add-btn" aria-label="Add new appointment">+</button>
          </div>
        </div>
      </section>

     
      <div className="calendar-grid">
        {daysInWeek.map((day, i) => {
          const currentDay = 25 + i;
          const isExtraDay = extraTimeDays.includes(i);
          const allTimes = isExtraDay ? [...baseTimes, ...extraTimes] : baseTimes;

          return (
            <div key={i} className="day-column">
              <div className="day-header">
                {day}
                <br />
                {currentDay}
              </div>
              {allTimes.map((time, j) => {
                const match = appointments[currentDay]?.find(a => a.time === time);
                return (
                  <div key={j} className={`time-slot ${match ? "has-appointment" : ""}`}>
                    {match ? (
                      <div className="appointment-box">
                        <span className="icon">{match.icon}</span>
                        <div>
                          <div className="title">{match.title}</div>
                          {match.doctor && <div className="doctor">{match.doctor}</div>}
                          <div className="time">{match.time}</div>
                        </div>
                      </div>
                    ) : (
                      <span className="slot-time">{time}</span>
                    )}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>

      <div className="appointment-cards">
  <div className="appointment-card dentist">
    <div className="card-icon">🦷</div>
    <div className="card-details">
      <h4>Dentist</h4>
      <p>Dr. Cameron Williamson</p>
      <p>26th Oct, 09:00 AM</p>
    </div>
  </div>

  <div className="appointment-card">
    <div className="card-icon">🦴</div>
    <div className="card-details">
      <h4>Physiotherapy Appointment</h4>
      <p>Dr. Meredith Grey</p>
      <p>27th Oct, 11:00 AM</p>
    </div>
  </div>
</div>
</div>
  );
};

export default CalendarView;

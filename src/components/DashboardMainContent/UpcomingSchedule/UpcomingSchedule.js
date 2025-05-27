

import { capitalize } from "../../../utils/helpers";
import { upcomingAppointments } from "../../../data/appointments";

import SimpleAppointmentCard from "../SimpleAppointmentCard/SimpleAppointmentCard";
import "./UpcomingSchedule.css";

const UpcomingSchedule = () => {
  return (
    <section className="upcoming-schedule">
  <h3>The Upcoming Schedule</h3>

  {upcomingAppointments.length === 0 ? (
    <p className="no-appointments">No upcoming appointments</p>
  ) : (
    <div className="days-container">
      {upcomingAppointments.map((day, index) => (
        <div key={index} className="day">
          <h4>On {capitalize(day.day)}</h4>
          <div className="appointment-list">
            {day.appointments.map((appt, idx) => (
              <SimpleAppointmentCard
                key={idx}
                title={capitalize(appt.title)}
                time={appt.time}
                icon={appt.icon}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )}
</section>


  );
};

export default UpcomingSchedule;

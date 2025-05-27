import React from "react";
import bodyImg from "../../../assets/body.png"; 
import "./AnatomySection.css";


const indicators = [
  { id: 3, label: "Teeth", emoji: "🦷", status: "issue", color: "green", position: { top: "12%", left: "49%" } },
  { id: 1, label: "Healthy Heart", emoji: "❤️", status: "healthy", color: "green", position: { top: "25%", left: "75%" } },
  { id: 2, label: "Lungs", emoji: "🫁", status: "healthy", color: "red", position: { top: "33%", left: "50%" } },
  { id: 4, label: "Bone", emoji: "🦴", status: "healthy", color: "red", position: { top: "70%", left: "65%" } },
];

const AnatomySection = () => {
  return (
    <section className="anatomy-section">
      <div className="anatomy-card">
        <div className="anatomy-wrapper" style={{ position: "relative" }}>
          <img src={bodyImg} alt="Anatomy" className="anatomy-img" />
          {indicators.map(({ id, label, emoji, status, position, color }) => {
           
            const bgColor =
              color === "green"
                ? "rgba(24, 209, 24, 0.3)" 
                : color === "red"
                ? "rgba(226, 29, 29, 0.3)" 
                : "rgba(0,0,0,0.1)"; 

            return (
              <span
                key={id}
                className={`label ${status}`}
                style={{
                  position: "absolute",
                  top: position.top,
                  left: position.left,
                  backgroundColor: bgColor,
                  padding: "2px 5px",
                  borderRadius: "4px",
                  transform: "translate(-50%, -50%)",
                  whiteSpace: "nowrap",
                }}
              >
                {emoji} {label}
              </span>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnatomySection;

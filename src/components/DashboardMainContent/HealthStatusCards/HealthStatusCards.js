import lungsImg from '../../../assets/lungs1.png';
import teethImg from '../../../assets/teeth.png';
import bonesImg from '../../../assets/bones.png';


import './HealthStatusCards.css';

const mockCards = [
  { name: "Lungs", status: "Needs Attention", date: "2021-10-11", img: lungsImg },
  { name: "Teeth", status: "Healthy", date: "2021-10-10", img: teethImg },
  { name: "Bone", status: "Checkup Due", date: "2021-10-15", img: bonesImg },
];

const HealthStatusCards = () => {
  return (
    
    <div className="health-status-cards">
      {mockCards.map((card, index) => (
        <div key={index} className="card">
          <img src={card.img} alt={card.name} className="card-img" />
          <div className="card-content">
            <h3>{card.name}</h3>
            <p>Status: {card.status}</p>
            <p>Date: {card.date}</p>
          </div>
          
        </div>
        
      ))}
    </div>
  );
};

export default HealthStatusCards;

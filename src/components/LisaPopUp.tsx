import React from 'react';
import lisaImage from '/lisa.jpeg';
import './LisaPopUp.css';

interface LisaPopUpProps {
    onRestart: () => void; 
  }

const LisaPopUp: React.FC<LisaPopUpProps> = ({onRestart}) => {
  return (
    <div className="egg-popup show" >
      <img src={lisaImage} alt="Cracked Egg" className = "egg-image"/>
      <button className="restart-button" onClick={onRestart}>Restart</button>
    </div>
  );
};

export default LisaPopUp;

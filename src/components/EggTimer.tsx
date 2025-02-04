import React, { useEffect, useState } from 'react';
import { SoftBoiledEggCracking } from './EggCrackFrames';
import './EggTimer.css';

interface EggTimerProps {
  duration: number; // in seconds
  onTimerEnd: () => void;
}

const EggTimer: React.FC<EggTimerProps> = ({ duration, onTimerEnd }) => {
    const [timeLeft, setTimeLeft] = useState(duration);
    const [crackStage, setCrackStage] = useState(1);
  
    useEffect(() => {
      if(timeLeft > 0){
        const interval = setInterval(() => {
            setTimeLeft((prev) => Math.max(prev - 1, 0));
            const progress = 1 - (timeLeft / duration);
      
            if (progress >= 0.8) setCrackStage(5); // Fully cracked
            else if (progress >= 0.6) setCrackStage(4);
            else if (progress >= 0.4) setCrackStage(3);
            else if (progress >= 0.2) setCrackStage(2);
            else setCrackStage(1);
      
            if (timeLeft === 0) clearInterval(interval);
          }, 1000);
      
          return () => clearInterval(interval);
      } else{
        onTimerEnd();
      }
    }, [timeLeft, onTimerEnd]);
  
    return (
      <div className="egg-timer">
        <SoftBoiledEggCracking stage={crackStage} />
        <p className={`timer-text ${timeLeft % 2 === 0 ? 'glow' : ''}`}>
        Cracking in {timeLeft} seconds...
        </p>
      </div>
    );
  };
  

export default EggTimer;

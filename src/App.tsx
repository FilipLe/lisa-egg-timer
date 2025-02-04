import React, { useState, useRef } from 'react';
import EggSelector from './components/EggSelector';
import EggTimer from './components/EggTimer';
import LisaPopUp from './components/LisaPopUp';
import './App.css';
import alarmSound from './assets/alarm.mp3';


const eggTimes = {
  soft: 300, // 5 minutes
  medium: 420, // 7 minutes
  hard: 600, // 10 minutes
  'extra-hard': 720, // 12 minutes
};

const App: React.FC = () => {
  const [selectedEgg, setSelectedEgg] = useState<string | null>(null);
  const [showCompletePopup, setShowCompletePopup] = useState<boolean>(false);
  const [isTimerVisible, setIsTimerVisible] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handleEggSelect = (type: keyof typeof eggTimes) => {
    setSelectedEgg(type);
  };

  const handleTimerEnd = () => {
    setShowCompletePopup(true);
    setIsTimerVisible(false);
    audioRef.current = new Audio(alarmSound);
    audioRef.current.play();
  };

  const handleRestart = () => {
    setSelectedEgg(null);
    setShowCompletePopup(false);
    setIsTimerVisible(true);
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };


//   const handleTestAudio = () => {
//     const audio = new Audio(alarmSound);
//     audio.play();
// };

  return (
    <div className="App">
      {/* <button onClick={handleTestAudio}>Test Audio</button> */}
      {selectedEgg ? (
        <>
          {isTimerVisible && (
            <EggTimer 
              duration={eggTimes[selectedEgg as keyof typeof eggTimes]} 
              onTimerEnd={handleTimerEnd} 
            />
          )}
          {showCompletePopup && <LisaPopUp onRestart={handleRestart} />}
        </>
      ) : (
        <EggSelector onEggSelect={handleEggSelect}/>
      )}
    </div>
  );
};

export default App;

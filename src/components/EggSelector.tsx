import React from 'react';
import { SoftBoiledEgg, MediumBoiledEgg, HardBoiledEgg, ExtraHardBoiledEgg } from './EggSVGs';
import '../App.css';

type EggType = 'soft' | 'medium' | 'hard' | 'extra-hard';

interface EggSelectorProps {
  onEggSelect: (type: EggType) => void;
}

const EggSelector: React.FC<EggSelectorProps> = ({ onEggSelect }) => {
  return (
    <div className="egg-selector" style = {{width: '70%'}}>
      <h2>What are you making today?</h2>
      <div className="egg-options-grid">
        <div className="egg-option" onClick={() => onEggSelect('soft')}>
          <SoftBoiledEgg />
          <p>Soft Boiled</p>
        </div>
        <div className="egg-option" onClick={() => onEggSelect('medium')}>
          <MediumBoiledEgg />
          <p>Medium Boiled</p>
        </div>
        <div className="egg-option" onClick={() => onEggSelect('hard')}>
          <HardBoiledEgg />
          <p>Hard Boiled</p>
        </div>
        <div className="egg-option" onClick={() => onEggSelect('extra-hard')}>
          <ExtraHardBoiledEgg />
          <p>Extra Hard Boiled</p>
        </div>
      </div>
    </div>
  );
};

export default EggSelector;

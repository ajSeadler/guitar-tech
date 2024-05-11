import React from 'react';
import TierOne from './TierOne';
import Setup from './Setup';
import Fretwork from './Fretwork';
import Pedalboard from './Pedalboard';



const Services = () => {
  return (
    <div className='services-container-all'>
     <div className="tier" style={{marginTop:'12%'}}><TierOne /> </div> 
      <Setup />
      <Fretwork />
      <Pedalboard />
    </div>
  );
};

export default Services;

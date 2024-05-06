import React from 'react';
import TierOne from './TierOne';
import Setup from './Setup';
import Fretwork from './Fretwork';


const AllServices = () => {
  return (
    <div className='services-container-all'>
      <TierOne />
      <Setup />
      <Fretwork />
    </div>
  );
};

export default AllServices;

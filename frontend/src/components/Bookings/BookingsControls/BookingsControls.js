import React from 'react';

import './BookingsControls.css';


const bookingsControl = props => {
  return(
    <div className='bookings-control'>
      <button 
        className={props.actveOutputType === 'list' ? 'active' : ''} 
        onClick={props.onChange.bind(this, 'list')}
      >
        List
      </button>
      <button 
        className={props.actveOutputType === 'chart' ? 'active' : ''} 
        onClick={props.onChange.bind(this, 'chart')}
      >
        Chart
      </button>
    </div>
  );
};

export default bookingsControl;

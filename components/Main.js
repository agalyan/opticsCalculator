import React, { useState } from 'react';
import Radius from './Radius';
import Result from './Results';
import SelectRing from './SelectRing';

const Main = () => {
  const [radius, setRadius] = useState('');
  const [ringNumber, setRingNumber] = useState(5);

  return (
    <div className='p-3 md:p-10'>
        <SelectRing ringNumber={ringNumber} setRingNumber={setRingNumber} />
        <Radius radius={radius} setRadius={setRadius} />
        <Result ring={ringNumber} radius={radius}/>
    </div>
  )
}

export default Main;

import React, { useState } from 'react';
import Radius from './Radius';
import Result from './Results';
import MachineVersion from './MachineVersion';
import SelectRing from './SelectRing';

const Main = () => {
  const [radius, setRadius] = useState('');
  const [ringNumber, setRingNumber] = useState(5);
  const [machineVersion, setMachineVersion] = useState('new');

  return (
    <div className='p-3 md:p-10'>
        <MachineVersion version={machineVersion} setVersion={setMachineVersion} />
        <SelectRing ringNumber={ringNumber} setRingNumber={setRingNumber} />
        <Radius radius={radius} setRadius={setRadius} />
        <Result ring={ringNumber} radius={parseFloat(radius)} version={machineVersion}/>
    </div>
  )
}

export default Main;

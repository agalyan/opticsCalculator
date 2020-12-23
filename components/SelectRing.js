import React, { useState } from 'react';

const rings = [1, 2, 3, 4, 5, 6, 7];

const SelectRing = ({ ringNumber, setRingNumber }) => {

  const changeRing = e => {
    setRingNumber(e.currentTarget.value);
  };

  return (
    <div className='px-5 py-3 text-center bg-white'>
      <span className='block font-medium mb-5 text-2xl'>{`Размер кольца:`}</span>
      {rings.map(ring => <span className='inline-flex flex-col mx-2 md:mx-5 font-medium' key={ring}>
        <input className='w-7 h-7' type="radio"
          value={ring}
          checked={ringNumber == ring}
          onChange={changeRing} />
          {ring}
      </span>)}
    </div>
  )
}

export default SelectRing;

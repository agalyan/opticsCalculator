import React, { useEffect, useState } from 'react';

const rings = [1, 2, 3, 4, 5, 6, 7];

const Results = ({radius, ring}) => {

  const [result, setResult] = useState('');

  const calcResults = () => {
    setResult(radius * ring || 0);
  }

  useEffect(() => {
    calcResults();
  }, [radius, ring]);

  return (
    <div className='px-5 py-3 text-center bg-white'>
      <div className='border-b-2 font-medium my-3 pb-4 text-2xl'>{`Результаты`}</div>
      <div>
        {`2h: ${result}`}
      </div>
    </div>
  )
}

export default Results;

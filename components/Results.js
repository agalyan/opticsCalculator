import React, { useEffect, useState } from 'react';
import radiuses from '../configs/radius.json'
import ResultRow from './ResultRow';

const calcRadiusZero = (r, ro, R) => r + (ro * ro * r) / (2 * (R * R - r * r));
const calcHH = (rZero, R) => R > rZero ? R - Math.sqrt(R * R - rZero * rZero) : 0;
const calcH1 = (r, ro, R) => (R + ro) - Math.sqrt((R + ro) * (R + ro) - r * r);
const calcH2 = (r, ro, R) => (R - ro) - Math.sqrt((R - ro) * (R - ro) - r * r);

const Results = ({ radius, ring }) => {

  const [hh, setHH] = useState('');
  const [h1, setH1] = useState('');
  const [h2, setH2] = useState('');

  const calcResults = () => {
    const { r, ro } = radiuses[ring];
    console.log('r: ', r);
    console.log('ro: ', ro);

    setHH(calcHH(calcRadiusZero(r, ro, radius), radius));
    setH1(calcH1(r, ro, radius));
    setH2(calcH2(r, ro, radius));
  }

  useEffect(() => {
    calcResults();
  }, [radius, ring]);

  return (
    <div className='px-5 py-3 text-center bg-white'>
      <div className='border-b-2 font-medium my-3 pb-4 text-2xl'>{`Результаты`}</div>
      <ResultRow title='2h' value={hh || 0} />
      <ResultRow title='Выпуклое' value={h1 || 0} />
      <ResultRow title='Вогнутое' value={h2 || 0} />
    </div>
  )
}

export default Results;

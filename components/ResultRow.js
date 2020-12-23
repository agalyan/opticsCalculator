import React from 'react';

const ResultRow = ({ title, value }) => {
  return (
    <div className='border-2 flex justify-evenly m-8 p-5'>
      <span className='font-normal text-lg text-right w-1/4'>{`${title}:`}</span>
      <span className='text-xl tracking-wider font-mono w-2/3'>{value}</span>
    </div>
  )
}

export default ResultRow;

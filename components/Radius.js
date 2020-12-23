import React from 'react';

const Radius = ({radius, setRadius}) => {

  const onChangeHandler = (e) => {
    setRadius(e.target.value);
  };

  return (
    <div className='my-6 flex justify-center bg-white'>
      <span className='font-normal p-4 text-xl'>{`Радиус: `}</span>
      <input type='number'
        className='md:w-1/3 py-4 md:px-20 px-5 text-xl text-center border-2'
        placeholder={'R'}
        value={radius}
        onChange={onChangeHandler}
        // onKeyDown={onKeyDownHandler}
      />
    </div>
  )
}

export default Radius;

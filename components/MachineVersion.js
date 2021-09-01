import React from 'react';

const MACHINE_VERSIONS = [
  {value: 'new', title: 'N-59'},
  {value: 'old', title: 'N-67'},
];

const MachineVersion = ({version, setVersion}) => {

  const changeVersion = (e) => {
    setVersion(e.currentTarget.value);
  };

  return (
    <div className='px-5 py-3 text-center bg-white flex border-b'>
      <span className='font-small mb-5 text-xl '>{`Версия станка:`}</span>
      {MACHINE_VERSIONS.map(vrs => <span className='inline-flex flex-col mx-2 md:mx-5 font-medium' key={vrs.value}>
        <input className='w-7 h-7' type="radio"
          value={vrs.value}
          checked={version === vrs.value}
          onChange={changeVersion} />
          {vrs.title}
      </span>)}
    </div>
  )
}

export default MachineVersion;

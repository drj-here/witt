import React from 'react';
import teamImg from './../undraw_team_work_k-80-m.svg';

export default function Home() {
  return (
    <div className='flex flex-row m-5 p-5'>
      <div className='text-white'>
        <div className='text-4xl mb-4 mt-8 px-4 font-semibold'>witt.</div>
        <div className='text-7xl font-bold px-4'>
          your<br />
          second<br />
          brain
        </div>
        <div className='text-xl px-4 flex-wrap mt-5'>
          a personal assistant to organize, track, and document your work
        </div>
      </div>
      <div className='ml-8 invisible md:visible'>
        <img src={teamImg} alt='svg' style={{ height: '350px' }} />
      </div>
    </div>
  );
}

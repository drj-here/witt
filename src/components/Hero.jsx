import React from 'react';
import teamImg from '../undraw_team_work_k-80-m.svg';

export default function Hero() {
  return (
    <div className='flex z-10 flex-col sm:flex-row'>
      <div className='text-white text-center md:text-right'>
        <div className='text-3xl mb-4 px-4 font-semibold font-righteous'>witt.</div>
        <div className='text-7xl px-4 font-delaGothicOne'>
          your<br />
          second<br />
          brain
        </div>
        <div className='text-xl px-4 flex-wrap mt-5'>
          a personal assistant to organize, track, and document your work
        </div>
      </div>
      <div className='md:flex justify-center items-center md:flex-1'>
        <img src={teamImg} alt='svg' className='h-64 md:h-96' />
      </div>
    </div>
  );
}

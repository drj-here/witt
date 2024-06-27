import React from 'react'
import teamImg from '../undraw_team_work_k-80-m.svg'
export default function Hero() {
    return (
        <div className='flex z-10'>
            <div className='text-white text-right'>
              <div className='text-4xl mb-4 px-4 font-semibold'>witt.</div>
              <div className='text-7xl font-bold px-4'>
                your<br />
                second<br />
                brain
              </div>
              <div className='text-xl px-4 flex-wrap mt-5'>
                A personal assistant to organize, track, and document your work
              </div>
            </div>
            <div className='flex justify-center'>
              <img src={teamImg} alt='svg' className='h-3/4 invisible md:visible' />
            </div>
          </div>
      )
}

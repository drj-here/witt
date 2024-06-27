import React from 'react';
import VideoButton from '../components/VideoButton';
import Comp1 from '../components/Comp1';
import Hero from '../components/Hero';
import DownloadButton from '../components/DownloadButton';

export default function Home() {
  return (
    <div className='bg-red-500 h-5/6 w-auto rounded-xl p-6'>
      <div className='flex flex-row'>
        <Comp1 />
        <VideoButton />
      </div>
      <div className='relative'>
        <Hero />
        <div className='fixed bottom-0 left-0 ml-4'>
          <DownloadButton />
        </div>
      </div>
    </div>
  );
}

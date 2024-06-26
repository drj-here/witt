import React from 'react'

export default function VideoButton() {
  return (
    <div className="flex justify-center items-center h-12">
      <button className="relative bg-black text-white p-6 rounded-full focus:outline-none">
        <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 5V19L19 12L8 5Z" fill="currentColor"/>
          </svg>
        </div>
      </button>
    </div>
  )
}

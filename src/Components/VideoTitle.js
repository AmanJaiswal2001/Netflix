import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='pt-[25%] px-12 absolute w-screen aspect-video text-white bg-gradient-to-r from-black'>

<h1 className='text-6xl font-bold'>{title}</h1>
<p className='py-6 text-lg w-1/3'>{overview}</p>
<div className='space-x-4'>
<button className='bg-white text-black p-2 w-20 text-center shadow-2xl text-xl '>Play</button>
<button className='bg-gray-500 text-white w-28 p-2 text-center shadow-2xl'>More Info</button>
</div>

    </div>
  )
}

export default VideoTitle
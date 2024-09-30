import React, { useEffect } from 'react'
import {  useSelector } from 'react-redux'
import { useMovieVideo } from '../hooks/useMoviesVideo';

const Background = ({movieId}) => {
const trailerVide=useSelector((store)=> store.movies?.trailerVideo);


useMovieVideo(console.log(movieId));

  return (
    <div>

<iframe className='w-screen aspect-video'
src={
  "https://www.youtube.com/embed/"+trailerVide?.key+
"?autoplay=1&mute=1"
}
 title="YouTube video player" 
 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
 referrerpolicy="strict-origin-when-cross-origin" 
 allowFullScreen></iframe>

    </div>
  )
}

export default Background
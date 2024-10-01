import React from 'react'
import MovieCard from './MovieCard';

function MovieList({title,movies}) {
  return (
    <div className='p-6  text-white'>
     <h1 className='text-3xl font-bold py-6'>{title}</h1>
    <div className='flex overflow-x-scroll'>
   
    
<div className='flex '>
{movies?.map((movie)=>(
    <MovieCard key={movie.id} poster_path={movie.poster_path}/>
))}

</div>
      </div> 
    </div>
  )
}

export default MovieList
import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

function GptMovieSuggetion() {
  
  
  const gpt=useSelector(store=>store.gpt);
  const {movieResults,movieNames}=gpt;

  if(!movieNames) return null;
  
  return (
    <div className='p-4 m-4  absolute -z-10 bg-black opacity-70 text-white'>
    {movieNames.map((movieName,index)=> <MovieList 
     key={movieName} 
     title={movieNames}
      movie={movieResults[index]}/>)}
    
    </div>
  )
}

export default GptMovieSuggetion
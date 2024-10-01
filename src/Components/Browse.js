import React, { useEffect } from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import { useUpcomingMovie } from '../hooks/useUpcomingMovie';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';
const Browse = () => {
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);

    useNowPlayingMovies();
usePopularMovies();
useUpcomingMovie();
  return (
    <div>    

    <Header/>
    {showGptSearch?(<GptSearch/>):<> <MainContainer/>
      <SecondaryContainer/></>}
    
   
{/* /*
 mainContainer
 -videoBackground
 -videotitle
 secondaryContainer
 -movielist
 -card

    */ }
 </div>

  )
}

export default Browse
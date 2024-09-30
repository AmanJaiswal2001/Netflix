import React, { useEffect } from 'react'
import Header from './Header'
import { useNowPlayingMovies } from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
const Browse = () => {
    useNowPlayingMovies();

  return (
    <div>    

    <Header/>
    <MainContainer/>
    <SecondaryContainer/>
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
import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
 const movies=useSelector((store)=>store.movies)
 console.log(movies)
  return (
    <div className=' bg-black'>
<div className='-mt-40 pl-12 relative z-20'>
<MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}/>
<MovieList title={"Trending"} movies={movies.nowPlayingMovies}/>
<MovieList title={"Popular"} movies={movies.PopularMovies}/>
<MovieList title={"Horror Movie"} movies={movies.nowPlayingMovies}/>
<MovieList title={"Upcoming Movie"} movies={movies.UpcomingMovies}/>

</div>


    </div>
  )
}

export default SecondaryContainer
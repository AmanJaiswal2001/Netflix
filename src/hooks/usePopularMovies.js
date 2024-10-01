import { useDispatch, useSelector } from "react-redux"
import { API_OPTION } from "../utils/constrints"
import {  addPopularMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies=()=>{
    const dispatch=useDispatch();

    const popularMovies=useSelector(
        (store)=>store.movies.popularMovies
    )


    const getNowPopularMovie=async()=>{
    const data=await fetch(
        'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTION
    )
    const json= await data.json();
    dispatch(addPopularMovies(json.results));
}
useEffect(()=>{
  !popularMovies  &&  getNowPopularMovie();
},[])
}
export default usePopularMovies;
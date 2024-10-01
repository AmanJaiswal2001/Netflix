//import { json } from "react-router-dom";
import { API_OPTION } from "../utils/constrints"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesSlice";

export const useUpcomingMovie=()=>{ 
const dispatch=useDispatch();

const UpcomingMovie=useSelector(
    (store)=>store.movies.UpcomingMovie
)


const getNowUpcomingMovie=async()=>{
    const data= await fetch(
    'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1',API_OPTION
    )
    const json = await data.json();
//    console.log(json.results);
dispatch(addUpcomingMovies(json.results));

}
useEffect(()=>{
!UpcomingMovie &&    getNowUpcomingMovie();
},[])

}
import { useDispatch, useSelector } from "react-redux";
import { API_OPTION } from "../utils/constrints";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/moviesSlice";

 export const useMovieVideo=(movieId)=>{
    const dispatch=useDispatch();

    const Trailer=useSelector(
      (store)=>store.movies.trailerVideo
  )


    //fetching trailer video and updating the store
    
     const getMovieVideos=async ()=>{
      const data= await fetch("https://api.themoviedb.org/3/movie/957452/videos?language=en-US",
        API_OPTION
       )
       const json=await data.json();
      //  console.log(json);
    
     
    
     const filterData=json.results.filter((video)=>video.type==="Trailer");
     const trailer=filterData.length ? filterData[0]:json.results[0];
    //  console.log(trailer);
     dispatch(addTrailerVideo(trailer));
      }
     useEffect(()=>{
    !Trailer&& getMovieVideos();
     },[])
     
}
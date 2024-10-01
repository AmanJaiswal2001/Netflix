import React, { useRef } from 'react'
import lang from "../utils/launguageConstants"
import { useDispatch, useSelector } from 'react-redux'
import client from '../utils/openAi';
import { API_OPTION } from '../utils/constrints';
import { addGptMovieResult } from '../utils/gptSlice';
function GptSearchbar() {
    const lanuguage=useSelector(store=>store.config.lang);
  const searchText=useRef(null);

const dispatch=useDispatch();
//search movie in tmdb 

const searchMovieTmdb=async(movie)=>{
  const data=
  await fetch("https://api.themoviedb.org/3/search/movie?query="+movie +"&include_adult=false&language=en-US&page=1"
    ,API_OPTION
  );

  const json =await data.json()
  return json.results;
}



  const handleGptSearchClick=async ()=>{
//make a api call gpt movie results

const gptQuery="For a movie Recommendation suggest some movie of query "+ searchText.current.value +"only give a five movie top rated comma saparated like a example result: Gadar,Golmaal,Dearcomrade,GeetaGovidam,Dhmaal"


const gptResults= await client.chat.completions.create({
  messages: [{ role: 'user', content:gptQuery }],
  model: 'gpt-3.5-turbo',
});

if(!gptResults.choices){
  //tode error find
}

// console.log(gptResults.choices?.[0]?.message.content);
const gptMovies=gptResults.choices?.[0]?.message.content.split(",");


//for exch movie i still tmdb api//

 const promiseArray = gptMovies.map(movie =>searchMovieTmdb(movie))
 //[promise,promise,promise,promise,promise]

 const tmdbResults=await Promise.all(promiseArray);

  

  dispatch(addGptMovieResult({movieNames: gptMovies ,movieResults:tmdbResults}));
};
    return (
    <div className='p-36 flex justify-center  '>
<form  onSubmit={(e)=>(e.preventDefault())} className=' p-6  bg-black opacity-80 w-1/2 '>
{/* <div className='flex justify-center'> */}
<input ref={searchText} type="text" className='p-2 w-96 mx-8 rounded-md' placeholder={lang[lanuguage].gptSearchPlaceholder}/>
<button onClick={handleGptSearchClick}className=' py-2 px-4 mx-2 rounded-lg bg-red-700 text-white cursor-pointer'>{lang[lanuguage].search}</button>
</form>
    </div>
  )
}

export default GptSearchbar


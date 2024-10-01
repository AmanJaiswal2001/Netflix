import React from 'react'
import GptMovieSuggetion from './GptMovieSuggetion'
import GptSearchbar from './GptSearchbar'
import { BG_CDN } from '../utils/constrints'

function GptSearch() {
  return (
    <div>
<div className='absolute'>
        <img src= {BG_CDN}/> </div>
    <GptSearchbar/>
    <GptMovieSuggetion/>






    </div>
  )
}

export default GptSearch
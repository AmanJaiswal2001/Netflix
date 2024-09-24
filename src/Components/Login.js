import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
 
const[isSiginForm, setisSigninForm]=useState();

const ToggleSigninForm=()=>{
setisSigninForm(!isSiginForm);
}


  return (
    <div className="">
    <Header/>
    <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg'/>
    </div>
        <form className='bg-black bg-opacity-70 p-10 my-36  mx-auto right-0 left-0 absolute space-y-10 w-3/12  text-white rounded-lg '>
        <h1 className='  font-bold text-3xl '>{isSiginForm?"Sign In":"Sign Up"}
        </h1>
        {!isSiginForm && (<input  className="p-4  w-full bg-blue-950 border-none outline outline-offset-2 outline-1  rounded-sm"
         type='text' placeholder='Full Name'/>
        )}<br></br>
           
            <input  className="p-4  w-full bg-blue-950 border-none outline outline-offset-2 outline-1  rounded-sm" type='text' placeholder='Email address'/><br></br>
            <input  className="p-4  w-full bg-blue-950 rounded-sm outline outline-offset-2 outline-1" type='password' placeholder='Password'/><br></br>
            <button className='bg-red-600  p-3 w-full rounded-sm'>{isSiginForm?"Sign In":"Sign Up"}</button>
        <p onClick={ToggleSigninForm}>{isSiginForm?"Already Sign Up":"New to Netflix? Sign up now"}</p>
        
        </form>
    </div>
  )
}

export default Login
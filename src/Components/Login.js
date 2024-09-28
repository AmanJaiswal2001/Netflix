import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import {auth} from "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/UserSlice';


const Login = () => {
 
const[isSiginForm, setisSigninForm]=useState(true);
const[errormessage,seterrormessage]=useState(null);

const name=useRef(null)
const email=useRef(null);
const password=useRef(null);
const navigate=useNavigate();
const dispatch=useDispatch();

//validate the email and paswword//
const validate=()=>{
const message=checkValidData(email.current.value,password.current.value);
seterrormessage(message);

if(message) return
//sign in // sign up//
if(!isSiginForm){
  //ssign up form

  createUserWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
      displayName: name.current.value, 
      photoURL:" https://avatars.githubusercontent.com/u/161626195?v=4",
      
    }).then(() => {
      const {uid,email,displayName,photoURL} = auth.currentUser;
      dispatch
      (addUser
        ({uid:uid,email:email,displayName:displayName,photoURL:photoURL}))
 
      navigate("/browse");
      // Profile updated!
      // ...
    }).catch((error) => {
      seterrormessage(error.message);
    });
   // console.log(user)
  // https://images.pexels.com/photos/20144254/pexels-photo-20144254/free-photo-of-vintage-tram-in-lisbon.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
  // https://avatars.githubusercontent.com/u/161626195?v=4
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+"-"+errorMessage);
  });
}
else{

  //sign in form

  signInWithEmailAndPassword(auth, email.current.value,password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // updateProfile(auth.currentUser, {
    //   displayName: "Jane Q. User", photoURL: "https://example.com/jane-q-user/profile.jpg"
    // }).then(() => {
    //   // Profile updated!
    //   // ...
    // }).catch((error) => {
    //   // An error occurred
      // ...
    // });
    console.log(user)
    navigate("/browse");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    seterrormessage(errorCode+"-"+errorMessage);
  });
}



}
const ToggleSigninForm=()=>{
setisSigninForm(!isSiginForm);
}


  return (
    <div className="">
    <Header/>
    <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/47c2bc92-5a2a-4f33-8f91-4314e9e62ef1/web/IN-en-20240916-TRIFECTA-perspective_72df5d07-cf3f-4530-9afd-8f1d92d7f1a8_small.jpg'/>
    </div>
        <form 
        onSubmit={(e)=>{e.preventDefault()}}
        className='bg-black bg-opacity-70 p-10 my-36  mx-auto right-0 left-0 absolute space-y-3 w-3/12  text-white rounded-lg '>
        <h1 className='  font-bold text-3xl '>{isSiginForm?"Sign In":"Sign Up"}
        </h1>
        {!isSiginForm && (<input  
       ref={name}
        className="p-4  w-full bg-blue-950 border-none outline outline-offset-2 outline-1  rounded-sm"
         type='text' placeholder='Full Name'/>
        )}<br></br>
           
            <input 
            ref={email}
             className="p-4  w-full bg-blue-950 border-none outline outline-offset-2 outline-1  rounded-sm" type='text' placeholder='Email address'/>
            <input 
            ref={password}
             className="p-4  w-full bg-blue-950 rounded-sm outline outline-offset-2 outline-1" type='password' placeholder='Password'/>
          <p className='text-red-500'>{errormessage}</p>
          
            <button  onClick={validate}className='bg-red-600  p-3 w-full rounded-sm'>{isSiginForm?"Sign In":"Sign Up"}</button>
        <p onClick={ToggleSigninForm}>{isSiginForm?"Already Sign up":"New to Netflix? Sign up now"}</p>
        
        </form>
    </div>
  )
}

export default Login
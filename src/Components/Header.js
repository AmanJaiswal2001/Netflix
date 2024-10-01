import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from   "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { LOGO, SUPPORT_LAUNGUAGE } from '../utils/constrints';
import { toggleGptSearchView } from '../utils/gptSlice';
import { changeLanguaue } from '../utils/configSlice';

const Header = () => {
const navigate=useNavigate();
const user=useSelector(store=>store.user);
const showGptSearch=useSelector(store=>store.gpt.showGptSearch)
const dispatch=useDispatch();

const handleGpt=()=>{
  dispatch(toggleGptSearchView());
}



const handleSignout=()=>{

signOut(auth)
.then(() => {
  //  navigate("/");
  // Sign-out successful.
}).catch((error) => {
    navigate("/error");
  // An error happened.
});
}
useEffect(()=>{
  const unsubcribe=  onAuthStateChanged(auth, (user) => {
        if (user) {
          const {uid,email,displayName,photoURL} = user;
          dispatch(addUser({uid:uid,email:email,displayName:displayName,photoURL:photoURL}

          ));
      
        
       navigate("/browse");
        } 
        
        
        else {
         dispatch(removeUser());
  navigate("/");
        }
      });
//unsubcribe when component unmount
      return()=> unsubcribe();
},[])

const HandleLaunguageChange=(e)=>{
 //console.log(e.target.value);
 dispatch(changeLanguaue(e.target.value));

}


  return (
    <div className='absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
    <img 
    className='w-36 '
    src={LOGO}   alt="Logo"/>
   
 {user && ( <div className='flex'>
{showGptSearch && (<select className='bg-purple-800 text-white py-2 px-4 h-12 rounded-lg cursor-pointer' onChange={HandleLaunguageChange}>
  {SUPPORT_LAUNGUAGE.map((lang)=>(
    <option key={lang.identifier} value={lang.identifier}>
      {lang.name}
    </option>
  ))}
</select>)}

 <button  onClick={handleGpt}className='py-2 px-4  h-12 rounded-lg  mx-4 bg-purple-800 text-white'>{showGptSearch?"HomePage":"GPT Search"}</button>
<img className=" w-16 h-12"
alt="usericon"
src={user.photoURL}/>


<button onClick={handleSignout}
 className="font-bold text-xl text-white">(Sign Out)</button>
   </div>)}
   
   
   
    </div>
    
  )
}

export default Header
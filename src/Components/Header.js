import React, { useEffect } from 'react'
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from   "../utils/firebase";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/UserSlice';
import { LOGO } from '../utils/constrints';

const Header = () => {
const navigate=useNavigate();
const user=useSelector(store=>store.user);
const dispatch=useDispatch();

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




  return (
    <div className='absolute  w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
    <img 
    className='w-36 '
    src={LOGO}   alt="Logo"/>
   
 {user && ( <div className='flex'>
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
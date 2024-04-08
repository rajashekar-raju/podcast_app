import React, { useRef, useState } from 'react'
import { validation } from '../utils/validation'
import { auth } from '../utils/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

const SignUpPage = () => {

    const [isSignInForm,setIsSignInForm] = useState(true)
    const [errorMessage,setErrorMessage] = useState('')

    const navigate = useNavigate()

    const email = useRef(null)
    const password = useRef(null)
    const name = useRef(null)

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleValidation = () => {
        const validatedMessage = validation(email.current.value,password.current.value)
        setErrorMessage(validatedMessage)

        if(validatedMessage) return;

        if(!isSignInForm) {
            createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                const user = userCredential.user;
                updateProfile(user, {
                    displayName: name.current.value
                  }).then(() => {
                    const { uid, email, displayName } = auth.currentUser;
                    // dispatch(addUser({uid: uid,email: email,displayName: displayName}));
                    // navigate("/browse")
                  }).catch((error) => {
                    setErrorMessage(error.message);
                  });
              })
              .catch((error) => {
                  const errorCode = error.code;
                  const errorMessage = error.message;
                  setErrorMessage(errorCode+ "-" + errorMessage)
              });
            }
        
        else {
            signInWithEmailAndPassword(auth,email.current.value,password.current.value)
            .then((userCredential) => {
                const { uid, email, displayName } = userCredential.user;
                // dispatch(addUser({uid:uid,email:email,displayName:displayName}))
                // navigate("/browse")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                setErrorMessage(errorCode + "-" + errorMessage)
            });
        }
    } 

  return (
    <div className='w-1/3 mx-auto flex justify-center mt-16 items-center'>
    <form 
        onSubmit={(e)=>e.preventDefault()} 
        className='w-full'
    >
        <h1 className='text-white text-center p-3 mb-3 text-4xl'>{isSignInForm ? "SignIn" : "SignUp"}</h1>
        {
            !isSignInForm && 
            <div className='mb-8 mx-auto'>
                <input 
                    type="text" 
                    placeholder='enter name' 
                    className='py-2 rounded-lg px-2 outline-none w-full mx-auto bg-transparent border border-blue-500 text-white focus:border focus:border-white'
                    ref={name}
                />
            </div>
        }
        <div className='mb-8 mx-auto'>
            <input 
                type="email" 
                placeholder='enter email' 
                className='py-2 rounded-lg px-2 outline-none w-full mx-auto bg-transparent border border-blue-500 text-white focus:border focus:border-white'
                ref={email}
            />
        </div>
        <div className='mb-8 mx-auto'>
            <input 
                type="password" 
                placeholder='enter password' 
                className='py-2 px-2 rounded-lg outline-none w-full bg-transparent border border-blue-500 text-white focus:border focus:border-white'
                ref={password}    
            />
        </div>
       <div className='mb-2'>
             {
                errorMessage && <span className='text-red-700 mb-5'>{errorMessage}</span>
             }
       </div>
        <div>
            <button onClick={handleValidation} className='w-full bg-transparent border border-blue-500 text-white hover:bg-white hover:text-black rounded-lg outline-none py-2 px-4'>submit</button>
        </div>
        <div>
            <p onClick={toggleSignInForm} className='text-white cursor-pointer mt-3 md:p-2 2xl:mb-3'>{isSignInForm ? "new to podcast app? SignUp now" : "already a user signin now"}</p>
        </div>
    </form>
</div>
  )
}

export default SignUpPage
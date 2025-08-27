import { signInWithPopup,GoogleAuthProvider } from 'firebase/auth'
import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { firebaseAuth, usersRef } from '../utils/FirebaseConfig'
import { addDoc, getDocs, query, where } from 'firebase/firestore'
import { useAppDispatch } from '../app/hooks'
import {setUserStatus} from "../app/slices/AppSlice"

function Login() {
    const dispatch = useAppDispatch()
    const handleLogin = async ()=>{ 
        const provider = new GoogleAuthProvider()
        const {
            user:{email, uid},
    } = await signInWithPopup(firebaseAuth,provider)
    if (email){
        const firestoreQuery = query(usersRef,where("uid","==",uid))
        const fetchedUser = await getDocs(firestoreQuery)
        if(fetchedUser.docs.length ===0){
            await addDoc(usersRef,{uid,email})
        }
        dispatch(setUserStatus({email}))
    }
    }
  return (
    <div className='login'>
        <button className='login-btn' onClick={handleLogin}>
            <FcGoogle />
            <span className='login-text'>Login</span>
            <span className='with-text'>with</span>
            <span className='g-text'>G
                <span className='o-redtext'>o</span>
                <span className='o-yellowtext'>o</span>
                <span className='g-text'>g</span>
                <span className='l-text'>l</span>
                <span className='e-text'>e</span>
                </span>
            <span></span>
        </button>
    </div>
  )
}

export default Login
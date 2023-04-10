import React from 'react'
import {RiGoogleFill} from 'react-icons/ri'
import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from '../firebase';

const provider = new GoogleAuthProvider();
export default function LoginForm() {

            const googleLogin= async ()=>{
                    try {
                        const data = await signInWithPopup(auth,provider)
                        const credential = GoogleAuthProvider.credentialFromResult(data);
                        const token = credential.accessToken;
                        const user = data.user;
                        if(user){
                            window.location="/blog"
                        }
                    } catch (error) {
                        const credential = GoogleAuthProvider.credentialFromError(error);
                                console.log(credential)
                    }
            }
    return (
    <div className='h-screen relative'>
                <img src="https://wallpaperaccess.com/full/412639.jpg" className='h-full w-full object-cover' alt="" />
        <div className='z-50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <h3 className='text-center text-white font-bold text-3xl'>Blog</h3>
        <button onClick={googleLogin} className='w-48 flex justify-center items-center hover:bg-white/80 bg-white h-14 rounded-full mt-3'>
            <RiGoogleFill className='text-3xl'/> Google ile giriş yap
        </button>
        </div>
    </div>
    )
    }

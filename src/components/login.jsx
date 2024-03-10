import React from 'react'
import { useState } from 'react';
import { AiOutlineUser ,AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordFill} from 'react-icons/ri'
import '../App.css';
import { login } from '../redux/userReducer';
import {useDispatch,useSelector} from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const [userInfo,setUserInfo]=useState({uname:'',password:'',email:''})
    const dispatch=useDispatch()
    const user=useSelector(state=>state.User.user)
    const {authUser}=user
    const navigate=useNavigate()

    function HandleSubmit(e){
        e.preventDefault();
        dispatch(login(userInfo))
        authUser && navigate('./quiz')

        setUserInfo({
            uname:'',
            password:'',
            email:''
        })
        console.log(user)
        console.log(authUser)
     
    }
    return (
        <div className='flex flex-col  gap-4 xs:w-80 max-xs:w-64 h-auto items-center border border-slate-300 rounded-lg shadow-2xl'>
        <h3 className='text-slate-600 font-serif py-2 mt-4 text-lg font-bold'>Sign up</h3>
        <div className='relative rounded-lg  w-60 h-10  '>
        <AiOutlineUser size={20} className='absolute left-1 top-2'/>
        <input type='text' value={userInfo.uname} onChange={(e)=>setUserInfo({...userInfo,uname:e.target.value})} placeholder='Enter your name ...'  className='rounded-lg w-full h-full pl-8' />
        </div>
        <div className='relative rounded-lg  w-60 h-10 '>
        <AiOutlineMail size={20} className='absolute left-1 top-2'/>
        <input type='Email' value={userInfo.email} onChange={(e)=>setUserInfo({...userInfo,email:e.target.value})}  placeholder=' Enter your Email ...' className='rounded-lg w-full h-full  pl-8'  />
        </div>
        <div className='relative rounded-lg w-60 h-10 '>
        <RiLockPasswordFill size={20} className='absolute left-1 top-2'/>
        <input type='password' value={userInfo.password} onChange={(e)=>setUserInfo({...userInfo,password:e.target.value})} placeholder=' Enter your password ...' className='rounded-lg w-full h-full  pl-8'  />
        </div>
        <div className='flex flex-row space-x-4 text-sm text-slate-500'>
        <div className='flex flex-row'>
        <input type='checkbox' /><p className='text-slate-200'>remember me?</p>
        </div>
        <p className='text-slate-200'>Forget Password?</p>
        </div>
        <button className='font-serif  text-lg font-bold text-slate-700 px-5 py-2 mb-2 hover:outline outline-blue-100 rounded-lg ' onClick={HandleSubmit}>Login</button>
        </div>
       
    )
}

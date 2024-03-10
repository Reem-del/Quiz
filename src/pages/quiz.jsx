import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import Category from '../components/category';


import '../App.css'
import {BsArrowLeftShort} from 'react-icons/bs'
import {useSelector,useDispatch} from 'react-redux';
import { setBlocked, setShow,setCounter} from '../redux/reducer';
import { setscoreRes} from '../redux/questionreducer';
import Swipercomp from '../components/swipercomp';



  
export default function Quiz() {
    const [result,setResult]=useState([]);
    const dispatch=useDispatch()
    const scrolldownRef=useRef(null)
    const scrollupRef=useRef(null)

    
    const {show,timer}=useSelector(state=>state.project)
    const {category,type}=useSelector(state=>state.Branch.branch)
    const score=useSelector(state=>state.Branch.score)
 
    function getTimer(t){
        let h=Math.floor(t/3600)
        let m=Math.floor((t % 3600) / 60);
       let  s = Math.floor(t % 3600 % 60)
       return `0${h}:0${m}:${s}`

    }
console.log(result)

    function handleClose(){
      dispatch(setBlocked(false))
      dispatch(setShow(false))
      dispatch(setscoreRes(category))
      scrollToElement(scrollupRef)
      
    }
    const scrollToElement=(val)=>{
      val.current.scrollIntoView({
        behavior:'smooth'})
    }
  
    console.log(show)
    console.log(category)
    console.log(type)

    
    
    async function getData(){
        const res=await axios(`https://opentdb.com/api.php?amount=8&category=${category}`);
        setResult(res.data.results)
        category !==0 && dispatch(setShow(true))
        scrollToElement(scrolldownRef)
        }
   
       useEffect(()=>{getData()},[category])
       console.log(result)

     
       useEffect(()=>{const interval=setInterval(()=>{show && dispatch(setCounter())},1000);
        return ()=>clearInterval(interval)

},[show])
       useEffect(()=>{if(timer === 0){handleClose()}},[timer])
    return (
        <div className='md:flex flex-row p-2 bg-amber-100 w-full max-sm:flex-col gap-3'>
            
            <div className='xs:w-1/2 ml-4 max-xs:mx-2' ref={scrollupRef}>
         <Category />
            </div>
            <div ref={scrolldownRef} className='xs:w-1/2 ml-4 max-xs:mx-2 mt-6 '>
            {show && <div className='mt-2 text-center text-2xl xs:w-80 bg-amber-700 max-xs:w-full'>
                <p>{getTimer(timer)}</p></div>}
            <div className={`xs:w-80 h-[500px] mt-4  max-xs:w-full shadow-2xl shadow-amber-900 rounded-lg transition-all ease-in-out  duration-700 delay-300   ${show ? `opacity-1`:`opacity-0`}`} >
            <div className='flex flex-row mb-3 justify-between text-amber-800 pt-3 px-3'>
            <BsArrowLeftShort size={20} onClick={handleClose}  />

            <p className='font-bold text-lg '>{type}</p>
           <p>{score}</p>
            </div>
          <Swipercomp key={category} slides={result} />
            </div>
            </div>
            </div>
        
    )
}




/*url='https://opentdb.com/api.php?amount=10&category=18';
npm install @reduxjs/toolkit*/
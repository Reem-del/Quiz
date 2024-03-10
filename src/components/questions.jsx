import { useEffect, useState } from "react";
import {FaCheck} from 'react-icons/fa';
import {HiX} from 'react-icons/hi';
import { setScore } from "../redux/questionreducer";
import {useDispatch} from 'react-redux';
import '../App.css'


function Questions({collection}) {
const [res,setRes]=useState(false)
const [randomquestion,setRandomquestion]=useState([])
const [selectedVal,setSelectedVal]=useState(null)
const allquestion=[...collection.incorrect_answers,collection.correct_answer]
const dispatch=useDispatch()



useEffect(()=>{
 let z;
  for(let i=allquestion.length;i>0;i--){
  let randomIndex=Math.floor(Math.random()* allquestion.length)
    z=allquestion[allquestion.length-1]
    allquestion[allquestion.length-1]=allquestion[randomIndex]
    allquestion[randomIndex]=z;
  }
  setRandomquestion(allquestion)
},[collection])

useEffect(()=>{
  res && dispatch(setScore())
  },[res])



 
    
  useEffect(()=>{
  setRes(selectedVal === collection.correct_answer ? true : false)
  },[selectedVal])

 
 
  console.log('selectedVal' + selectedVal)
  console.log(res)
  

    return (
      <div className='flex flex-col h-[400px] gap-3 w-full rounded-lg text-center mt-5 p-3'  >
      <h3 className="font-bold text-amber-950 text-lg">{collection.question}</h3>
      {randomquestion.map(q=>(
      <div className={`flex flex-row justify-between bg-orange-400 h-14 rounded-lg p-2 font-bold text-amber-800 ${(selectedVal === q  && res) &&  `text-orange-200 bg-teal-700  h-24 pt-7 `} ${(selectedVal === q && !res ) && `bg-red-600 text-slate-100 h-24`}`} onClick={()=>{if(selectedVal === null){setSelectedVal(q)}}}>
        <h3>{q}</h3>
        <FaCheck size={20} className={`${(selectedVal === q  && res) ? `block` : `hidden`}`} />
        <HiX size={20}  className={`${(selectedVal === q  && !res) ? `block` : `hidden`}`} />
        </div>
        )
      
       )}

   
        </div>
       
    )
}

export default Questions

import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import {useDispatch,useSelector} from 'react-redux';
import {setBlocked,setTimer} from '../redux/reducer';
import '../App.css'
import { filterBranch } from '../redux/questionreducer';

function Category() {
   const dispatch=useDispatch()
   const data=useSelector(state=>state.Branch.collection)
   const {uname}=JSON.parse(sessionStorage.getItem('authUser'))
   let subscriber=uname.toUpperCase()

   const {blocked}=useSelector(state=>state.project)



    return (
       
         <div className='xs:w-80 shadow-lg max-xs:w-full'>
            <div className='flex flex-row  p-3 bg-green-600  rounded-2xl '>
            <img src='wave-removebg-preview.png' alt='wave' className='w-8 h-8 ' />
            <p className='mt-1 font-bold'>{`Hi ${subscriber}`}</p>
            </div>
            <div className='flex flex-col gap-1'>
            <p className='my-3 text-center text-amber-800 font-serif'>Start Now with interest</p>
            {data.map(d=>
            <div className='bg-orange-300 text-amber-900 border border-slate-300 px-3 h-16 rounded-lg'>
            <div className='flex flex-row  justify-between '>
            <p className='font-bold'>{d.type}</p>
            <MdKeyboardArrowRight size={20}  className={`${blocked && `cursor-none`} mt-1`} onClick={()=>{dispatch(filterBranch(d)),dispatch(setBlocked(true)),dispatch(setTimer(20))}} />
            </div>
            {d.scoreRes !==0 &&
            <div className='flex flex-row  pt-3 font-mono text-green-800'>
            <p>{`${d.scoreRes} ${d.scoreRes === 1 ? `score` : `scores`} your level is : ${d.level}`}</p>
            </div>}
            </div>
           )}
            </div>
            </div>
             
    
    )
}

export default Category

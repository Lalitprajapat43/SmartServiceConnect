import React, { useState } from 'react'
import { LuSquareMenu } from "react-icons/lu";
import { CiMenuKebab } from "react-icons/ci";
import {Link} from "react-router-dom"
import { GrWorkshop } from "react-icons/gr";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { AiOutlineFileDone } from "react-icons/ai";
import { GrUserWorker } from "react-icons/gr";
import { MdOutlinePlumbing } from "react-icons/md";
import { MdElectricBolt } from "react-icons/md";




export default function Sidebar() {
  const [open,setOpen] =  useState(false)
  const [Workopen,setWorkOpen] = useState(false)
   const [Workeropen,setWorkerOpen] = useState(false)
  return (
          <div className={`${open ? "w-64" : "w-16"}  h-[90vh] bg-teal-600 text-white  flex flex-col gap-4 p-5 shadow-lg transition-all duration-600 relative`}>

       <div className='flex w-full h-[8vh]'>
        {
          !open ? (
             <LuSquareMenu onClick={()=>(setOpen(!open))} size={"2rem"}  className=' cursor-pointer '/>
          ):(
          <div className='flex justify-between w-full h-[8vh]'>
          <h1>Applogo</h1>
          <CiMenuKebab onClick={()=>(setOpen(!open))} size={"2rem"} className=' cursor-pointer'/>

          </div>
          )
        }
         
       </div>

      {
        open ? (
          <div>
         <div>
       <h1 className=' font-bold text-black text-[1.3rem] border-b-2 '>My Work</h1>
      <ul className=' flex flex-col text-[1.1rem] gap-2 font-light mt-3 '>
      <li ><Link to={"/"}>Work Done</Link></li>
      <li ><Link to={"/"}>Comming Soon</Link></li>
      </ul>
       </div>

     <div>
      <h1 className=' font-bold text-black text-[1.3rem] border-b-2 '>Workers</h1>
       <ul className='flex flex-col text-[1.1rem] gap-2 font-light mt-3 '>
        <li><Link to={"/plumber"}>Plumber's</Link></li>
        <li><Link to={"/electricien"}>Electricien's</Link></li>
        <li><Link to={"/falana"}>Falana's</Link></li>
        <li><Link to={"/dhikana"}>Dhikana's</Link></li>
      </ul>
     </div>
      </div>
        ):(
          <div className='flex flex-col gap-5'>
          
            <div className='flex flex-col gap-2'>
            <GrWorkshop  size={"2rem"} onClick={()=>(setWorkOpen(!Workopen))} className='cursor-pointer  text-black'/>
            <div className={`${Workopen ? "flex" : "hidden"}  flex-col gap-3  `}>
              <IoCheckmarkDoneCircleSharp size={"1.8rem"} className='cursor-pointer'  />
              <AiOutlineFileDone size={"1.8rem"} className='cursor-pointer' />
            </div>
            </div>

            <div className='flex flex-col gap-2'>
              <GrUserWorker  size={"2rem"} onClick={()=>(setWorkerOpen(!Workeropen))} className='cursor-pointer  text-black'/>
              <div className={`${Workeropen ? "flex" : "hidden"}  flex-col gap-3  `} >
                <MdOutlinePlumbing size={"1.8rem"} className='cursor-pointer'/>
                <MdElectricBolt size={"1.8rem"} className='cursor-pointer' />

              </div>
            </div>
          
          </div>
        )
      }
    </div>
  )
}

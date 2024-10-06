import React from 'react'
import { CiUser, CiLock } from "react-icons/ci";
import './Login.css';
const Login = () => {
  return (
    <>
    <section className='flex w-[100%]'>
      <div id="left" className='w-1/2 h-[100vh] flex flex-col justify-center items-center gap-5'>
        <h1 className='font-bold text-5xl'>LOGIN</h1>
        <p className='text-2xl'>How to i get started lorem ipsum dolor at?</p>
        <form action="" className='flex flex-col gap-5 justify-center items-center'>
          <div className='bg-sky-200 items-center rounded-xl w-[30vw] px-5 py-4 flex'>
            <CiUser size={25}/>
            <input type="text" className='text-xl pl-2 bg-transparent' placeholder='Username'/>
          </div>
          <div className='bg-sky-200 items-center rounded-xl w-[30vw] px-5 py-4 flex'>
            <CiLock size={25}/>
            <input type="text" className='pl-2 text-xl bg-transparent' placeholder='Password'/>
          </div>
          <button className='shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] w-32 h-14 rounded-2xl bg-gradient-to-r from-sky-400 to-blue-500 font-bold text-white'>Login Now</button>
        </form>
        <div className='border-2'></div><h2 className='flex gap-1 text-2xl'><b>Login</b>with Others</h2>
        
        <div className="border-[1px] items-center rounded-xl w-[30vw] px-5 py-4 flex justify-center">
          <img className='w-11' src="./images/google icon.png" alt="" />
          <h2 className='flex gap-1 text-xl'>Login with<b>Google</b></h2>
        </div>

        <div className="border-[1px] items-center rounded-xl w-[30vw] px-5 py-4 flex justify-center">
          <img className='w-9' src="./images/fb-icon.png" alt="" />
          <div className='border-2'></div><h2 className='flex gap-1 text-xl'>Login with<b>Facebook</b></h2>
        </div>

      </div>
      <div id="right" className="bg-[url('./images/Rectangle-4.png')] bgcon w-1/2 h-[100vh] bg-no-repeat bg-cover justify-center flex items-center">
         <div className='w-4/5 bg-[#ffffff4b] border-[1px] h-[65%] rounded-3xl relative'>
            <h1 className=' font-bold pl-10 pt-10 text-5xl text-white leading-[60px]'>Organize, <br/> Access, <br/> and Manage with Ease.</h1>
            <img className='w-[45vw] -left-10 bottom-0  absolute' src="./images/file.png" alt="" />
         </div>
      </div>
    </section>
    </>
  )
}

export default Login

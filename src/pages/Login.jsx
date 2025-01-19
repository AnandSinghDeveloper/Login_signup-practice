import React, { useState } from 'react'
import { Link } from 'react-router-dom'


const Login = () => {

const [email , setEmail]=useState('');
const [password , setPassword]=useState('');
// const [loginData,setLoginData]=useState(null)

const  submitHandler=(e)=>{
  e.preventDefault()
 const loginData={
   email : email,
   password : password
  }
 console.log(loginData);
 

  setEmail('')
  setPassword('')
}

  return (
  <div className=' w-full h-screen'>
     <div className='w-full h-screen bg-[#C5C5C5] '>
        <div className='w-full h-screen flex justify-center items-center'>
        <div className=' w-[26vw] h-[90vh] border-[3px] rounded-xl flex items-center flex-col p-3 justify-between bg-white  '>
          <h1 className='text-4xl font-semibold capitalize text-[#365B64] mb-1'> login here !</h1>
          <div className=' w-[100%] h-full'> 
            <img className=' object-contain' src="https://img.freepik.com/free-vector/digital-tools-concept-illustration_114360-7258.jpg?t=st=1737003093~exp=1737006693~hmac=979a3633c74f59f3c92849872d329eceaf61578ecf321ff73172cfe6bf2cccc9&w=740" alt="img" />
          </div>
          <div className=' w-full h-[60%] p-2 flex flex-col justify-around'>
           <form onSubmit={(e)=>{
                submitHandler(e)
           }} >
           <input
           required
           value={email}
           onChange={(e)=>{
          setEmail(e.target.value);

           }} placeholder='Enter your Email' className=' placeholder:text-[#E395DF] w-full py-2 px-2 mb-2 rounded bg-transparent border-[#A952A3] border-2 ' type="email" />
           <input
           required
            value={password}
            onChange={(e)=>{
           setPassword(e.target.value);
           
            }} placeholder='Enter Your pasword' className=' placeholder:text-[#E395DF] w-full py-2 px-2  mb-2 rounded bg-transparent border-[#A952A3] border-2' type="password" />

           <p className='text-[#365B64] font-normal'>Don't have account  <Link to='/Signup' className=' text-[#A952A3] '>SignUP Now !</Link></p>
           <button  className='flex justify-center items-center w-full py-2 border bg-[#E395DF] rounded-lg capitalize text-xl font-medium'> login</button>
           </form>
            
         
          </div>
        </div>
        </div>
        
    </div>
    
 
  </div>
  )
}

export default Login

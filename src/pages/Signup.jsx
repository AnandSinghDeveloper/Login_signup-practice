import React, { useState } from 'react'
import { Link } from 'react-router-dom'
   
const Signup = () => {

  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('')
  const [phone,setPhone]=useState('')
  const [name,setName]=useState('')
  const [lastname,setLastname]=useState('')

const submitHandler =(e)=>{

     e.preventDefault();

 const SignupData = {
  name : name,
  lastname : lastname,
  phone : phone,
  email : email,
  password : password
 }

 localStorage.setItem('user',JSON.stringify(SignupData));

 console.log(SignupData);
 
 setEmail('');
 setLastname('');
 setName('');
 setPassword('');
 setPhone('');


}   




  return (
    <div className=' w-full h-screen'>
        <div className='w-full h-screen bg-[#C5C5C5] '>
           <div className='w-full h-screen flex justify-center items-center'>
           <div className=' w-[26vw] h-[90vh] border-[3px] rounded-xl flex items-center flex-col p-3 justify-between bg-white  '>
             <h1 className='text-4xl font-semibold capitalize text-[#365B64] mb-1'> SignUP now !</h1>
             <div className=' w-[100%] h-full'> 
               <img className=' object-contain' src="https://img.freepik.com/free-vector/online-consulting-concept-illustration_114360-9026.jpg?t=st=1737005924~exp=1737009524~hmac=ea146d544cd576240bcd8a8190972b912791b5d7d9be8dfb27eca2d2074b2d9e&w=996" alt="img" />
             </div>
             <div className=' w-full  p-2 flex flex-col justify-between'>
              <form onSubmit={(e)=>{
                 submitHandler(e)
              }} >
               <div className=' w-full flex justify-between  pb-2 '> 
                <input
                required

                value={name}
                onChange={(e)=>{
                   setName(e.target.value)
                }}
                placeholder='Name' className=' border-2 w-[45%] rounded placeholder:text-[#FF735C] py-2 border-[#FF735C] px-2 ' type="text" />
                <input
                value={lastname}
                onChange={(e)=>{
                   setLastname(e.target.value)
                }}
                placeholder='Last Name' className='border-2 w-[45%] rounded placeholder:text-[#FF735C] border-[#FF735C] px-2' type="text" />
               </div>
               <input
            
               required
               value={phone}
               onChange={(e)=>{
                  setPhone(e.target.value)
               }}
                placeholder='Enter Your Phone Number' className='w-full border-2 py-2 mb-2 rounded px-2 border-[#FF735C] placeholder:text-[#FF735C]'  type="text" />

              <input
              required
              value={email}
              onChange={(e)=>{
                 setEmail(e.target.value)
              }}
              placeholder='Enter your Email' className=' placeholder:text-[#FF735C] w-full py-2 px-2 mb-2 rounded bg-transparent border-[#FF735C] border-2 ' type="email" />
              <input
              required
              value={password}
              onChange={(e)=>{
                 setPassword(e.target.value)
              }}
              placeholder='Enter Your pasword' className=' placeholder:text-[#FF735C] w-full py-2 px-2  mb-2 rounded bg-transparent border-[#FF735C] border-2' type="password" />
   
              <p className='text-[#365B64] mb-3 font-normal'> Have Account?  <Link to='/Login' className=' text-[#6161fa] underline-offset-1 '>Login Now !</Link></p>

              <button className='flex justify-center items-center w-full py-2 border bg-[#FF735C] rounded-lg capitalize text-xl font-medium'>create account</button>

              </form>
               
            
             </div>
           </div>
           </div>
           
       </div>
       
    
     </div>
  )
}

export default Signup

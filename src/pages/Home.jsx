import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <div className='w-full h-screen bg-[#C5C5C5] '>
        <div className='w-full h-screen flex justify-center items-center'>
        <div className=' w-[25vw] h-[75vh] border-[3px] rounded-xl flex items-center flex-col p-5 justify-between bg-white '>
          <h1 className='text-4xl font-semibold capitalize text-[#365B64]'> getting started</h1>
          <div className=' w-[100%] h-[70%]'> 
            <img className=' object-contain' src="https://img.freepik.com/free-vector/setup-concept-illustration_114360-382.jpg?t=st=1737001562~exp=1737005162~hmac=6fdf11e4a4ad40ae08f5507c95f0a9ca6f79663f2d54f8652fa4cfca736e2d34&w=740" alt="img" />
          </div>
           <Link to='/Login' className='flex justify-center items-center w-full py-2 border bg-[#00DFC0] rounded-lg capitalize text-xl font-medium'> continue</Link>
        </div>
        </div>
        
    </div>

    </>
  )
}

export default Home

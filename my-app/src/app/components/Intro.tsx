import React from 'react'

const Intro = () => {
  return (
    <div className='flex w-10/12 mx-auto'>
      <div className="flex w-6/12 my-auto pr-5">
        <div className="flex flex-col w-10/12 mx-auto">
        <h1 className='text-4xl font-semibold'>Lorem ipsum dolor sit amet.</h1>
        <p className='text-sm text-gray-600 py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi odit culpa vel dignissimos ad ducimus obcaecati tempore, aperiam impedit corporis! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, id!</p>
        <button className='text-white w-fit bg-blue-500 rounded py-1 px-3'>get started</button>
        </div>
      </div>


      <div className='flex flex-col w-6/12 my-auto'>
        <div className="flex">
        <div className="flex flex-col w-1/2  py-auto border rounded-md bg-pink-200 p-1 m-5">
            <img src="" alt="" className='w-20 h-20 rounded-full bg-blue-700 m-2' />
            <h1 className='text-semibold text-xl py-1 px-3'>Digital marketing</h1>
            <p className='text-sm mb-5 px-3'>Lorem, ipsum dolor sit amet consectetur adipisicing Iure, illum</p>
        </div>
        <div className="flex flex-col w-1/2  py-auto border rounded-md bg-pink-200 p-1 m-5">
            <img src="" alt="" className='w-20 h-20 rounded-full bg-blue-700 m-2' />
            <h1 className='text-semibold text-xl py-1 px-3'>Digital marketing</h1>
            <p className='text-sm mb-5 px-3'>Lorem, ipsum dolor sit amet consectetur adipisicing Iure, illum</p>
        </div>
        
        </div>



        <div className="flex left-5 relative">
        <div className="flex flex-col w-1/2  py-auto border rounded-md bg-pink-200 p-1 m-5">
            <img src="" alt="" className='w-20 h-20 rounded-full bg-blue-700 m-2' />
            <h1 className='text-semibold text-xl py-1 px-3'>Digital marketing</h1>
            <p className='text-sm mb-5 px-3'>Lorem, ipsum dolor sit amet consectetur adipisicing Iure, illum</p>
        </div>
        <div className="flex flex-col w-1/2  py-auto border rounded-md bg-pink-200 p-1 m-5">
            <img src="" alt="" className='w-20 h-20 rounded-full bg-blue-700 m-2' />
            <h1 className='text-semibold text-xl py-1 px-3'>Digital marketing</h1>
            <p className='text-sm mb-5 px-3'>Lorem, ipsum dolor sit amet consectetur adipisicing Iure, illum</p>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Intro

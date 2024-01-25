import React from 'react'

const Posts = () => {
  return (
    <div className='w-10/12 mx-auto text-center'>
        <h2 className="text-3xl font-semibold p-1">What our client say</h2>
        <p className="text-gray-600 text-sm w-1/2 mx-auto my-3 mb-20">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit mollitia ullam totam obcaecati consequatur debitis architecto necessitatibus ut excepturi repellendus labore odio ipsam blanditiis assumenda, voluptate facilis, ex reiciendis aspernatur.</p>
        <div className="flex">
            <div className='w-1/3 shadow-lg'>
            <img src="" className='bg-black h-[40vh] m-3 rounded-md' alt="" />  
            </div>  
        </div> 
        <button className="my-5 bg-orange-700 rounded-md h-9 px-3 text-white ">Sign up</button>
      
    </div>
  )
}

export default Posts

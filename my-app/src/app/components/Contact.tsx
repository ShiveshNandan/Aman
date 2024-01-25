import React from 'react'

const Contact = () => {
  return (
    <div className='flex w-9/12 mx-auto'>
      <div className="flex w-1/2 flex-col my-auto ">
        <h1 className='text-5xl font-semibold p-6 w-2/3 mx-auto'>Contact form</h1>
        <p className='p-6 text-xl w-2/3 mx-auto text-gray-600'>The following form demonstrates form validation in action. Contact form component reduces the amount of time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any unnecessary performance penalty.</p>
      </div>
      <div className="flex flex-col w-1/2 p-5 my-auto">
        <div className="flex flex-col">
            <h1 className='text-gray-600 my-2'>Name</h1>
            <input type="text" placeholder='Your Name' className='p-4 bg-gray-200 w-full rounded'/>
        </div>
        <div className="flex flex-col">
            <h1 className='text-gray-600 my-2 mt-10'>Email</h1>
            <input type="text" placeholder='Your Name' className='p-4 bg-gray-200 w-full rounded'/>
        </div>
        <div className="flex flex-col">
            <h1 className='text-gray-600 my-2 mt-10'>Message</h1>
            <textarea  rows={4}  placeholder='Your Name' className='p-4 bg-gray-200 w-full rounded'/>
        </div>
        <div className="flex justify-end">
        <button className="my-5 bg-blue-700 rounded-md py-2 px-10 w-fit text-white ">Submit</button>
        </div>
      
      </div>

    </div>
  )
}

export default Contact

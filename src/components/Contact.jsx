import React from 'react'

const Contact = () => {
  return (
    <div id='container' className='flex flex-col justify-center items-center border border-5 p-5 mt-5 mb-5 lg:ml-60 lg:mr-60 lg:mt-10 lg:mb-5 sm:m-10 md:m-20 rounded-xl w-100 h-100 bg-white-200 gap-4'>
      <form className='mt-20 mb-20 font-inter'>
        <h1 className='text-3xl font-semibold text-black-400 leading-10'>Contact Me</h1>
        <p className='pt-2 text-lg font-normal text-gray-500'>Hi there, contact me to ask about anything you have in mind.</p>
        <div id='container_name' className='lg:flex lg:flex-row lg:justify-between md:flex-none sm:flex-none mt-10 gap-8'>
          <div className='w-full'>
            <label for="first_name" className='text-md text-gray-700 font-medium leading-6'>First name</label>
            <input id='first_name' name="first_name" type="text" placeholder="Enter your first name" required className='w-full p-2 border border-5 border-gray-300 text-gray-500 rounded-md mt-1'/>
          </div>
          <div className='w-full mt-5 lg:mt-0 md:mt-3 sm:mt-3'>
            <label for="last_name" className='text-md text-gray-700 font-medium leading-6'>Last name</label>
            <input id='last_name' name="last_name" type="text" placeholder="Enter your last name" required className='w-full p-2 border border-5 border-gray-300 text-gray-500 rounded-md mt-1'/>
          </div>
        </div>
        <div id='container_email' className='mt-5'>
          <label for="email" className='text-md text-gray-700 font-medium leading-6'>Email</label>
          <input id='email' name="email__address" type="email" placeholder="youremail@email.com" required className='w-full p-2 border border-5 border-gray-300 text-gray-500 rounded-md mt-1'/>
        </div>
        <div id='container_message' className='mt-5'>
          <label for="message" className='text-md text-gray-700 font-medium leading-6'>Message</label>
          <textarea id='message' name="comment" className='w-full h-full p-3 border border-5 border-gray-300 text-md text-gray-500 rounded-md mt-1 font-normal resize-none leading-6'>
            Send me a message and I'll reply you as soon as possible...
          </textarea>
        </div>
        <div id='container_checkbox' className='mt-5 flex flex-row gap-1'>
          <input id="checkbox" name="checkbox_base" type="checkbox" className='cursor-pointer w-100 h-11 border border-gray-100 bg-white-400'/>
          <label for="checkbox" className='w-100 p-2 text-md text-gray-700 font-normal leading-6 rounded-md'>{`You agree to providing your data to {name} who may contact you.`}</label>
        </div>
        <div id='container_button' className='mt-6'>
          <button id='btn__submit' type='button' className='w-full bg-blue-600 border border-1 border-blue-600 shadow-sm rounded-md p-3 hover:scale-[1.05]'>
            <h5 className='text-md text-white'>Send message</h5>
          </button>
        </div>        
      </form>
      <div id='footer2' className='flex flex-col items-left justify-center border-t-2 border-gray-200 mt-20 w-100'>
        <div className='flex flex-wrap gap-10 w-100 p-3 m-2'>
          <h5 className='pl-5 pr-5 text-lg font-semibold text-center'>Zuri<small className='text-5xl text-pink-700'>.</small>Internship</h5>
          <h5 className='pl-5 pr-5 text-md text-center text-gray-500 mt-6'>HNG Internship 9 Frontend Task</h5>
          <img src='./logo/zuri.jpg' alt='zuri_logo' className='pl-4 pr-5 w-25 h-10 mt-4'/>
        </div>       
      </div>
    </div>
  )
}

export default Contact
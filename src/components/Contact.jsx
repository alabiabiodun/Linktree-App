import React from 'react'

const Contact = () => {
  return (
    <div id='container' className='flex flex-col justify-center items-center border border-5 p-5 mt-5 mb-5 lg:ml-60 lg:mr-60 lg:mt-10 lg:mb-5 sm:m-10 md:m-20 rounded-xl w-100 h-100 bg-white-200 gap-4'>
      <form className='mt-20 mb-20 font-inter'>
        <h1 className='text-2xl font-semibold text-black-400 leading-10'>Contact Me</h1>
        <p className='pt-2 text-lg font-normal text-gray-500'>Hi there, contact me to ask about anything you have in mind.</p>
        <div id='container_name' className='flex flex-row justify-between mt-10 gap-8'>
          <div className='w-full'>
            <h5 className='text-md text-gray-700 font-medium leading-6'>First Name</h5>
            <input id='first_name' name="fname" type="text" placeholder="Enter your first name" required className='w-full p-2 border border-5 border-gray-300 text-gray-300 rounded-md mt-1'/>
          </div>
          <div className='w-full'>
            <h5 className='text-md text-gray-700 font-medium leading-6'>Last Name</h5>
            <input id='last_name' name="lname" type="text" placeholder="Enter your last name" required className='w-full p-2 border border-5 border-gray-300 text-gray-300 rounded-md mt-1'/>
          </div>
        </div>
        <div id='container_email' className='mt-5'>
          <h5 className='text-md text-gray-700 font-medium leading-6'>Email</h5>
          <input id='email' name="emailaddress" type="email" placeholder="youemail@email.com" required className='w-full p-2 border border-5 border-gray-300 text-gray-300 rounded-md mt-1'/>
        </div>
        <div id='container_message' className='mt-5'>
          <h5 className='text-md text-gray-700 font-medium leading-6'>Message</h5>
          <textarea id='message' name="comment" className='w-full p-2 border border-5 border-gray-300 text-md text-gray-500 rounded-md mt-1 font-normal leading-6'>
            Send me a message and I'll reply you as soon as possible...
          </textarea>
        </div>
        <div id='container_checkbox'>
          <input id="checkbox" name="checkbox_base" type="checkbox" className='cursor-pointer w-100 border border-gray-100 bg-white-400 mt-5'/>
          <label for="checkbox" className='w-100 p-2 text-md text-gray-700 font-normal leading-6 rounded-md'>{`You agree to providing your data to {name} who may contact you.`}</label>
        </div>
        <div id='container_button'>
          <button id='btn__submit' className='w-full bg-blue-600 border border-1 border-blue-600 shadow-sm mt-5 rounded-md p-3 text-white-700'>Send message</button>
        </div>
        
      </form>
    </div>
  )
}

export default Contact
import React from 'react'

export const Linktree = () => {
  return (
    <div id='container' className='flex flex-col justify-center items-center border border-5 p-10 mt-5 mb-5 lg:ml-80 lg:mr-80 lg:mt-10 lg:mb-10 sm:m-10 md:m-20 rounded-xl w-100 bg-white-200'>
        <div id='container_profile' className='hover:scale-[1.05]'>
            <img id='profile__img' src='./img/alabiabiodun.jpg' alt='profile_pix' className='w-50 h-40 rounded-full'  />
            <h5 id='twitter' className='text-center text-black-200 font-semibold p-2'>@AlabiAbiodun_O</h5>
            <h6 id='slack' className='hidden text-center text-black-200 font-semibold'>@alabiabiodun</h6>
        </div>
        <div id='container_links' className='flex flex-col justify-center items-center p-3 m-2 w-100 text-black-400 font-medium'>
            <div className='text-center w-4/5 h-auto border border-3 border-gray-200 rounded-xl shadow-xl hover:scale-[1.05] p-3 m-2 bg-gray-200'>
              <a id='btn__zuri' href='https://training.zuri.team/' rel="noreferrer">
                <h5 className='text-md'>Register for Zuri Training on Software Development and Product Design</h5>
              </a>
            </div>            
            <div className='text-center w-4/5 h-auto border border-3 border-gray-200 rounded-xl shadow-xl hover:scale-[1.05] p-3 m-2 bg-gray-200'>
              <a id='books' href=' http://books.zuri.team' rel="noreferrer">
                <h5 className='text-md'>Grow and advance your tech careers</h5>
                <h6 className='text-sm'>(Here, you find relevant books to train you on design and coding)</h6>
              </a>              
            </div>
            <div className='text-center w-4/5 h-auto border border-3 border-gray-200 rounded-xl shadow-xl hover:scale-[1.05] p-3 m-2 bg-gray-200'>
              <a id='book__python' href='https://books.zuri.team/python-for-beginners?ref_id=alabiabiodun' rel="noopener noreferrer">
                <h5 className='text-md'>Access Python books for Beginners at Zuri Store</h5>
                <h6 id='book_sale' className='text-sm'>(Available Books for Sale!)</h6>
              </a>
            </div>
            <div className='text-center w-4/5 h-auto border border-3 border-gray-200 rounded-xl shadow-xl hover:scale-[1.05] p-3 m-2 bg-gray-200'>
              <a id='pitch' href='https://background.zuri.team' rel="noreferrer">
                <h5 className='text-md'>Zuri Team</h5>
                <h6 className='text-sm'>(View Coders' Profile)</h6>
              </a>
            </div>
            <div className='text-center w-4/5 h-auto border border-3 border-gray-200 rounded-xl shadow-xl hover:scale-[1.05] p-3 m-2 bg-gray-200'>
              <a id='book__design' href='https://books.zuri.team/design-rules' rel="noreferrer">
                <h5 className='text-md'>Design Book</h5>
                <h6 className='text-sm'>(Free design book offered by Zuri)</h6>
              </a>
            </div>  
            
        </div>
    </div>
  )
}

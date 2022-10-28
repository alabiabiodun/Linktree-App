import React from 'react'

export const Linktree = () => {
  return (
    <div id='container' className='flex flex-col justify-center items-center border border-5 p-10 mt-10 lg:ml-80 lg:mr-80 lg:mt-10 lg:mb-10 sm:m-10 md:m-20 rounded-xl w-100 bg-gradient-to-r from-purple-400 to-yellow-200'>
        <div id='container_profile' className='hover:scale-[1.05]'>
            <img id='profile__img' src='./img/alabi.jpg' alt='profile_pix' className='w-50 h-40 rounded-lg'  />
            <h5 id='twitter' className='text-center'>@AlabiAbiodun_O</h5>
            <h6 id='slack' className='hidden text-center'>@alabiabiodun</h6>
        </div>
        <div id='container_links' className='flex flex-col justify-center items-center p-3 m-2 w-100'>
            <div className='text-center w-auto h-auto border border-3 border-sky-200 rounded-xl shadow-xl hover:scale-[1.05] p-3 m-2 bg-sky-200'>
              <a id='btn__zuri' href='https://training.zuri.team/' rel="noreferrer">
                <h5 className='text-md'>Register for Zuri Training on Software Development and Product Design</h5>
              </a>
            </div>            
            <div className='text-center w-auto h-auto border border-3 border-yellow-200 rounded-xl shadow-xl hover:scale-[1.05] p-3 m-2 bg-yellow-200'>
              <a id='books' href=' http://books.zuri.team' rel="noreferrer">
                <h5 className='text-md'>Grow and advance your tech careers</h5>
                <h6 className='text-sm'>(Here, you find relevant books to train you on design and coding)</h6>
              </a>
              
            </div>
            <div className='text-center w-auto h-auto border border-3 border-green-200 rounded-xl shadow-xl hover:scale-[1.05] p-3 m-2 bg-green-200'>
              <a id='book__python' href='https://books.zuri.team/python-for-beginners?ref_id=alabiabiodun' rel="noopener noreferrer">
                <h5 className='text-md'>Access Python books for beginners at Zuri Store</h5>
              </a>
            </div>
            <div className='text-center w-auto h-auto border border-3 border-blue-200 rounded-xl shadow-xl hover:scale-[1.05] p-3 m-2 bg-blue-200'>
              <a id='pitch' href='https://background.zuri.team' rel="noreferrer">
                <h5 className='text-md'>Zuri Team</h5>
                <h6 className='text-sm'>(Coders' Profile)</h6>
              </a>
            </div>
            <div className='text-center w-auto h-auto border border-3 border-indigo-200 rounded-xl shadow-xl hover:scale-[1.05] p-3 m-2 bg-indigo-300'>
              <a id='book__design' href='https://books.zuri.team/design-rules' rel="noreferrer">
                <h5 className='text-md'>Design Book</h5>
                <h6 className='text-sm'>(Free design book offered by Zuri)</h6>
              </a>
            </div>    
            
        </div>
    </div>
  )
}

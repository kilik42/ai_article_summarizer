import {useState, useEffect} from 'react'

import {copy, linkIcon, loader, tick} from '../assets'


const Demo = () => {
  return (
    <section className='mt-16 w-full max-w-xl'>
      {/* search */}
      <div className='flex flex-col w-full gap-2'>
        <from className="relative flex justify-center items-center"
        onSubmit={e => e.preventDefault()}
        >
            <img 
            src={linkIcon}
            alt="link icon" 
            className='absolute left-0 my-2 ml-3 w-5'

            />
            <input 
             type="url"
             placeholder = "enter a URL"
             value=""
             onChange = {() => {}}
             required
             className='url_input peer'
             />
             <button
             type="submit"
              className='submit_btn'
             >

             </button>
        </from>
        
      </div>
      
    </section>
  )
}

export default Demo

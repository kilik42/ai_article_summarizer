import {logo} from '../assets'

const Hero = () => {
  return (
    <header>
    <nav>
       <header className="w-full flex justify-center items-center flex-col">

        <nav className="flex justify-between items-center w-full mb-10 pt-3">
              <img src={logo } alt="sums logo" className='w-28 object-contain'/>

              <button 
              type="button"
              onClick={() => window.open('https://github.com/kilik42/ai_summarizer', '_blank')}
              className='black_btn'
               >
                github
              </button>
        </nav>
        
       </header>
      
    </nav>
    <h1 className="head_text">
      summmarize articles with <br
      className='max-md:hidden'
      />
      <span className='orange_gradient'>Open AI GPT-4</span>
    </h1>
    <h2 className="desc">
      Summarize articles with the power of Open AI's GPT-4. <br/>
      <br/>
      <span className='orange_gradient'>Note:</span> This is a demo, and the results are not always accurate. <br/>
      <br/>
      
    </h2>
    </header>
  )
}

export default Hero

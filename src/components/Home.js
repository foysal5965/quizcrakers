import React from 'react'
import Topics from './Topics'




const Home = () => {
  return (
    <div className='px-4 py-16 justify-items-center mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24'>
      <div className='flex flex-col items-center justify-between lg:flex-row'>
        <div className='mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0'>
          <div className='max-w-xl mb-6 lg:mt-8'>
          
            <h2 className='max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
              Play quiz for <br className='hidden md:block' /> increase your IQ{' '}
              <span className='inline-block text-blue-400'>more and more</span>
            </h2>
            <p className='text-base text-gray-700 md:text-lg'>
            Quizzes encourage pupils' self awareness of progress and self assessment. By taking quizzes, pupils get instant feedback on their responses. And this can help them identify areas they need to develop themselves and highlight progress for them to be proud of.
            </p>
          </div>
          <div className='flex flex-col items-center md:flex-row'>
            
          
          </div>
        </div>
        <div className='relative lg:w-1/2 '>
          <div className='w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96'>
            
          </div>
        </div>
      </div>
      <Topics></Topics>
    </div>
    
  )
}

export default Home

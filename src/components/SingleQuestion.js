import React from 'react';
import { toast } from 'react-toastify';
import Option from './Option';
import './single.css'



const SingleQuestion = ({ questiones ,name}) => {
   const { id, options, question, correctAnswer } = questiones
   console.log(name);
   const optionClicked = (option) => {

      if (option === correctAnswer) {
         
      toast.success('Yeh! you select the correct answer', {autoClose:false})
      }
      else{
         toast('This is not The Correct Answer')
      }
   
   }
   const notify=()=>{
      toast(correctAnswer)
   }
  
   
   return (
  
         <div className='question shadow-xl bg-white-400 mt-20'>
            
            <h1 className='flex items-between  text-blue-700 text-xl '>{question} <button onClick={()=>notify()} className='mx-8'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
               <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
               <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            </button>
            </h1>
            <div className='grid sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2 gap-2'>
               {
                  options.map(option => <Option
                     option={option}
                     optionClicked={optionClicked}
                  ></Option>)
               }
            </div>

         </div>

      
   );
};

export default SingleQuestion;
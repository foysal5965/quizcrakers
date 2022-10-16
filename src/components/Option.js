import React from 'react';
import './option.css'
const Option = ({option , optionClicked}) => {
    return (
    //  <ul className='ul grid grid-cols-2'>
    //   <div>
    //  
    //   </div>
    //  </ul>
    <div >
      <ul>
      <li onClick={()=>optionClicked(option)} className='option hover:bg-gray-200 sm:p-20 bg-gray-100 text-blue-500'>
         {option}
       </li>
      </ul>
    </div>
    );
};

export default Option;
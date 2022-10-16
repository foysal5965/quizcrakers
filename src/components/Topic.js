import React from 'react';
import{ Link} from 'react-router-dom'
const Topic = ({topic}) => {
    const{id,logo,name, total}=topic
    return (
        <div className="mb-12 max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <img className="h-48 w-full object-cover md:h-full md:w-48 bg-slate-600" src={logo}alt="Modern building architecture"/>
          </div>
          <div className="p-8">
            <div className="uppercase tracking-wide  text-indigo-500 font-lg text-5xl">{name}</div>
            <p className="mt-2 text-slate-500">Total:{total}</p>
            <Link to={`/topic/${id}`} className="block mt-1 text-lg leading-tight font-medium text-white rounded-md p-2 hover:underline bg-blue-500 ">Answer The Quiz</Link>
          
          </div>
        </div>
      </div>
    );
};

export default Topic;
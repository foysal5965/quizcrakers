import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Topic from './Topic';

const Topics = () => {
    const topics = useLoaderData()
    const{data}=topics
    
    return (
 <div className='mt-20 grid  sm:grid-cols-1  md:grid-cols-1 lg:grid-cols-2'>
    {
        data.map(topic=><Topic 
        key={data.id}
        topic={topic}
        ></Topic>)
    }
 </div>
    );
};

export default Topics;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import SingleQuestion from './SingleQuestion';

const Questions = () => {
    const loadquestions =useLoaderData()
    const{data}=loadquestions;
    const {questions, name}=data;
    console.log(questions);
    return (
        <div >
        <h2 className='text-3xl font-bold'>Quiz Of {name}</h2>
            {
                questions.map(questiones=><SingleQuestion 
                key={questiones.id}
                questiones={questiones}
                
                ></SingleQuestion>)
            }
        </div>
    );
};

export default Questions;
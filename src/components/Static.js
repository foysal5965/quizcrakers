import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart ,ResponsiveContainer } from 'recharts';
const Static = () => {
    const loadData = useLoaderData()
    const {data}=loadData
    console.log(data);
    return (
        <div>
            <h1 className='font-bold text-3xl'>State</h1>
            <LineChart 
            width={500}
            height={400}
            data ={data}
            ><Line type="monotone" dataKey="total" stroke="#82ca9d" />
            <XAxis dataKey="id" />
          <YAxis />
        <Tooltip></Tooltip>
          </LineChart>
        
        
        </div>
    );
};

export default Static;
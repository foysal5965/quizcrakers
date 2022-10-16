import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Topic from './Topic';



const Main = () => {

    const numb=234;
    return (
        <div>
            <Header></Header>
           
            <Outlet></Outlet>
            
        </div>
    );
};

export default Main;
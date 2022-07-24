import React from 'react';
import Banner from './Banner';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <Navbar/>
            <Banner />
            <h1 className='text-xl text-primary'>This is Home page</h1>
        </div>
    );
};

export default Home;
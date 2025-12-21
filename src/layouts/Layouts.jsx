import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';

const Layouts = () => {
    return (
        <div className='bg-gray-200'>
            <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className='flex-1 max-w-screen-xl  mx-auto w-full px-4 md:px-8 lg:px-15 py-4 md:py-8 lg:py-12 mt-14'>
                <Outlet />
            </div>
            <Footer />
        </div>
        </div>
    );
};

export default Layouts;
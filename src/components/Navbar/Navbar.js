import React from 'react';

const Navbar = () => {
    const date = new Date().toLocaleDateString()
    return (
        <nav className='md:flex justify-around py-6 navbar px-3'>
            <div>ACA</div>
            <div className='text-2xl'>Welcome Asian-Countries App</div>
            <div>{date}</div>
        </nav>
    );
};

export default Navbar;
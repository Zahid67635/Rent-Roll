import React from 'react';
import cat from '../assets/notfound.json'
import Lottie from 'lottie-react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='w-1/2 mx-auto'>
            <Lottie animationData={cat} loop={true}></Lottie>
            <div className='text-center'><Link to='/'><button className='btn btn-link'>Back to home</button></Link></div>
        </div>
    );
};

export default Error;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PrimaryButton from '../../Components/PrimaryButton';
import Carousel from './Carousel';
import Reviews from './Reviews';

const Details = () => {
    const { owner, Price, space, photo, rooms, address, ownerPhoto, details } = useLoaderData()
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    const totalPrice = Price + 950 + 1000
    return (
        <div className='mb-10'>
            <Carousel></Carousel>
            <div className='md:grid grid-cols-3 md:mx-16 gap-5 mt-10'>
                <div className='col-span-2 p-6'>
                    <h1 className='text-3xl text-green-500 mb-4 font-semibold'>House Details</h1>
                    <div className='flex justify-between'>
                        <div className='p-1'>
                            <h3 className='text-xl'>Location: {address}</h3>
                            <small>{rooms.bed} Bedrooms, {rooms.bathroom} Washrooms, {rooms.belcony} Balcony</small> <br /> <br />
                            <h4 className='font-bold text-sm'>Total Space-{space} Sq-ft</h4>
                        </div>
                        <div className='md:mr-20 mr-1'>
                            <img className='w-14 h-14 rounded-full mx-auto' src="https://i.ibb.co/KDzX1N8/zahid-pic.png" alt="" />
                            <h2 className='font-semibold text-center'>{owner}</h2>
                        </div>
                    </div>
                    <div className="divider md:mr-20"></div>
                    {/* ----------------Room feature--------- */}
                    <section className="text-gray-800">
                        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                            <div className="flex flex-col md:w-3/4 p-2text-black">
                                <div className="flex space-x-2 sm:space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                    <div className="space-y-2">
                                        <p className="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
                                        <p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2 sm:space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                    <div className="space-y-2">
                                        <p className="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
                                        <p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2 sm:space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                    <div className="space-y-2">
                                        <p className="text-lg font-medium leading-snug">Lorem ipsum dolor sit amet</p>
                                        <p className="leading-snug">Praesentium ea et neque distinctio quas eius repudiandae quaerat obcaecati voluptatem similique!</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="divider"></div>
                    <section>
                        <h1 className='font-semibold text-2xl text-green-500'>About:</h1>
                        <div>
                            <p>{details}</p>
                        </div>
                    </section>
                    {/* -------Features end----- */}
                    <section>
                        <h1 className='text-2xl font-semibold mb-5 p-2'>Reviews:</h1>
                        <div className='flex gap-2'>

                            <Reviews></Reviews>
                            <Reviews></Reviews>
                        </div>
                    </section>

                </div>
                <div className='mt-10 md:mt-40'>
                    <div className='border-solid border-2 rounded-xl p-4 w-full shadow-lg'>
                        <h1 className='text-gray-900 text-3xl title-font font-medium mb-2'>
                            ৳{Price}/ <span className='font-thin'>month</span>
                        </h1>
                        <div className='flex gap-1 mb-2'>
                            <p>Ratings</p>{' '}
                            <span>4.8 (10 reviews)</span>
                        </div>
                        <p>Date</p>
                        <div className='flex justify-center items-center p-2 border mt-1 mb-2'>
                            <div>{currentDate}</div>

                        </div>

                        <div className='flex border-t border-gray-200 py-2'>
                            <span className='text-gray-500'>Rent Cost</span>
                            <span className='ml-auto text-gray-900'>৳{Price}</span>
                        </div>
                        <div className='flex border-t border-gray-200 py-2'>
                            <span className='text-gray-500'>Gas Bill</span>
                            <span className='ml-auto text-gray-900'>৳950</span>
                        </div>
                        <div className='flex border-t border-gray-200 py-2'>
                            <span className='text-gray-500'>Security and Others</span>
                            <span className='ml-auto text-gray-900'>৳1000</span>
                        </div>
                        <div className='flex border-t border-b mb-6 border-gray-200 py-2'>
                            <span className='text-gray-900 font-bold'>Total</span>
                            <span className='ml-auto text-gray-900'>৳{totalPrice}</span>
                        </div>
                        <div className='mt-6 mb-2'>
                            <PrimaryButton
                                type='submit'
                                classes='w-full px-4 py-2 tracking-wide transition-colors duration-300 transform rounded-md'
                            >
                                Confirm
                            </PrimaryButton>
                        </div>
                        <p className='text-center text-gray-400 mb-6'>
                            You won't be charged yet!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;
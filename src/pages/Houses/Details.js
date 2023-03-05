import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Components/PrimaryButton';
import Spinner from '../../Components/Spinner';
import { AuthContext } from '../../Contexts/ContextProvider';
import Carousel from './Carousel';
import Reviews from './Reviews';

const Details = () => {
    const { user } = useContext(AuthContext)
    const { owner, Price, space, photos, rooms, address, ownerPhoto, details, features } = useLoaderData()
    const [data, setData] = useState({})
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    const totalPrice = Price + 950 + 1000
    const email = user?.email
    const navigate = useNavigate()
    const houseInfo = {
        owner, Price, space, photos, rooms, address, ownerPhoto, details, email
    }
    useEffect(() => {
        fetch(`http://localhost:5000/bookings?owner=${owner}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, [owner])
    const handleConfirm = () => {
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(houseInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/')
                toast.success('Successfully Booked!');

            })
            .catch(er => console.log(er))
    }
    return (
        <div className='mb-10'>
            <Carousel photos={photos}></Carousel>
            <div className='md:grid grid-cols-3 md:mx-16 gap-5 mt-10'>
                <div className='col-span-2 p-6'>
                    <h1 className='text-3xl text-green-500 mb-4 font-semibold'>House Details</h1>
                    <div className='flex justify-between'>
                        <div className='p-1'>
                            <h3 className='text-xl'>Location: {address}</h3>
                            <small>{rooms?.bed} Bedrooms, {rooms?.bathroom} Washrooms, {rooms?.belcony} Balcony</small> <br /> <br />
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
                        <h1 className='text-2xl font-semibold text-green-500 mb-3'>Available features :</h1>
                        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
                            <div className="flex flex-col md:w-3/4 p-2text-black">
                                <div className="flex space-x-2 sm:space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                    <div className="space-y-2">
                                        <p className="text-lg font-medium leading-snug">{features?.CCTV}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2 sm:space-x-4 my-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                    <div className="space-y-2">
                                        <p className="text-lg font-medium leading-snug">{features?.View}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2 sm:space-x-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                    <div className="space-y-2">
                                        <p className="text-lg font-medium leading-snug">{features?.Lift}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2 sm:space-x-4 my-3">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="flex-shrink-0 w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                                    </svg>
                                    <div className="space-y-2">
                                        <p className="text-lg font-medium leading-snug">{features?.Gas}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <div className="divider"></div>
                    <section>
                        <h1 className='font-semibold text-2xl text-green-500'>About :</h1>
                        <div>
                            <p>{details}</p>
                        </div>
                    </section>
                    {/* -------Features end----- */}
                    <section className='mt-10'>
                        <div className="relative flex">
                            <textarea
                                id="id-01"
                                type="text"
                                name="id-01"
                                placeholder="Write your message"
                                rows="3"
                                className="relative w-3/4 px-4 py-1 text-xl placeholder-transparent transition-all border rounded outline-none peer border-lime-600 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-zinc-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                            ></textarea>
                            <label
                                for="id-01"
                                className="absolute left-2 -top-2 z-[1] px-2 text-md text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-md peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-zinc-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                            >
                                Comment Your Review
                            </label>
                            <button className={`btn btn-success ml-2 md:px-6 hover:bg-green-500 ${user ? '' : 'btn-disabled'} text-white`}>Post</button>
                        </div>

                        <div className=''>
                            <h1 className='text-2xl font-semibold text-green-500 mb-2 py-2'>Reviews :</h1>
                            <div className='flex gap-2'>

                                <Reviews></Reviews>
                                <Reviews></Reviews>
                            </div>
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
                            {data?.owner === owner ? <p className='font-semibold text-center'>Already Booked!!</p> : <label htmlFor="my-modal-3" className="hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 text-white w-full px-4 py-1 tracking-wide transition-colors duration-300 transform rounded-md btn">Confirm</label>}

                        </div>
                        <p className='text-center text-gray-400 mb-6'>
                            You won't be charged yet!
                        </p>
                    </div>
                </div>
            </div>

            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">Are You Sure About Your Confirmation!</h3>
                    <p className="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                    <div className="modal-action">
                        <PrimaryButton classes="px-2 rounded-md"
                            handler={handleConfirm}
                        >Confirm
                        </PrimaryButton>
                        <label htmlFor="my-modal-3" className="btn btn-sm">No</label>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Details;
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../Components/PrimaryButton';
import { AuthContext } from '../../Contexts/ContextProvider';
import { FaLandmark, FaLocationArrow } from "react-icons/fa";
const House = ({ info }) => {
    const { owner, Price, space, photos, rooms, address, ownerPhoto, id } = info
    const { loadingState } = useContext(AuthContext)
    return (
        <div className="overflow-hidden rounded bg-white text-slate-500 shadow-lg shadow-slate-300 transition ease-in-out delay-150 hover:-translate-y-3 duration-300 relative">
            <span className="absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 bg-violet-600 text-white">New</span>
            {/*  <!-- Header--> */}
            <div className="p-4 bg-slate-200">
                <header className="flex gap-4">
                    <a
                        href="#"
                        className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                    >
                        <img
                            src="https://i.pravatar.cc/48?img=26"
                            alt="user name"
                            title="user name"
                            width="48"
                            height="48"
                            className="max-w-full rounded-full"
                        />
                    </a>
                    <div>
                        <h3 className="text-md font-medium text-slate-700">
                            {owner}
                        </h3>
                        <p className="text-sm text-slate-600"> jun 3 2023</p>
                    </div>
                </header>
            </div>
            {/*  <!-- Image --> */}
            <figure>
                <img
                    src={photos ? photos[0] : 'https://i.ibb.co/nfWtVVw/exterior.jpg'}
                    alt="card image"
                    className="aspect-video w-full"
                />
            </figure>
            {/*  <!-- Body--> */}
            <div className="p-6 font-bold">
                <div className=''>
                    <div className='flex justify-between mb-3'>
                        <div className='flex gap-1 items-center'>
                            <FaLandmark></FaLandmark>
                            <p> {space} sq-ft</p>
                        </div>
                        <div className='flex gap-1 items-center'>
                            <FaLocationArrow />
                            <p><small>{address}</small></p>
                        </div>

                    </div>
                    <p>Bedroom: {rooms.bed} , Bathroom: {rooms.bathroom} , Belcony: {rooms.belcony}</p>
                </div>
                <h1 className='text-xl'>Price: <span className='text-xl font-extrabold'>৳</span>{Price}</h1>
            </div>
            {/*  <!-- Action icon buttons --> */}
            <div className="flex justify-between items-center gap-2 p-2 pt-0 mx-4 mb-2">
                <div>
                    <Link to={`/homeDetails/${id}`}><PrimaryButton classes='px-8 py-1 rounded'>Details</PrimaryButton></Link>
                </div>
                <div>
                    <button className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-zinc-500 transition duration-300 hover:bg-zinc-100 hover:text-zinc-600 focus:bg-zinc-200 focus:text-zinc-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-zinc-300 disabled:shadow-none disabled:hover:bg-transparent">
                        <span className="relative only:-mx-6">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                role="graphics-symbol"
                                aria-labelledby="title-81 desc-81"
                            >
                                <title id="title-81">Icon title</title>
                                <desc id="desc-81">
                                    A more detailed description of the icon
                                </desc>
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>
        </div>


    );
};

export default House;
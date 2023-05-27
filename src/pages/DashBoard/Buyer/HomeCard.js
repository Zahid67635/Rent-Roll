import React from 'react';
import { FaLandmark, FaLocationArrow } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PrimaryButton from '../../../Components/PrimaryButton';

const HomeCard = ({ info }) => {
    const { owner, Price, space, photos, rooms, address, ownerPhoto, id } = info
    return (
        <div className="overflow-hidden rounded bg-white text-slate-500 shadow-lg shadow-slate-300 transition ease-in-out delay-150 hover:-translate-y-2 duration-300 md:p-0 p-2">

            {/*  <!-- Header--> */}
            <div className="p-4 bg-slate-200">
                <header className="flex gap-4">
                    <a
                        href="#"
                        className="relative inline-flex h-12 w-12 items-center justify-center rounded-full text-white"
                    >
                        <img
                            src={ownerPhoto ? ownerPhoto : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6v-Quj0rUbKfkYkO5xry7QsyV_3dNemjlbw&usqp=CAU"}
                            alt="user name"
                            title={owner}
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
                    src={photos[0]}
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
                    <button className='btn btn-outline btn-error btn-sm'>Cancel</button>
                </div>
            </div>
        </div>


    );
};

export default HomeCard;
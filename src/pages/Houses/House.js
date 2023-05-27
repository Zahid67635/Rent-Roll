import React, { useContext, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Components/PrimaryButton';
import { FaLandmark, FaLocationArrow } from "react-icons/fa";
import { useState } from 'react';
import { AuthContext } from '../../Contexts/ContextProvider';
import { FaHeart } from "react-icons/fa";
import { toast } from 'react-hot-toast';

const House = ({ info, like }) => {
    const { owner, Price, space, photos, rooms, Location, ownerPhoto, id } = info
    const { user } = useContext(AuthContext)
    const [click, setClick] = useState(like ? like : false)
    const [status, setStatus] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/login'
    useEffect(() => {
        fetch(`https://rent-roll-server-zahid67635.vercel.app/bookings?id=${id}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setStatus(true)
                }
            })
            .catch(er => console.log(er))
    }, [id])
    const addToWishlist = () => {
        if (user) {
            const likedHouses = {
                owner, Price, space, photos, rooms, Location, ownerPhoto, id,
                email: user?.email
            }
            fetch('https://rent-roll-server-zahid67635.vercel.app/wishlist', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(likedHouses)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setClick(true)
                    toast.success('Added To WishList!');

                })
                .catch(er => console.log(er))
        }
        else {
            navigate(from, { replace: true })
        }

    }
    const removeFromWishlist = () => {
        fetch(`https://rent-roll-server-zahid67635.vercel.app/wishlist/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast.success('Removed From WishList!');

            })
            .catch(er => console.log(er))
    }
    return (
        <div className="overflow-hidden rounded bg-white text-slate-500 shadow-lg shadow-slate-300 transition ease-in-out delay-150 hover:-translate-y-3 duration-300 relative mb-3">
            <span className={`absolute top-0 right-0 px-5 py-1 text-xs tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 ${status ? 'bg-red-400' : 'bg-green-500'} text-white`}>{status ? 'Booked' : 'Available'}</span>
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
                        <p className="text-sm text-slate-600"> Jan 3, 2023</p>
                    </div>
                </header>
            </div>
            {/*  <!-- Image --> */}
            <figure>
                <img
                    src={photos ? photos[0] : 'https://i.ibb.co/nfWtVVw/exterior.jpg'}
                    alt="card_pic"
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
                            <p><small>{Location}</small></p>
                        </div>

                    </div>
                    <p>Bedroom: {rooms.bed} , Bathroom: {rooms.bathroom} , Balcony: {rooms.belcony}</p>
                </div>
                <h1 className='text-xl'><span className='text-xl font-extrabold'>৳</span>{Price}/month</h1>
            </div>
            {/*  <!-- Action icon buttons --> */}
            <div className="flex justify-between items-center gap-2 p-2 pt-0 mx-4 mb-2">
                <div>
                    <Link to={`/homeDetails/${id}`}><PrimaryButton classes='px-8 py-1 rounded'>Details</PrimaryButton></Link>
                </div>
                <div>
                    <button onClick={() => {
                        setClick(!click)
                        if (!click) {
                            addToWishlist()
                        }
                        else {
                            removeFromWishlist()
                        }
                    }}
                        className="inline-flex h-10 items-center justify-center gap-2 justify-self-center whitespace-nowrap rounded px-5 text-sm font-medium tracking-wide text-zinc-500 transition duration-300 hover:bg-zinc-100 hover:text-zinc-600 focus:bg-zinc-200 focus:text-zinc-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:text-zinc-300 disabled:shadow-none disabled:hover:bg-transparent">
                        <span className="relative only:-mx-6">
                            <FaHeart className={`text-3xl ${click ? 'text-red-500' : 'text-gray-400'}`} />
                        </span>
                    </button>
                </div>
            </div>
        </div>


    );
};

export default House;
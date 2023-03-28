import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from '../../Components/PrimaryButton';
import SmallSpinner from '../../Components/SmallSpinner';
import { AuthContext } from '../../Contexts/ContextProvider';
import Lottie from 'lottie-react';
import anim from '../../assets/addProp.json';

const AddProperty = () => {
    const photos = []
    const navigate = useNavigate()
    const [data, setData] = useState({})
    const [loading, setLoading] = useState(true)
    const [spin, setSpin] = useState(false)
    const { user } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        setSpin(true)
        const form = e.target
        const locat = form.location.value.trim()
        const Location = locat.charAt(0).toUpperCase() + locat.slice(1).toLowerCase();
        const address = form.address.value.trim().toLowerCase()
        const space = form.space.value
        const bed = form.bed.value
        const bathroom = form.bathroom.value
        const belcony = form.balcony.value
        const Price = form.price.value
        const details = form.details.value
        const id = Math.floor((Math.random() * 999) + 100)
        const pics = form.files.files
        const apiKey = process.env.REACT_APP_imgBB_Key
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${apiKey}`
        const formData = new FormData()
        for (let i = 0; i < pics.length; i++) {
            formData.append('image', pics[i])
            fetch(url, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(imgData => {
                    const imgUrl = imgData.data.display_url
                    console.log(imgUrl)
                    photos.push(imgUrl)
                    setLoading(false)
                    setSpin(false)
                })
                .catch(er => console.log(er))
        }
        const info = {
            Location,
            address,
            space,
            rooms: {
                bed, bathroom, belcony
            },
            Price,
            details,
            owner: user?.displayName,
            email: user?.email,
            ownerPhoto: user?.photoURL,
            id: String(id),
            photos
        }
        setData(info)
    }

    const handleConfirm = () => {
        saveProperties(data)
    }
    const saveProperties = (data) => {
        fetch('https://rent-roll-server.vercel.app/allProperties', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                navigate('/')
            })
            .catch(er => console.log(er))
    }

    return (
        <div className=''>
            <h1 className='font-semibold text-3xl text-center p-2'>Give Your Property Details</h1>
            <div className='md:flex items-start'>
                <div className="hero">
                    <div className="md:mt-2">

                        <div className="card md:w-full md:max-w-md shadow-2xl bg-base-100">
                            <form onSubmit={handleSubmit} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">District</span>
                                    </label>
                                    <input type="text" name="location" placeholder="eg: Dhaka" className="input input-bordered input-sm" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Full Address</span>
                                    </label>
                                    <input type="text" name="address" placeholder="eg: 51, Nazimuddin Road,Dhaka" className="input input-bordered input-sm" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Space Of Your House</span>
                                    </label>
                                    <input type="number" name="space" placeholder="eg: 900" className="input input-bordered input-sm" required />
                                </div>
                                <div className="flex gap-3">
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text font-semibold">Bed-Room</span>
                                        </label>
                                        <input type="number" name="bed" placeholder="" className="input input-bordered w-20 md:w-24 input-sm" required />
                                    </div>
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text font-semibold">Bath-Room</span>
                                        </label>
                                        <input type="number" name="bathroom" placeholder="" className="input input-bordered w-20 md:w-24 input-sm" required />
                                    </div>
                                    <div className="">
                                        <label className="label">
                                            <span className="label-text font-semibold">Balcony</span>
                                        </label>
                                        <input type="number" name="balcony" placeholder="" className="input input-bordered w-20 md:w-24 input-sm" />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Price</span>
                                    </label>
                                    <input type="number" name="price" placeholder="eg: 7000" className="input input-bordered input-sm" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text font-semibold">Details About House</span>
                                    </label>
                                    <textarea placeholder="Type house details" name="details" className="textarea textarea-bordered textarea-md w-full " required></textarea>
                                </div>
                                <div className="form-control">
                                    <fieldset className="w-full space-y-1 text-gray-800">
                                        <label htmlFor="files" className="block text-sm font-medium">Photos <span className='text-red-400'>(Max 4 Photos)</span></label>
                                        <div className="">
                                            <input type="file" name='files' multiple="multiple" accept="image/jpeg, image/png, image/jpg" className="md:px-8 px-1 py-6 border-2 border-dashed rounded-md border-gray-300 text-gray-600 bg-gray-100" required />

                                        </div>
                                    </fieldset>
                                </div>
                                <div className="form-control mt-6">

                                    {loading ?
                                        <button type='submit' className="btn btn-outline">
                                            {spin ? <SmallSpinner></SmallSpinner> : <p>ADD</p>}
                                        </button>
                                        :
                                        <PrimaryButton classes="py-2 rounded-md"
                                            handler={handleConfirm}
                                        >Confirm
                                        </PrimaryButton>}

                                </div>
                            </form>
                        </div>

                    </div>
                </div >
                <div className='w-3/4 mx-auto mt-3 hidden md:block'>
                    <Lottie animationData={anim} loop={true}></Lottie>
                </div>
            </div>

        </div >
    );
};

export default AddProperty;
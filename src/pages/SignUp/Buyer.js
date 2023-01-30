import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/ContextProvider';

const Buyer = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser, updateUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const [signUpError, setSignUpError] = useState('');
    const handleSignUp = (data) => {
        setSignUpError('');
        const name = data.username
        const email = data.email
        const contact = data.contact
        const password = data.password
        const usertype = data.usertype
        const bio = data.bio
        const image = data.userimage[0]
        const apiKey = process.env.REACT_APP_imgBB_Key
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${apiKey}`
        const formData = new FormData()
        formData.append('image', image)
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                const imgURL = imgData.data.display_url
                createUserProfile(imgURL)

            })
            .catch(er => console.log(er))

        const createUserProfile = (imgURL) => {
            createUser(email, password)
                .then(res => {
                    const user = res.user;
                    const updateInfo = {
                        displayName: name,
                        photoURL: imgURL
                    }

                    updateUser(updateInfo)
                        .then(() => {
                            navigate(from, { replace: true })
                        })
                        .catch(err => console.log(err));

                    const userInfo = {
                        name,
                        photoURL: imgURL,
                        contact,
                        email,
                        usertype,
                        bio
                    }

                    saveUser(userInfo)
                    data.target.reset()

                })
                .catch(er => {
                    console.log(er)
                    setSignUpError(er.message)
                })
        }

    }
    const saveUser = (userInfo) => {
        const user = { ...userInfo };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }
    return (
        <div className='w-3/4 mx-auto mt-6 mb-16'>
            <h1 className='text-3xl text-center font-bold mb-2'>Create Your Rent-Roll Account</h1>
            <div className="divider w-1/2 mx-auto"></div>
            <section className="p-6 bg-gray-100 text-gray-900 shadow-xl">
                <form onSubmit={handleSubmit(handleSignUp)} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-bold text-xl">Personal Information</p>
                            <p className="text-xs">Give your valid information so that we can communicate with you.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label for="firstname" className="text-sm font-semibold">First name</label>
                                <input {...register("firstName")} type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900 p-1 mt-2" required />

                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="lastname" className="text-sm font-semibold">Last name</label>
                                <input {...register("lastName")} type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="email" className="text-sm font-semibold">Email</label>
                                <input {...register("email", { required: 'Email is required' })} type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" />
                                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="contact" className="text-sm font-semibold">Contact No.</label>
                                <input {...register("contact", { required: 'Phone number is required' })} type="tel" placeholder="+880" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" />
                                {errors.email && <p className='text-red-600'>{errors.email?.message}</p>}
                            </div>
                            <div className="col-span-full">
                                <label for="address" className="text-sm font-semibold">Address</label>
                                <input {...register("address", { required: 'Address is required' })} type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" />
                            </div>

                            <div className="col-span-full sm:col-span-2">
                                <label for="city" className="text-sm font-semibold">City</label>
                                <input {...register("city", { required: 'city is required' })} type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="state" className="text-sm font-semibold">State / Province</label>
                                <input {...register("state")} type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="zip" className="text-sm font-semibold">ZIP / Postal</label>
                                <input {...register("zip")} type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" />
                            </div>
                        </div>
                    </fieldset>
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-bold text-xl">Profile</p>
                            <p className="text-xs mb-3">Give your profile infos and make a valid account.</p>

                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label for="username" className="text-sm font-semibold">Username</label>
                                <input {...register("username", { required: 'Username is required' })} type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="password" className="text-sm font-semibold">Password</label>
                                <input {...register("password", {
                                    required: 'Password is required', minLength: { value: 6, message: 'Password must be 6 character or long' }
                                })} type="password" placeholder="Give minimum 8 char Password" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" />
                                {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                            </div>

                            <div className="col-span-full">
                                <label for="bio" className="text-sm font-semibold">Bio</label>
                                <textarea {...register("bio")} placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900"></textarea>
                            </div>
                            <div className="form-control w-full max-w-xs col-span-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Upload Your Photo</span>
                                    <span className="label-text-alt font-semibold">Size less than 1MB</span>
                                </label>
                                <input {...register("userimage", { required: 'Photo is required' })} type="file" className="file-input sm:file-input-sm file-input-bordered w-full max-w-xs" />
                                {errors.userimage && <p className='text-red-600'>{errors.userimage?.message}</p>}
                            </div>
                            <div className="relative my-4 md:w-60">
                                <select
                                    {...register("usertype", { required: 'Type is required' })}

                                    className="peer relative h-10 w-full appearance-none rounded border border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-zinc-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                                >
                                    <option value="" disabled selected>Are You Buyer Or Owner?</option>
                                    <option value="buyer">Buyer</option>
                                    <option value="owner">Owner</option>
                                </select>
                                <label
                                    for="usertype"
                                    className="pointer-events-none absolute top-2.5 left-2 z-[1] px-2 text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-zinc-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                                >
                                    Select User Type
                                </label>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="pointer-events-none absolute top-2.5 right-2 h-5 w-5 fill-slate-400 transition-all peer-focus:fill-zinc-500 peer-disabled:cursor-not-allowed"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                    aria-labelledby="title-04 description-04"
                                    role="graphics-symbol"
                                >
                                    <title id="title-04">Arrow Icon</title>
                                    <desc id="description-04">Arrow icon of the select list.</desc>
                                    <path
                                        fillRule="evenodd"
                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </div>
                            <div className="col-span-full">
                                <div className="flex items-center space-x-2">
                                    <button type="submit" className="px-4 py-2 border rounded-md border-gray-800">Create Account</button>
                                </div>
                                {
                                    signUpError ? <p className='text-red-600'>{signUpError}</p> : ''
                                }
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};
export default Buyer;

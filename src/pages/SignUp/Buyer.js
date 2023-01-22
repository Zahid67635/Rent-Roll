import React from 'react';

const Buyer = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const fname = form.firstname.value
        const lname = form.lastname.value
        const name = fname + ' ' + lname
        const email = form.email.value
        const contact = form.contact.value
        const password = form.password.value
        const address = form.address.value
        const city = form.city.value
        const username = form.username.value
        const type = 'buyer'

        form.reset()

    }
    return (
        <div className='w-3/4 mx-auto mt-6 mb-16'>
            <h1 className='text-3xl text-center font-bold mb-2'>Registration for Buyer Account</h1>
            <div className="divider w-1/2 mx-auto"></div>
            <section className="p-6 bg-gray-100 text-gray-900 shadow-xl">
                <form novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-2 col-span-full lg:col-span-1">
                            <p className="font-bold text-xl">Personal Information</p>
                            <p className="text-xs">Give your valid information so that we can communicate with you.</p>
                        </div>
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label for="firstname" className="text-sm font-semibold">First name</label>
                                <input id="firstname" type="text" placeholder="First name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 border-gray-300 text-gray-900 p-1 mt-2" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="lastname" className="text-sm font-semibold">Last name</label>
                                <input id="lastname" type="text" placeholder="Last name" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="email" className="text-sm font-semibold">Email</label>
                                <input id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="contact" className="text-sm font-semibold">Contact No.</label>
                                <input id="contact" type="tel" placeholder="+880" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" required />
                            </div>
                            <div className="col-span-full">
                                <label for="address" className="text-sm font-semibold">Address</label>
                                <input id="address" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" required />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="city" className="text-sm font-semibold">City</label>
                                <input id="city" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" required />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="state" className="text-sm font-semibold">State / Province</label>
                                <input id="state" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" />
                            </div>
                            <div className="col-span-full sm:col-span-2">
                                <label for="zip" className="text-sm font-semibold">ZIP / Postal</label>
                                <input id="zip" type="text" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" />
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
                                <input id="username" type="text" placeholder="Username" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" required />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label for="password" className="text-sm font-semibold">Password</label>
                                <input id="password" type="password" placeholder="Give minimum 8 char Password" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900 p-1" required />
                            </div>

                            <div className="col-span-full">
                                <label for="bio" className="text-sm font-semibold">Bio</label>
                                <textarea id="bio" placeholder="" className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-600 mt-2 border-gray-300 text-gray-900"></textarea>
                            </div>
                            <div className="form-control w-full max-w-xs col-span-full">
                                <label className="label">
                                    <span className="label-text font-semibold">Upload Your Photo</span>
                                    <span className="label-text-alt font-semibold">Size less than 1MB</span>
                                </label>
                                <input type="file" className="file-input sm:file-input-sm file-input-bordered w-full max-w-xs" required />
                            </div>
                            <div className="col-span-full">
                                <div className="flex items-center space-x-2">
                                    <button type="button" className="px-4 py-2 border rounded-md border-gray-800">Create Account</button>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </section>
        </div>
    );
};
export default Buyer;

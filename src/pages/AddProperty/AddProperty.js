import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/ContextProvider';

const AddProperty = () => {
    const { user } = useContext(AuthContext)
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const Location = form.location.value
        const address = form.address.value
        const space = form.space.value
        const bed = form.bed.value
        const bathroom = form.bathroom.value
        const belcony = form.balcony.value
        const Price = form.price.value
        const details = form.details.value
        const id = Math.floor((Math.random() * 999) + 100)
        const data = {
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
            id: String(id)
        }
        form.reset()
    }

    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">District</span>
                                </label>
                                <input type="text" name="location" placeholder="eg: Dhaka" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Full Address</span>
                                </label>
                                <input type="text" name="address" placeholder="eg: 51, Nazimuddin Road,Dhaka" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Space Of Your House</span>
                                </label>
                                <input type="text" name="space" placeholder="eg: 900Sq-ft" className="input input-bordered" />
                            </div>
                            <div className="flex gap-3">
                                <div className="">
                                    <label className="label">
                                        <span className="label-text font-semibold">Bed-Room</span>
                                    </label>
                                    <input type="number" name="bed" placeholder="" className="input input-bordered w-24" />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text font-semibold">Bath-Room</span>
                                    </label>
                                    <input type="number" name="bathroom" placeholder="" className="input input-bordered w-24" />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text font-semibold">Balcony</span>
                                    </label>
                                    <input type="number" name="balcony" placeholder="" className="input input-bordered w-24" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Price</span>
                                </label>
                                <input type="number" name="price" placeholder="eg: 7000" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Details About House</span>
                                </label>
                                <textarea placeholder="Type house details" name="details" className="textarea textarea-bordered textarea-md w-full " ></textarea>
                            </div>
                            <div className="form-control">
                                <fieldset className="w-full space-y-1 text-gray-800">
                                    <label for="files" className="block text-sm font-medium">Pictures</label>
                                    <div className="flex">
                                        <input type="file" name="files" id="files" className="px-8 py-6 border-2 border-dashed rounded-md border-gray-300 text-gray-600 bg-gray-100" multiple />
                                    </div>
                                </fieldset>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-outline">ADD</button>
                            </div>
                        </form>
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Your Property!</h1>
                        <p className="py-6">Advertise Your Property by giving some information so that buyer can interact with you.</p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default AddProperty;
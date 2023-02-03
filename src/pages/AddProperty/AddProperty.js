import React from 'react';

const AddProperty = () => {
    return (
        <div>
            <div className="hero min-h-screen">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Location</span>
                                </label>
                                <input type="text" placeholder="eg: Dhaka" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Space Of Your House</span>
                                </label>
                                <input type="text" placeholder="eg: 900Sq-ft" className="input input-bordered" />
                            </div>
                            <div className="flex gap-3">
                                <div className="">
                                    <label className="label">
                                        <span className="label-text font-semibold">Bed-Room</span>
                                    </label>
                                    <input type="number" placeholder="" className="input input-bordered w-24" />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text font-semibold">Bath-Room</span>
                                    </label>
                                    <input type="number" placeholder="" className="input input-bordered w-24" />
                                </div>
                                <div className="">
                                    <label className="label">
                                        <span className="label-text font-semibold">Balcony</span>
                                    </label>
                                    <input type="number" placeholder="" className="input input-bordered w-24" />
                                </div>
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Price</span>
                                </label>
                                <input type="number" placeholder="eg: 7000" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text font-semibold">Details About House</span>
                                </label>
                                <textarea placeholder="Type house details" className="textarea textarea-bordered textarea-md w-full " ></textarea>
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
                                <button className="btn btn-outline">ADD</button>
                            </div>
                        </div>
                    </div>
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Add Your Property!</h1>
                        <p className="py-6">Advertise Your Property by giving some information so that buyer can interact with you.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddProperty;
import React from 'react';

const Search = () => {
    return (
        <div className="hero h-[32rem] mb-20" style={{ backgroundImage: `url("https://i.ibb.co/nfWtVVw/exterior.jpg")`, backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="min-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello XYZ,</h1>
                    <p className="mb-5">WE KNOW WHAT YOU WANT! WE WILL GIVE YOU THE BEST SEARCH....</p>
                    <div className='md:flex ml-4 text-black'>
                        <div className="form-control ml-2">
                            <label className="input-group">
                                <span className='bg-black text-white'>Location</span>
                                <input type="text" placeholder="Type location" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control mx-2">
                            <label className="input-group">
                                <span className='bg-black text-white'>P-ID</span>
                                <input type="text" placeholder="P-1234" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control">
                            <label className="input-group">
                                <select className="select select-bordered text-black font-bold">
                                    <option disabled selected>Select Budget</option>
                                    <option>7k to 15k</option>
                                    <option>16k to 25k</option>
                                    <option>30k to 50k</option>
                                    <option>60k to 100k</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <button type="button" className="px-6 py-2 font-semibold border rounded border-white text-white">SEARCH</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search;
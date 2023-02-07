import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../Contexts/ContextProvider';

const Search = () => {
    const { user } = useContext(AuthContext)
    const handleSearch = (e) => {
        e.preventDefault()
        const form = e.target
        const location = form.location.value
        const pId = form.pId.value
        const budget = form.budget.value
        fetch(`http://localhost:5000/searchedProperties?location=${location}&pID=${pId}&budget=${budget}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                form.reset()
            })

    }

    return (
        <div className="hero h-[32rem] mb-20" style={{ backgroundImage: `url("https://i.ibb.co/nfWtVVw/exterior.jpg")`, backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="min-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello {user?.displayName}</h1>
                    <p className="mb-5">WE KNOW WHAT YOU WANT! WE WILL GIVE YOU THE BEST SEARCH....</p>
                    <form onSubmit={handleSearch}>
                        <div className='md:flex ml-4 text-black'>
                            <div className="form-control ml-2">
                                <label className="input-group">
                                    <span className='bg-black text-white'>Location</span>
                                    <input type="text" name="location" placeholder="Type location" className="input input-bordered" required />
                                </label>
                            </div>
                            <div className="form-control mx-2">
                                <label className="input-group">
                                    <span className='bg-black text-white'>P-ID</span>
                                    <input type="text" name="pId" placeholder="P-1234" className="input input-bordered" />
                                </label>
                            </div>
                            <div className="form-control">
                                <label className="input-group">
                                    <select name="budget" className="select select-bordered text-black font-bold">
                                        <option disabled selected>Select Budget</option>
                                        <option value="7-15">7k to 15k</option>
                                        <option value="16-25">16k to 25k</option>
                                        <option value="30-50">30k to 50k</option>
                                        <option value="60-100">60k to 100k</option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <div className='mt-3'>
                            <button type="submit" className="px-6 py-2 font-semibold border rounded text-white hover:bg-slate-600">SEARCH</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Search;
import { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/ContextProvider';
import SearchResult from './SearchResult';
import AutoTyping, { BlinkCursor } from 'react-auto-typing'

const Search = () => {
    const { user } = useContext(AuthContext)
    const [homes, setHomes] = useState([])
    const handleSearch = (e) => {
        e.preventDefault()
        const form = e.target
        const Location = form.location.value
        fetch(`http://localhost:5000/searchProperties/${Location}`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                setHomes(data)
                form.reset()
            })
            .catch(er => console.log(er))
    }


    return (
        <div>
            <div className="hero h-[32rem] mb-20" style={{ backgroundImage: `url("https://i.ibb.co/nfWtVVw/exterior.jpg")`, backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="min-w-md">
                        <AutoTyping
                            className="text-5xl font-bold"
                            active // <boolean>
                            textRef={user ? `Hello ${user?.displayName}` : 'Hello User'} // <string>
                            writeSpeed={150}
                            deleteSpeed={150}
                            delayToWrite={1800}
                            delayToDelete={2000}
                        />
                        <BlinkCursor
                            className="text-4xl font-bold"
                            active // <boolean>
                            blinkSpeed={500}
                        />
                        <h1 className="mb-5 text-5xl font-bold"></h1>
                        <p className="mb-5">WE KNOW WHAT YOU WANT! WE WILL GIVE YOU THE BEST SEARCH....</p>
                        <form onSubmit={handleSearch}>
                            <div className='text-black'>
                                <div className="form-control w-full">
                                    <label className="input-group">
                                        <span className='bg-black text-white'>Location</span>
                                        <input type="text" name="location" placeholder="Type location" className="input input-bordered w-full" required />
                                    </label>
                                </div>

                                {/* <div className="form-control">
                                <label className="input-group">
                                    <select name="budget" className="select select-bordered text-black font-bold">
                                        <option disabled selected>Select Budget</option>
                                        <option value="7-15">7k to 15k</option>
                                        <option value="16-25">16k to 25k</option>
                                        <option value="30-50">30k to 50k</option>
                                        <option value="60-100">60k to 100k</option>
                                    </select>
                                </label>
                            </div> */}
                            </div>
                            <div className='mt-3'>
                                <button type="submit" className="px-6 py-2 font-semibold border rounded text-white hover:bg-slate-600">SEARCH</button>
                            </div>
                            {homes?.length ? <div className='p-2'>
                                <h1>Found {homes?.length} houses <a href='#search' className="link">View</a></h1>
                            </div> : ''}
                        </form>
                    </div>
                </div>
            </div>
            <div className='my-10 w-3/4 mx-auto' id="search">
                {
                    homes.length > 0 && <SearchResult homes={homes}></SearchResult>
                }
            </div>
        </div>
    );
};

export default Search;
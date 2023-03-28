import { useContext, useState } from 'react';
import { AuthContext } from '../../Contexts/ContextProvider';
import SearchResult from './SearchResult';
import AutoTyping, { BlinkCursor } from 'react-auto-typing'
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Search = () => {
    const { user } = useContext(AuthContext)
    const [homes, setHomes] = useState([])
    const handleSearch = (e) => {
        e.preventDefault()
        const form = e.target
        const Location = form.location.value.trim().toLowerCase()
        const district = form.district.value
        if (Location) {
            fetch(`https://rent-roll-server.vercel.app/searchPropertiesByAddress/${Location}`)
                .then(res => res.json())
                .then(data => {
                    setHomes(data)
                    form.reset()
                })
                .catch(er => console.log(er))
        }
        else {
            fetch(`https://rent-roll-server.vercel.app/searchProperties/${district}`)
                .then(res => res.json())
                .then(data => {
                    setHomes(data)
                    form.reset()
                })
                .catch(er => console.log(er))
        }

    }

    return (
        <div>
            <div className="hero h-[32rem] mb-20" style={{ backgroundImage: `url("https://i.ibb.co/nfWtVVw/exterior.jpg")`, backgroundPosition: 'center', backgroundAttachment: 'fixed' }}>
                <div className="hero-overlay bg-opacity-60"></div>

                <div className="hero-content text-center text-neutral-content">
                    <div className="min-w-md">
                        <AutoTyping
                            className="text-5xl font-bold mb-2"
                            active // <boolean>
                            textRef={user ? `Hello ${user?.displayName}` : 'Hello User'} // <string>
                            writeSpeed={100}
                            deleteSpeed={150}
                            delayToWrite={1800}
                            delayToDelete={2000}
                        />
                        <BlinkCursor
                            className="text-4xl font-bold"
                            active // <boolean>
                            blinkSpeed={500}
                        />
                        <p className="mb-5">WE KNOW WHAT YOU WANT! WE WILL GIVE YOU THE BEST SEARCH....</p>
                        <form onSubmit={handleSearch}>
                            <div className='text-black md:flex gap-1'>
                                <div className="form-control w-full my-2 md:my-0">
                                    <label className="input-group">
                                        <span className='bg-black text-white'>Location</span>
                                        <input type="text" name="location" placeholder="eg - nazimuddin road" className="input input-bordered w-full input-sm md:input-md" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="input-group">
                                        <select name="district" className="select select-bordered text-black font-bold" defaultValue="Dhaka">

                                            <option value="Dhaka">Dhaka</option>
                                            <option value="Tangail">Tangail</option>
                                            <option value="Mymensingh">Mymensingh</option>
                                        </select>
                                    </label>
                                </div>
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
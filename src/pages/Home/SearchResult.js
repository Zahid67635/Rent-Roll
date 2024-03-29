import React from 'react';
import House from '../Houses/House';

const SearchResult = ({ homes }) => {
    return (
        <div className='mb-20'>
            <div className='my-6'>
                <p className='font-semibold text-xl'>Filter:</p>
                <div className='flex mt-2'>
                    <div className="relative my-2 md:w-60 mr-4">
                        <select
                            id="id-04"
                            name="id-04"
                            required
                            className="peer relative h-10 w-full appearance-none rounded border border-slate-200 mr-1 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-zinc-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        >
                            <option disabled selected></option>
                            <option value="7-15">7k to 15k</option>
                            <option value="16-25">16k to 25k</option>
                            <option value="30-50">30k to 50k</option>
                            <option value="60-100">60k to 100k</option></select>
                        <label
                            htmlFor="id-04"
                            className="pointer-events-none absolute top-2.5 left-2 z-[1] md:px-2 text-xs md:text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-zinc-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                            Sort by Price
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

                    <div className="relative my-2 md:w-60">
                        <select
                            id="id-04"
                            name="id-04"
                            required
                            defaultValue="1"
                            className="peer relative h-10 w-full appearance-none rounded border mr-3 md:mr-0 border-slate-200 bg-white px-4 text-sm text-slate-500 outline-none transition-all autofill:bg-white focus:border-zinc-500 focus-visible:outline-none focus:focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                        >
                            <option value="" disabled selected></option>
                            <option value="1">Lower to higher</option>
                            <option value="2">Higher to lower</option>
                        </select>
                        <label
                            htmlFor="id-04"
                            className="pointer-events-none absolute top-2.5 left-2 z-[1] md:px-2 text-xs md:text-sm text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-valid:-top-2 peer-valid:text-xs peer-focus:-top-2 peer-focus:text-xs peer-focus:text-zinc-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                        >
                            Sort by Bed-Rooms
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
                </div>
                <h1 className='text-2xl font-semibold'>{homes?.length} available houses found:</h1>
            </div>
            <div className='md:grid grid-cols-3 gap-4'>
                {
                    homes?.map(h => <House key={h.id} info={h}></House>)
                }
            </div>
        </div>
    );
};

export default SearchResult;
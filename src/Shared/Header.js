import React, { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Contexts/ContextProvider';
import './Header.css'
const Header = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false)
    const { logOut, user } = useContext(AuthContext)
    return (
        <>
            <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
                <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
                    <nav
                        aria-label="main navigation"
                        className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
                        role="navigation"
                    >
                        {/*      <!-- Brand logo --> */}
                        <img src="logo192.png" className='p-3' alt="" />
                        {/*      <!-- Mobile trigger --> */}
                        <button
                            className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${isToggleOpen
                                    ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                                    : ""
                                }
            `}
                            onClick={() => setIsToggleOpen(!isToggleOpen)}
                            aria-expanded={isToggleOpen ? "true" : "false"}
                            aria-label="Toggle navigation"
                        >
                            <div className="absolute top-1/2 left-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
                                ></span>
                                <span
                                    aria-hidden="true"
                                    className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
                                ></span>
                            </div>
                        </button>
                        {/*      <!-- Navigation links --> */}
                        <ul
                            role="menubar"
                            aria-label="Select page"
                            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${isToggleOpen
                                ? "visible opacity-100 backdrop-blur-sm"
                                : "invisible opacity-0"
                                }`}
                        >
                            <li role="none" className="flex items-stretch">
                                <Link to='/'
                                    role="menuitem"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="flex items-center gap-2 transition-colors duration-300 hover:text-zinc-300 focus:bg-zinc-400 focus:outline-none focus-visible:outline-none lg:px-8"

                                >
                                    <span>Home</span>
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <Link
                                    to='/allproperties'
                                    role="menuitem"
                                    aria-current="page"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-zinc-300 focus:bg-zinc-400 focus:outline-none focus-visible:outline-none lg:px-8"

                                >
                                    <span>Services</span>
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <Link to='/about'
                                    role="menuitem"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-zinc-300 focus:bg-zinc-400 focus:outline-none focus-visible:outline-none lg:px-8"
                                    href="javascript:void(0)"
                                >
                                    <span>About</span>
                                </Link>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <Link to='/addProperty'
                                    role="menuitem"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-zinc-300 focus:bg-zinc-400 focus:outline-none focus-visible:outline-none lg:px-8"
                                    href="javascript:void(0)"
                                >
                                    <span>Add Property</span>
                                </Link>
                            </li>
                            {
                                user ? '' : <><li className="flex items-center mr-3">
                                    <Link to='/login'><button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded border border-zinc-500 px-5 text-sm font-medium tracking-wide text-zinc-500 transition duration-300 hover:border-zinc-600 hover:text-zinc-600 focus:border-zinc-700 focus:text-zinc-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-zinc-300 disabled:text-zinc-300 disabled:shadow-none">
                                        <span className='font-bold'>SIGNIN</span>
                                    </button></Link>
                                </li>
                                    <li className='flex items-center mr-2'>
                                        <Link to='/signup'><button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded border border-zinc-500 px-5 text-sm font-medium tracking-wide text-zinc-500 transition duration-300 hover:border-zinc-600 hover:text-zinc-600 focus:border-zinc-700 focus:text-zinc-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-zinc-300 disabled:text-zinc-300 disabled:shadow-none">
                                            <span className='font-bold'>SIGNUP</span>
                                        </button></Link>
                                    </li></>
                            }

                        </ul>
                        {/* ------------- */}
                        <div className='flex items-center'>
                            <div >
                                {
                                    user ? <p>Welcome, {user?.displayName}</p> : ''
                                }
                            </div>
                            {
                                user ?
                                    <div className="dropdown dropdown-end dropdown-hover my-auto ml-1">
                                        <img src={user?.photoURL} className='btn m-1 btn-circle border-solid border-2 border-sky-500' alt="" />
                                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                                            <li className='hover-bordered'><a>Dashboard</a></li>
                                            <li className='hover-bordered'><a>Your Profile</a></li>
                                            <li className='hover-bordered'><a type='button' onClick={logOut}>Logout</a></li>
                                        </ul>
                                    </div> :
                                    ''
                            }
                        </div>
                        {/* ------------------ */}

                    </nav>
                </div>
            </header>
            {/*<!-- End Navbar with Avatar--> */}
        </>
    )
};

export default Header;





import React, { useState } from 'react';
import './Header.css'
const Header = () => {
    const [isToggleOpen, setIsToggleOpen] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
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
                                <a
                                    role="menuitem"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-zinc-500 focus:bg-zinc-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                    href="javascript:void(0)"
                                >
                                    <span>Home</span>
                                </a>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <a
                                    role="menuitem"
                                    aria-current="page"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="flex items-center gap-2 py-4 text-zinc-500 transition-colors duration-300 hover:text-zinc-600 focus:bg-zinc-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                    href="javascript:void(0)"
                                >
                                    <span>Services</span>
                                </a>
                            </li>
                            <li role="none" className="flex items-stretch">
                                <a
                                    role="menuitem"
                                    aria-haspopup="false"
                                    tabIndex="0"
                                    className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-zinc-500 focus:bg-zinc-50 focus:outline-none focus-visible:outline-none lg:px-8"
                                    href="javascript:void(0)"
                                >
                                    <span>About</span>
                                </a>
                            </li>
                            <li className="flex items-center mr-3">
                                <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded border border-zinc-500 px-5 text-sm font-medium tracking-wide text-zinc-500 transition duration-300 hover:border-zinc-600 hover:text-zinc-600 focus:border-zinc-700 focus:text-zinc-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-zinc-300 disabled:text-zinc-300 disabled:shadow-none">
                                    <span className='font-bold'>SIGNIN</span>
                                </button>
                            </li>
                            <li className='flex items-center mr-2'>
                                <div className="inline-flex items-center divide-x rounded bg-white-800 text-black divide-black dropdown h-12">
                                    <div className="px-8 mb-4">
                                        <button type="button" className='' >SIGNUP</button>
                                        <button type="button" title="Toggle dropdown" className="p-3">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                                            </svg>
                                            <div class="dropdown-content">
                                                <a href="#">Buyer</a>
                                                <a href="#">Seller</a>
                                            </div>
                                        </button>
                                    </div>

                                </div>
                            </li>

                        </ul>
                        <div className="flex items-center px-6 lg:ml-0 lg:p-0 menu menu-horizontal">
                            {/*        <!-- Avatar --> */}
                            <li tabIndex={0} className='md:mr-44'>
                                <a
                                    href="#"
                                    className="relative bg-black inline-flex h-10 w-10 items-center justify-center rounded-full text-white"
                                >
                                    user
                                </a>
                                <ul className="menu bg-base-100 w-56 p-2 rounded-box">
                                    <li>
                                        <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                                            Item 2
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            Item 1
                                        </a>
                                    </li>
                                    <li>
                                        <a>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                                            Logout
                                        </a>
                                    </li>
                                </ul>
                            </li>

                            {/*        <!-- End Avatar --> */}
                        </div>
                    </nav>
                </div>
            </header>
            {/*<!-- End Navbar with Avatar--> */}
        </>
    )
};

export default Header;





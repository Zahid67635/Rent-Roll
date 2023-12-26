import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Contexts/ContextProvider";
import "./Header.css";
const Header = () => {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const { logOut, user } = useContext(AuthContext);
  return (
    <header className="relative z-20 w-full border-b shadow-lg border-b-1 border-slate-200 bg-slate-50 shadow-slate-700/5 after:absolute after:top-full after:left-0 after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
      <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav
          aria-label="main navigation"
          className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
          role="navigation"
        >
          {/*      <!-- Brand logo --> */}
          <Link to="/" className="w-24">
            <img src="/logo192.png" className="w-full pt-3" alt="" />
          </Link>
          {/*      <!-- Mobile trigger --> */}
          <button
            className={`relative order-10 block h-10 w-10 self-center lg:hidden
              ${
                isToggleOpen
                  ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(3)]:w-0 [&_span:nth-child(2)]:-rotate-45 "
                  : ""
              }
            `}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <div className="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
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
            className={`absolute top-0 left-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 lg:visible lg:relative lg:top-0  lg:z-0 lg:flex lg:h-full lg:w-auto lg:items-stretch lg:overflow-visible lg:bg-white/0 lg:px-0 lg:py-0  lg:pt-0 lg:opacity-100 ${
              isToggleOpen
                ? "visible opacity-100 backdrop-blur-sm"
                : "invisible opacity-0"
            }`}
          >
            <li
              role="none"
              className="flex items-stretch"
              onClick={() => setIsToggleOpen(!isToggleOpen)}
            >
              <Link
                to="/"
                role="menuitem"
                aria-haspopup="false"
                tabIndex="0"
                className="flex items-center gap-2 transition-colors duration-300 hover:text-zinc-300 focus:bg-zinc-400 focus:outline-none focus-visible:outline-none lg:px-8"
              >
                <span>Home</span>
              </Link>
            </li>
            <li
              role="none"
              className="flex items-stretch py-2 md:py-0"
              onClick={() => setIsToggleOpen(!isToggleOpen)}
            >
              <Link
                to="/allproperties"
                role="menuitem"
                aria-current="page"
                aria-haspopup="false"
                tabIndex="0"
                className="flex items-center gap-2 my-1 transition-colors duration-300 md:my-0 hover:text-zinc-300 focus:bg-zinc-400 focus:outline-none focus-visible:outline-none lg:px-8"
              >
                <span>All Properties</span>
              </Link>
            </li>
            <li
              role="none"
              className="flex items-stretch"
              onClick={() => setIsToggleOpen(!isToggleOpen)}
            >
              <Link
                to="/about"
                role="menuitem"
                aria-haspopup="false"
                tabIndex="0"
                className="flex items-center gap-2 transition-colors duration-300 hover:text-zinc-300 focus:bg-zinc-400 focus:outline-none focus-visible:outline-none lg:px-8"
                href="javascript:void(0)"
              >
                <span>About</span>
              </Link>
            </li>

            {user ? (
              ""
            ) : (
              <>
                <li
                  className="items-center pt-5 mb-1 md:pt-0 md:flex md:mx-3 md:mb-0"
                  onClick={() => setIsToggleOpen(!isToggleOpen)}
                >
                  <Link to="/login">
                    <button className="inline-flex items-center justify-center h-10 gap-2 px-5 text-sm font-medium tracking-wide transition duration-300 border rounded whitespace-nowrap border-zinc-500 text-zinc-500 focus:border-zinc-700 focus:text-zinc-700 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-zinc-300 disabled:text-zinc-300 disabled:shadow-none">
                      <span className="font-bold">SIGNIN</span>
                    </button>
                  </Link>
                </li>
                <li
                  className="items-center pt-2 md:flex md:mr-2 md:pt-0"
                  onClick={() => setIsToggleOpen(!isToggleOpen)}
                >
                  <Link to="/signup">
                    <button className="h-10 gap-2 px-5 font-semibold text-white rounded hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500">
                      <span className="font-bold">SIGNUP</span>
                    </button>
                  </Link>
                </li>
              </>
            )}
          </ul>
          {/* ------------- */}
          <div className="flex items-center">
            <div>
              {user ? <p>Welcome, {user?.displayName.split(" ")[0]}</p> : ""}
            </div>
            {user ? (
              <div className="my-auto ml-1 dropdown dropdown-end dropdown-hover">
                <img
                  src={user?.photoURL}
                  className="w-12 h-12 bg-gray-500 border-2 border-solid rounded-full border-sky-500"
                  alt=""
                />
                <ul
                  tabIndex={0}
                  className="p-2 shadow dropdown-content menu bg-base-100 rounded-box w-52"
                >
                  <li className="hover-bordered">
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li className="hover-bordered">
                    <Link to="/profile">My Profile</Link>
                  </li>
                  <li className="hover-bordered">
                    <Link to="/" type="button" onClick={logOut}>
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            ) : (
              ""
            )}
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;

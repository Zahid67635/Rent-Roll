import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Contexts/ContextProvider";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const [data, setData] = useState({});
  useEffect(() => {
    fetch(`https://rent-roll-server-zahid67635.vercel.app/users/${user?.email}`)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [user?.email]);
  return (
    <div className="mt-10 mb-40">
      <div className="flex justify-center">
        <div className="flex flex-col w-[300px] p-5 text-gray-800 bg-gray-100 sm:flex sm:space-x-6">
          <div className="relative w-full mb-6 mr-4 h-44 sm:h-32">
            <div className="">
              <img
                src={user?.photoURL}
                alt=""
                className="flex justify-center object-contain w-1/2 h-full mx-auto bg-gray-500 rounded"
              />
              <span class="absolute inline-flex items-center justify-center gap-1 p-1.5 text-sm text-white bg-green-500 border-2 border-white rounded-full -top-1 right-14">
                <span class="sr-only"> 7 new emails </span>
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <div className="relative">
              <p className="text-xl font-semibold md:text-2xl">
                {user?.displayName}{" "}
                <span className="ml-1 text-xs">(Active now)</span>
              </p>

              <span className="text-sm font-semibold text-gray-600">
                {data?.usertype?.toUpperCase()}
              </span>
            </div>
            <div className="space-y-1">
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Email address"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M274.6,25.623a32.006,32.006,0,0,0-37.2,0L16,183.766V496H496V183.766ZM464,402.693,339.97,322.96,464,226.492ZM256,51.662,454.429,193.4,311.434,304.615,256,268.979l-55.434,35.636L57.571,193.4ZM48,226.492,172.03,322.96,48,402.693ZM464,464H48V440.735L256,307.021,464,440.735Z"
                  ></path>
                </svg>
                <span className="text-gray-600">{user?.email}</span>
              </span>
              <span className="flex items-center space-x-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  aria-label="Phonenumber"
                  className="w-4 h-4"
                >
                  <path
                    fill="currentColor"
                    d="M449.366,89.648l-.685-.428L362.088,46.559,268.625,171.176l43,57.337a88.529,88.529,0,0,1-83.115,83.114l-57.336-43L46.558,362.088l42.306,85.869.356.725.429.684a25.085,25.085,0,0,0,21.393,11.857h22.344A327.836,327.836,0,0,0,461.222,133.386V111.041A25.084,25.084,0,0,0,449.366,89.648Zm-20.144,43.738c0,163.125-132.712,295.837-295.836,295.837h-18.08L87,371.76l84.18-63.135,46.867,35.149h5.333a120.535,120.535,0,0,0,120.4-120.4v-5.333l-35.149-46.866L371.759,87l57.463,28.311Z"
                  ></path>
                </svg>
                <span className="text-gray-600">{data?.contact}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="w-1/2 h-24 mx-auto mb-10">
                <div className="relative my-6">
                    <input
                        id="id-b03"
                        type="text"
                        name="id-b03"
                        placeholder="your name"
                        className="relative w-full h-10 px-4 text-sm placeholder-transparent transition-all border rounded outline-none peer border-slate-200 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-emerald-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
                    />
                    <label
                        htmlFor="id-b03"
                        className="absolute left-2 -top-2 z-[1] cursor-text px-2 text-xs text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-sm peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:cursor-default peer-focus:text-xs peer-focus:text-emerald-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
                    >
                        Your name
                    </label>
                    <small className="absolute flex justify-between w-full px-4 py-1 text-xs transition text-slate-400 peer-invalid:text-pink-500">
                        <span>Text field with helper text</span>
                        <span className="text-slate-500">1/10</span>
                    </small>
                </div>
            </div> */}
    </div>
  );
};

export default Profile;

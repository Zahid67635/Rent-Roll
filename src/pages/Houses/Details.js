import React, { useContext, useEffect, useRef, useState } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import PrimaryButton from "../../Components/PrimaryButton";
import { AuthContext } from "../../Contexts/ContextProvider";
import Carousel from "./Carousel";
import Reviews from "./Reviews";
import { FaMapMarkerAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";

const Details = () => {
  const { user } = useContext(AuthContext);
  const {
    owner,
    Price,
    space,
    photos,
    rooms,
    address,
    ownerPhoto,
    details,
    features,
    id,
    ownerEmail,
    ownerContact,
  } = useLoaderData();
  const location =
    address.charAt(0).toUpperCase() + address.slice(1).toLowerCase();
  const [data, setData] = useState({});
  const [comments, setComments] = useState([]);
  const date = new Date();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  let currentDate = `${day}-${month}-${year}`;
  const totalPrice = parseInt(Price) + 950 + 1000;
  const email = user?.email;
  const navigate = useNavigate();
  var templateParams = {
    name: "James",
    notes: "Check this out!",
  };
  console.log(user);
  const houseInfo = {
    owner,
    Price,
    space,
    photos,
    rooms,
    address,
    ownerPhoto,
    details,
    email,
    id,
  };
  useEffect(() => {
    fetch(`https://rent-roll-server.vercel.app/bookings?id=${id}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      })
      .catch((er) => console.log(er));
    fetch(`https://rent-roll-server.vercel.app/comments/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setComments(data);
      })
      .catch((er) => console.log(er));
  }, [id]);
  const handleConfirm = () => {
    fetch("https://rent-roll-server.vercel.app/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(houseInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        navigate("/");
        toast.success("Successfully Booked!");
      })
      .catch((er) => console.log(er));
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_ibh4v3j",
        "template_i61ci27",
        templateParams,
        "DKhDt38rABfRhWYlZ"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Email Sent Successfully!!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const handleComment = (e) => {
    e.preventDefault();
    const comment = e.target.comment.value.trim();
    const data = {
      comment,
      id,
      email: user?.email,
      img: user?.photoURL,
      name: user?.displayName,
    };

    fetch("https://rent-roll-server.vercel.app/comments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(() => {
        e.target.reset();
        toast.success("Comment added!", {
          position: "bottom-left",
        });
        fetch(`https://rent-roll-server.vercel.app/comments/${id}`)
          .then((res) => res.json())
          .then((data) => {
            setComments(data);
          })
          .catch((er) => console.log(er));
      })
      .catch((er) => console.log(er));
  };
  return (
    <div className="mb-10">
      <Carousel photos={photos}></Carousel>
      <div className="grid-cols-3 gap-5 mt-10 md:grid md:mx-16">
        <div className="col-span-2 p-6">
          <h1 className="mb-4 text-3xl font-semibold text-green-500">
            House Details
          </h1>
          <div className="flex justify-between">
            <div className="p-1">
              <p className="text-xl">
                <FaMapMarkerAlt className="inline mb-1 mr-1" />
                {location}{" "}
              </p>
              <small>
                {rooms?.bed} Bedrooms, {rooms?.bathroom} Washrooms,{" "}
                {rooms?.belcony} Balcony
              </small>{" "}
              <br /> <br />
              <h4 className="text-sm font-bold">Total Space - {space} Sq-ft</h4>
            </div>
            <div className="mr-1 md:mr-20">
              <img
                className="mx-auto rounded-full w-14 h-14"
                src={ownerPhoto ? ownerPhoto : "/zahid-pic.png"}
                alt=""
              />
              <h2 className="font-semibold text-center">{owner}</h2>
            </div>
          </div>
          <div className="divider md:mr-20"></div>
          {/* ----------------Room feature--------- */}
          <section className="text-gray-800">
            <h1 className="mb-3 text-2xl font-semibold text-green-500">
              Available features :
            </h1>
            <div className="container flex flex-col-reverse mx-auto lg:flex-row">
              <div className="flex flex-col md:w-3/4 p-2text-black">
                <div className="flex space-x-2 sm:space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                  <div className="space-y-2">
                    <p className="text-lg font-medium leading-snug">
                      {features?.CCTV}
                    </p>
                  </div>
                </div>
                <div className="flex my-3 space-x-2 sm:space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                  <div className="space-y-2">
                    <p className="text-lg font-medium leading-snug">
                      {features?.View}
                    </p>
                  </div>
                </div>
                <div className="flex space-x-2 sm:space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                  <div className="space-y-2">
                    <p className="text-lg font-medium leading-snug">
                      {features?.Lift}
                    </p>
                  </div>
                </div>
                <div className="flex my-3 space-x-2 sm:space-x-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="flex-shrink-0 w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
                    ></path>
                  </svg>
                  <div className="space-y-2">
                    <p className="text-lg font-medium leading-snug">
                      {features?.Gas}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <div className="divider"></div>
          <section>
            <h1 className="text-2xl font-semibold text-green-500">About :</h1>
            <div>
              <p>{details}</p>
            </div>
          </section>
          {/* -------Features end----- */}
          <div className="divider"></div>
          <div className="mt-3">
            <h1 className="text-2xl font-semibold text-green-500">
              Owner Contact :
            </h1>
            <div className="flex gap-5 mt-2">
              <div className="font-bold">
                <p>Name:</p>
                <p>Cell:</p>
                <p>Email:</p>
              </div>
              <div>
                <p>{owner}</p>
                <p>{ownerContact}</p>
                <p>{ownerEmail}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="px-2 mt-10 md:mt-40">
          <div className="max-w-md p-4 mx-auto border-2 border-solid shadow-lg rounded-xl">
            <h1 className="mb-2 text-3xl font-medium text-gray-900 title-font">
              ৳{Price}/ <span className="font-thin">month</span>
            </h1>
            <div className="flex gap-1 mb-2">
              <p>Ratings</p> <span>4.8 ({comments?.length} reviews)</span>
            </div>
            <p>Date</p>
            <div className="flex items-center justify-center p-2 mt-1 mb-2 border">
              <div>{currentDate}</div>
            </div>

            <div className="flex py-2 border-t border-gray-200">
              <span className="text-gray-500">Rent Cost</span>
              <span className="ml-auto text-gray-900">৳{Price}</span>
            </div>
            <div className="flex py-2 border-t border-gray-200">
              <span className="text-gray-500">Gas Bill</span>
              <span className="ml-auto text-gray-900">৳950</span>
            </div>
            <div className="flex py-2 border-t border-gray-200">
              <span className="text-gray-500">Security and Others</span>
              <span className="ml-auto text-gray-900">৳1000</span>
            </div>
            <div className="flex py-2 mb-6 border-t border-b border-gray-200">
              <span className="font-bold text-gray-900">Total</span>
              <span className="ml-auto text-gray-900">৳{totalPrice}</span>
            </div>
            <div className="mt-6 mb-2">
              {data?.id === id ? (
                <p className="font-semibold text-center">Already Booked!!</p>
              ) : (
                user?.email === ownerEmail && (
                  <label
                    htmlFor="my-modal-3"
                    className="w-full px-4 py-1 tracking-wide text-white transition-colors duration-300 transform rounded-md hover:text-gray-100 bg-gradient-to-r from-emerald-500 to-lime-500 btn"
                  >
                    Confirm
                  </label>
                )
              )}
            </div>
            <p className="mb-6 text-center text-gray-400">
              If you are interested then contact with Owner!
            </p>
          </div>
        </div>
      </div>
      <section className="px-2 mt-3 md:ml-20 md:w-3/4 md:mx-auto">
        <h1 className="py-2 mb-2 text-2xl font-semibold text-green-500">
          Reviews :
        </h1>
        <form onSubmit={handleComment} className="relative md:flex">
          <textarea
            id="id-01"
            type="text"
            name="comment"
            placeholder="Write your message"
            rows="3"
            className="relative w-full px-4 py-1 placeholder-transparent transition-all border rounded outline-none md:w-3/4 text-md peer border-lime-600 text-slate-500 autofill:bg-white invalid:border-pink-500 invalid:text-pink-500 focus:border-zinc-500 focus:outline-none invalid:focus:border-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400"
          ></textarea>
          <label
            htmlFor="id-01"
            className="absolute left-2 -top-2 z-[1] px-2 text-md text-slate-400 transition-all before:absolute before:top-0 before:left-0 before:z-[-1] before:block before:h-full before:w-full before:bg-white before:transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-md peer-required:after:text-pink-500 peer-required:after:content-['\00a0*'] peer-invalid:text-pink-500 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-zinc-500 peer-invalid:peer-focus:text-pink-500 peer-disabled:cursor-not-allowed peer-disabled:text-slate-400 peer-disabled:before:bg-transparent"
          >
            Comment Your Review
          </label>{" "}
          <br />
          <button
            type="submit"
            className={`btn btn-success btn-sm md:ml-2 md:px-6 hover:bg-green-500 ${
              user ? "" : "btn-disabled"
            } text-white`}
          >
            Post
          </button>
        </form>

        <div className="mt-4">
          <div className="grid-cols-3 gap-2 md:grid">
            {comments.map((c, i) => (
              <Reviews key={i} mess={c}></Reviews>
            ))}
          </div>
        </div>
        {comments?.length < 1 ? (
          <h2 className="text-xl font-semibold">
            No comments yet!! Be the first reviewer
          </h2>
        ) : (
          ""
        )}
      </section>

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="relative modal-box">
          <label
            htmlFor="my-modal-3"
            className="absolute btn btn-sm btn-circle right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">
            Are You Sure About Your Confirmation!
          </h3>
          <p className="py-4">
            You've been selected for a chance to get one year of subscription to
            use Wikipedia for free!
          </p>
          <div className="modal-action">
            <PrimaryButton classes="px-2 rounded-md" handler={handleConfirm}>
              Confirm
            </PrimaryButton>
            <label htmlFor="my-modal-3" className="btn btn-sm">
              No
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/ContextProvider";
import SmallSpinner from "../../Components/SmallSpinner";

const Buyer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, verifyEmail } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const [signUpError, setSignUpError] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSignUp = (data) => {
    setLoading(true);
    setSignUpError("");
    const name = data.username;
    const email = data.email;
    const contact = data.contact;
    const password = data.password;
    const bio = data.bio;
    const image = data.userimage[0];
    const apiKey = process.env.REACT_APP_imgBB_Key;
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;
    const formData = new FormData();
    formData.append("image", image);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const imgURL = imgData.data.display_url;
        createUserProfile(imgURL);
      })
      .catch((er) => console.log(er));

    const createUserProfile = (imgURL) => {
      createUser(email, password)
        .then((res) => {
          const user = res.user;
          const updateInfo = {
            displayName: name,
            photoURL: imgURL,
          };

          updateUser(updateInfo)
            .then(() => {
              navigate(from, { replace: true });
              verifyEmail()
                .then(() => {
                  toast.success("Check your email for a verification email");
                })
                .catch((er) => console.log(er));
              const userInfo = {
                name,
                photoURL: imgURL,
                contact,
                email,
                bio,
                usertype: "buyer",
              };

              saveUser(userInfo);
              setLoading(false);
            })
            .catch((err) => console.log(err));
        })
        .catch((er) => {
          console.log(er);
          setSignUpError(er.message);
        });
    };
  };
  const saveUser = (userInfo) => {
    const user = { ...userInfo };
    fetch(`https://rent-roll-server.vercel.app/users/${user?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="mx-auto mt-6 mb-16 md:w-3/4">
      <h1 className="mb-2 text-3xl font-bold text-center">
        Create Your Rent-Roll Account
      </h1>
      <div className="w-1/2 mx-auto divider"></div>
      <section
        className="p-6 text-gray-900 rounded shadow-xl"
        data-theme="retro"
      >
        <form
          onSubmit={handleSubmit(handleSignUp)}
          className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
        >
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="text-xl font-bold">Personal Information</p>
              <p className="text-xs">
                Give your valid information so that we can communicate with you.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label for="firstname" className="text-sm font-semibold">
                  First name
                </label>
                <input
                  {...register("firstName")}
                  type="text"
                  placeholder="First name"
                  className="w-full p-1 mt-2 text-gray-900 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-amber-100 border-amber-100"
                  required
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="lastname" className="text-sm font-semibold">
                  Last name
                </label>
                <input
                  {...register("lastName")}
                  type="text"
                  placeholder="Last name"
                  className="w-full p-1 mt-2 text-gray-900 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-amber-100 border-amber-100"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="email" className="text-sm font-semibold">
                  Email
                </label>
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  placeholder="Email"
                  className="w-full p-1 mt-2 text-gray-900 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-amber-100 border-amber-100"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="contact" className="text-sm font-semibold">
                  Contact No.
                </label>
                <input
                  {...register("contact", {
                    required: "Phone number is required",
                  })}
                  type="tel"
                  placeholder="+880"
                  className="w-full p-1 mt-2 text-gray-900 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-amber-100 border-amber-100"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.contact?.message}</p>
                )}
              </div>
              <div className="col-span-full">
                <label for="address" className="text-sm font-semibold">
                  Address
                </label>
                <input
                  {...register("address", { required: "Address is required" })}
                  type="text"
                  placeholder=""
                  className="w-full p-1 mt-2 text-gray-900 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-amber-100 border-amber-100"
                />
              </div>

              <div className="col-span-full sm:col-span-2">
                <label for="city" className="text-sm font-semibold">
                  City
                </label>
                <input
                  {...register("city", { required: "city is required" })}
                  type="text"
                  placeholder=""
                  className="w-full p-1 mt-2 text-gray-900 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-amber-100 border-amber-100"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="state" className="text-sm font-semibold">
                  State / Province
                </label>
                <input
                  {...register("state")}
                  type="text"
                  placeholder=""
                  className="w-full p-1 mt-2 text-gray-900 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-amber-100 border-amber-100"
                />
              </div>
              <div className="col-span-full sm:col-span-2">
                <label for="zip" className="text-sm font-semibold">
                  ZIP / Postal
                </label>
                <input
                  {...register("zip")}
                  type="text"
                  placeholder=""
                  className="w-full p-1 mt-2 text-gray-900 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-amber-100 border-amber-100"
                />
              </div>
            </div>
          </fieldset>
          <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-gray-50">
            <div className="space-y-2 col-span-full lg:col-span-1">
              <p className="text-xl font-bold">Profile</p>
              <p className="mb-3 text-xs">
                Give your profile infos and make a valid account.
              </p>
            </div>
            <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
              <div className="col-span-full sm:col-span-3">
                <label for="username" className="text-sm font-semibold">
                  Username
                </label>
                <input
                  {...register("username", {
                    required: "Username is required",
                  })}
                  type="text"
                  placeholder="Username"
                  className="w-full p-1 mt-2 text-gray-900 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-amber-100 border-amber-100"
                />
              </div>
              <div className="col-span-full sm:col-span-3">
                <label for="password" className="text-sm font-semibold">
                  Password
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password must be 6 character or long",
                    },
                  })}
                  type="password"
                  placeholder="Give minimum 8 char Password"
                  className="w-full p-1 mt-2 text-gray-900 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-amber-100 border-amber-100"
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>

              <div className="col-span-full">
                <label for="bio" className="text-sm font-semibold">
                  Bio
                </label>
                <textarea
                  {...register("bio")}
                  placeholder=""
                  className="w-full mt-2 text-gray-900 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-amber-100 border-amber-100"
                ></textarea>
              </div>
              <div className="w-full max-w-xs form-control col-span-full">
                <label className="label">
                  <span className="font-semibold label-text">
                    Upload Your Photo
                  </span>
                  <span className="font-semibold label-text-alt">
                    Size less than 1MB
                  </span>
                </label>
                <input
                  {...register("userimage", { required: "Photo is required" })}
                  type="file"
                  className="w-full max-w-xs bg-white file-input sm:file-input-sm file-input-bordered"
                />
                {errors.userimage && (
                  <p className="text-red-600">{errors.userimage?.message}</p>
                )}
              </div>

              <div className="col-span-full">
                <div className="flex items-center space-x-2">
                  <button
                    type="submit"
                    className="px-4 py-2 transition duration-300 border border-gray-800 rounded-md hover:bg-slate-700 hover:text-white"
                  >
                    {loading ? <SmallSpinner /> : "Create Account"}
                  </button>
                </div>
                {signUpError ? (
                  <p className="text-red-600">{signUpError}</p>
                ) : (
                  ""
                )}
              </div>
            </div>
          </fieldset>
        </form>
      </section>
    </div>
  );
};
export default Buyer;

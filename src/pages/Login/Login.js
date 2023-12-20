import { GoogleAuthProvider } from "firebase/auth";
import Lottie from "lottie-react";
import React, { useState } from "react";
import { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import anim from "../../assets/login.json";
import { AuthContext } from "../../Contexts/ContextProvider";
const Login = () => {
  const { signIn, googleSignIn } = useContext(AuthContext);
  const [signInError, setSignInError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const handleSubmit = (e) => {
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    e.preventDefault();

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate(from, { replace: true });
        toast.success("Log in Successful!");
      })
      .catch((er) => {
        console.log(er);
        setSignInError(er.message);
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        const userInfo = {
          name: user?.displayName,
          photoURL: user?.photoURL,
          contact: "017773332",
          email: user.email,
          bio: "Missing",
          usertype: "buyer",
        };
        saveUser(userInfo);
        navigate(from, { replace: true });
        toast.success("Logged in");
      })
      .catch((er) => console.log(er));
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
    <div className="py-10 md:flex">
      <div className="hidden w-1/2 p-10 mx-auto md:block">
        <Lottie animationData={anim} loop={true}></Lottie>
      </div>
      <div className="flex items-center justify-center w-full md:w-1/2">
        <div className="max-w-md p-8 mb-2 space-y-3 text-gray-800 shadow-xl rounded-xl bg-gray-50">
          <h1 className="text-3xl font-semibold text-center">Login</h1>
          <form onSubmit={handleSubmit} className="space-y-6 ">
            <div className="space-y-1 text-sm">
              <label for="email" className="block text-gray-600">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="xyz@abc.com"
                className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:border-yellow-600"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label for="password" className="block text-gray-600">
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="w-full px-4 py-3 text-gray-800 border border-gray-300 rounded-md bg-gray-50 focus:border-yellow-600"
              />
              <div className="flex justify-end text-xs text-gray-600">
                <a rel="noopener noreferrer" href="#">
                  Forgot Password?
                </a>
              </div>
            </div>
            <div>
              {signInError ? <p className="text-red-500">{signInError}</p> : ""}
              <button
                type="submit"
                className="w-full btn btn-primary btn-outline "
              >
                Sign in
              </button>
            </div>
          </form>
          <div className="flex items-center pt-4 space-x-1">
            <div className="flex-1 h-px bg-gray-300 sm:w-16"></div>
            <p className="px-3 text-sm text-gray-600">
              Login with social accounts
            </p>
            <div className="flex-1 h-px bg-gray-300 sm:w-16"></div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              aria-label="Log in with Google"
              onClick={handleGoogleSignIn}
              className="p-3 rounded bg-violet-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                className="w-5 h-5 fill-current"
              >
                <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
              </svg>
            </button>
          </div>
          <p className="text-sm text-center text-gray-600 sm:px-6">
            Don't have an account?
            <Link to="/signup" className="text-sm underline text-violet-800">
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

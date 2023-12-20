import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../Contexts/ContextProvider";
import SmallSpinner from "../../../Components/SmallSpinner";

const Host = () => {
  const { user } = useContext(AuthContext);
  const [state, setState] = useState(true);
  const [req, setReq] = useState({});
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://rent-roll-server.vercel.app/hostRequests/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setReq(data);
        console.log(data);
        setLoading(!state);
      })
      .catch((er) => console.log(er));
  }, [user?.email, state, req]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    const nidNo = e.target.nidNo.value;
    const nidPhoto = e.target.nidPhoto.files[0];
    const apiKey = process.env.REACT_APP_imgBB_Key;
    const url = `https://api.imgbb.com/1/upload?key=${apiKey}`;
    const formData = new FormData();
    formData.append("image", nidPhoto);
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const imgUrl = imgData.data.display_url;
        console.log(imgUrl);
        const nidInfo = {
          nidNo,
          nidImgUrl: imgUrl,
          email: user?.email,
          photo: user?.photoURL,
          status: "pending",
        };
        hostStatus(nidInfo);
        toast.success("Request sent!! Please Wait for response");
      })
      .catch((er) => console.log(er));

    e.target.reset();
  };
  const hostStatus = (data) => {
    fetch(`https://rent-roll-server.vercel.app/hostRequests/${data?.email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setState(!state);
      })
      .catch((er) => console.log(er));
  };
  return (
    <>
      <form className="w-3/4 mx-auto my-10 md:w-1/2" onSubmit={handleSubmit}>
        {!state ? (
          <>
            <p className="text-xl font-semibold text-center">
              Request has been sent. Please wait for validation...
            </p>
          </>
        ) : (
          <>
            <h1 className="mb-4 text-2xl font-bold text-purple-700">
              Send a Request for Hosting :{" "}
            </h1>
            <fieldset className="my-3 space-y-1 text-gray-800 md:w-1/2">
              <div className="flex">
                <span className="flex items-center px-4 text-xs bg-gray-300 pointer-events-none md:px-3 sm:text-sm rounded-l-md">
                  NID No.
                </span>
                <input
                  type="number"
                  name="nidNo"
                  id="url"
                  placeholder="xxxxxxxxxx"
                  className="flex-1 px-1 text-gray-800 bg-gray-100 border border-gray-300 md:flex md:py-2 sm:text-sm rounded-r-md focus:ring-inset focus:ring-sky-600"
                  required
                />
              </div>
            </fieldset>
            <h2 className="mt-4 font-semibold">
              Please provide your valid NID photo clearly -
            </h2>
            <input
              type="file"
              name="nidPhoto"
              className="w-full max-w-xs file-input file-input-bordered file-input-sm"
              required
            />
            <div className="w-1/2 mx-auto mt-4">
              <button type="submit" className="mx-auto btn btn-outline btn-sm">
                {loading ? <SmallSpinner /> : "Request"}
              </button>
            </div>
          </>
        )}
      </form>
    </>
  );
};

export default Host;

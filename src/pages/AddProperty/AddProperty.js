import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../Components/PrimaryButton";
import SmallSpinner from "../../Components/SmallSpinner";
import { AuthContext } from "../../Contexts/ContextProvider";
import Lottie from "lottie-react";
import anim from "../../assets/addProp.json";

const AddProperty = () => {
  const photos = [];
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [spin, setSpin] = useState(false);
  const { user } = useContext(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSpin(true);
    const form = e.target;
    const district = form.district.value.trim();
    const District =
      district.charAt(0).toUpperCase() + district.slice(1).toLowerCase();
    const address = form.address.value.trim().toLowerCase();
    const space = form.space.value;
    const bed = form.bed.value;
    const bathroom = form.bathroom.value;
    const belcony = form.balcony.value;
    const Price = form.price.value;
    const details = form.details.value;
    const id = Math.floor(Math.random() * 999 + 100);
    const pics = form.files.files;
    const apiKey = process.env.REACT_APP_imgBB_Key;
    const url = `https://api.imgbb.com/1/upload?expiration=600&key=${apiKey}`;
    const formData = new FormData();
    for (let i = 0; i < pics.length; i++) {
      formData.append("image", pics[i]);
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((imgData) => {
          const imgUrl = imgData.data.display_url;
          console.log(imgUrl);
          photos.push(imgUrl);
          setLoading(false);
          setSpin(false);
        })
        .catch((er) => console.log(er));
    }
    const info = {
      Location: District,
      address,
      space,
      rooms: {
        bed,
        bathroom,
        belcony,
      },
      Price,
      details,
      owner: user?.displayName,
      ownerEmail: user?.email,
      ownerPhoto: user?.photoURL,
      id: String(id),
      photos,
      ownerContact: "01777666555",
      features: {
        Lift: "Lift available",
        View: "Open Space",
        Gas: "Line Gas",
        CCTV: "24/7 CCTV Coverage",
      },
    };
    setData(info);
  };

  const handleConfirm = () => {
    saveProperties(data);
  };
  const saveProperties = (data) => {
    fetch("https://rent-roll-server.vercel.app/allProperties", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        navigate("/");
      })
      .catch((er) => console.log(er));
  };

  return (
    <div className="md:pt-10">
      {/* <h1 className="py-2 mb-5 text-3xl font-semibold text-center">
        Add Your Property Details
      </h1> */}

      <div className="items-center justify-center gap-28 md:flex">
        <div className="md:mt-2">
          <div className="bg-transparent md:shadow-md card md:max-w-md md:bg-base-200">
            <h1 className="pt-2 text-2xl font-semibold text-center">
              Property Details
            </h1>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold label-text">District</span>
                </label>
                <input
                  type="text"
                  name="district"
                  placeholder="eg: Dhaka"
                  className="input input-bordered input-sm"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold label-text">Road Name</span>
                </label>
                <input
                  type="text"
                  name="address"
                  placeholder="eg: Nazimuddin Road"
                  className="input input-bordered input-sm"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold label-text">
                    Space Of Your House
                  </span>
                </label>
                <input
                  type="number"
                  name="space"
                  placeholder="eg: 900"
                  className="input input-bordered input-sm"
                  required
                />
              </div>
              <div className="flex gap-2">
                <div className="w-1/3">
                  <label className="label">
                    <span className="font-semibold label-text whitespace-nowrap">
                      Bed-Room
                    </span>
                  </label>
                  <input
                    type="number"
                    name="bed"
                    placeholder=""
                    className="w-full input input-bordered input-sm"
                    required
                  />
                </div>
                <div className="w-1/3">
                  <label className="label">
                    <span className="font-semibold label-text whitespace-nowrap">
                      Bath-Room
                    </span>
                  </label>
                  <input
                    type="number"
                    name="bathroom"
                    placeholder=""
                    className="w-full input input-bordered input-sm"
                    required
                  />
                </div>
                <div className="w-1/3">
                  <label className="label">
                    <span className="font-semibold label-text">Balcony</span>
                  </label>
                  <input
                    type="number"
                    name="balcony"
                    placeholder=""
                    className="w-full input input-bordered input-sm"
                  />
                </div>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="eg: 7000"
                  className="input input-bordered input-sm"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="font-semibold label-text">
                    Details About House
                  </span>
                </label>
                <textarea
                  placeholder="Type house details"
                  name="details"
                  className="w-full textarea textarea-bordered textarea-md "
                  required
                ></textarea>
              </div>
              <div className="form-control">
                <fieldset className="w-full space-y-1 text-gray-800">
                  <label htmlFor="files" className="block text-sm font-medium">
                    Photos <span className="text-red-400">(Max 5 Photos)</span>
                  </label>
                  <div className="">
                    <input
                      type="file"
                      name="files"
                      multiple="multiple"
                      accept="image/jpeg, image/png, image/jpg"
                      className="w-full px-1 py-6 text-gray-600 bg-gray-100 border-2 border-gray-300 border-dashed rounded-md md:px-8"
                      required
                    />
                  </div>
                </fieldset>
              </div>
              <div className="mt-6 form-control">
                {loading ? (
                  <button type="submit" className="btn btn-outline">
                    {spin ? <SmallSpinner></SmallSpinner> : <p>ADD</p>}
                  </button>
                ) : (
                  <PrimaryButton
                    classes="py-2 rounded-md"
                    handler={handleConfirm}
                  >
                    Confirm
                  </PrimaryButton>
                )}
              </div>
            </form>
          </div>
        </div>
        <div className="hidden w-1/2 mt-3 md:block">
          <Lottie animationData={anim} loop={true}></Lottie>
        </div>
      </div>
    </div>
  );
};

export default AddProperty;

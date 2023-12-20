import React, { useContext, useEffect, useState } from "react";
import Spinner from "../../../Components/Spinner";
import { AuthContext } from "../../../Contexts/ContextProvider";
import HomeCard from "./HomeCard";
import { Link } from "react-router-dom";

const BookedProperties = () => {
  const { user } = useContext(AuthContext);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch(`https://rent-roll-server.vercel.app/bookings/${user?.email}`)
      .then((res) => res.json())
      .then((data) => {
        setProperties(data);
        setLoading(false);
      })
      .catch((er) => console.log(er));
  }, [user?.email]);
  console.log(properties);
  return (
    <div className="mt-4">
      {loading ? (
        <div className="flex items-center justify-center h-screen">
          <Spinner></Spinner>
        </div>
      ) : (
        <>
          <h1 className="mx-3 text-xl font-semibold md:text-2xl">
            You have {properties?.length} Bookings for Renting:
          </h1>
          <div className="px-3 divider md:px-0"></div>
          {properties?.length === 0 && (
            <Link
              to="/allproperties"
              className="p-2 ml-2 text-black transition duration-300 rounded bg-white-500 outline outline-1 outline-black hover:bg-slate-700 hover:text-white"
            >
              Book Now
            </Link>
          )}
          <div className="grid gap-5 md:grid-cols-3">
            {properties.map((p, i) => (
              <HomeCard info={p} key={i}></HomeCard>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BookedProperties;

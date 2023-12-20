import { useContext, useState } from "react";
import { AuthContext } from "../../Contexts/ContextProvider";
import SearchResult from "./SearchResult";
import AutoTyping, { BlinkCursor } from "react-auto-typing";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import SmallSpinner from "../../Components/SmallSpinner";

const Search = () => {
  const { user } = useContext(AuthContext);
  const [homes, setHomes] = useState([]);
  const [locat, setLocation] = useState("");
  const [searching, setSearching] = useState(false);
  const [value, setValue] = useState(false);
  const items = [
    {
      id: 0,
      location: "MohaKhali, DOHS, Dhaka",
    },
    {
      id: 1,
      location: "Santosh, Tangail",
    },
    {
      id: 2,
      location: "Banani, Dhaka",
    },
    {
      id: 3,
      location: "Puran bus stand, Tangail",
    },
    {
      id: 4,
      location: "Baby stand, Tangail",
    },
  ];

  const handleOnSelect = (location) => {
    setLocation(location.location);
    if (location?.location) {
      setValue(true);
    }
  };
  const formatResult = (item) => {
    return (
      <>
        <span style={{ display: "block", textAlign: "left" }}>
          {item.location}
        </span>
      </>
    );
  };
  const handleSearch = (e) => {
    setSearching(true);
    e.preventDefault();
    const Location = locat.toLowerCase();
    console.log(Location);
    if (Location) {
      fetch(
        `https://rent-roll-server.vercel.app/searchPropertiesByAddress/${Location}`
      )
        .then((res) => res.json())
        .then((data) => {
          setHomes(data);
          setSearching(false);
        })
        .catch((er) => console.log(er));
    }
  };

  return (
    <div>
      <div
        className="hero h-[32rem] mb-20"
        style={{
          backgroundImage: `url("https://i.ibb.co/ByKBsb7/exterior.jpg")`,
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>

        <div className="text-center hero-content text-neutral-content">
          <div className="min-w-md">
            <AutoTyping
              className="mb-2 text-5xl font-bold"
              active
              textRef={
                user ? `Hello ${user?.displayName.split(" ")[0]}` : "Hello User"
              }
              writeSpeed={100}
              deleteSpeed={150}
              delayToWrite={1800}
              delayToDelete={2000}
            />
            <BlinkCursor
              className="text-4xl font-bold"
              active
              blinkSpeed={500}
            />
            <p className="my-4 font-semibold text-green-300 text-md">
              Search Your House Now!!!
            </p>
            <form onSubmit={handleSearch}>
              <div className="flex-none gap-2 text-black md:flex">
                <div className="md:w-96 w-80">
                  <ReactSearchAutocomplete
                    items={items}
                    onSelect={handleOnSelect}
                    fuseOptions={{ keys: ["location"] }}
                    resultStringKeyName="location"
                    formatResult={formatResult}
                    placeholder="Where you want a house?"
                    styling={{ fontSize: "16px" }}
                  />
                </div>
                <div className="mt-2 md:ml-2 md:mt-0">
                  <button
                    disabled={value ? false : true}
                    type="submit"
                    className={`px-6 py-2 font-semibold bg-transparent hover:text-gray-100 hover:bg-gradient-to-r hover:from-emerald-500 hover:to-lime-500 text-white cursor-pointer rounded-full border transition duration-300`}
                  >
                    {searching ? <SmallSpinner /> : "Search"}
                  </button>
                </div>
              </div>
              {homes?.length ? (
                <div className="p-2 font-semibold text-green-300">
                  <h1>
                    Found {homes?.length} houses{" "}
                    <a href="#search" className="text-lg link">
                      View
                    </a>
                  </h1>
                </div>
              ) : (
                ""
              )}
            </form>
          </div>
        </div>
      </div>
      <div className="w-3/4 mx-auto my-10" id="search">
        {homes.length > 0 && <SearchResult homes={homes}></SearchResult>}
      </div>
    </div>
  );
};

export default Search;

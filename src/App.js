import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import DashBoardLayout from "./layout/DashBoardLayout";
import Main from "./layout/Main";
import About from "./pages/About/About";
import AddProperty from "./pages/AddProperty/AddProperty";
import BookedProperties from "./pages/DashBoard/Buyer/BookedProperties";
import Host from "./pages/DashBoard/Buyer/Host";
import SoldProperties from "./pages/DashBoard/SoldProperties";
import Table from "./pages/DashBoard/Table";
import Home from "./pages/Home/Home";
import AllHouse from "./pages/Houses/AllHouse";
import Details from "./pages/Houses/Details";
import Login from "./pages/Login/Login";
import Buyer from "./pages/SignUp/Buyer";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Error from "./Shared/Error";
import Wishlist from "./pages/DashBoard/Wishlist";
import Profile from "./pages/Profile/Profile";
import { AuthContext } from "./Contexts/ContextProvider";
import { useContext } from "react";

function App() {
  const { user } = useContext(AuthContext);
  const isAdmin = user?.email === "hana@gmail.com";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>,
        },
        {
          path: "/allproperties",
          element: <AllHouse></AllHouse>,
        },
        {
          path: "/homeDetails/:id",
          element: (
            <PrivateRoute>
              <Details></Details>
            </PrivateRoute>
          ),
          loader: ({ params }) =>
            fetch(
              `https://rent-roll-server.vercel.app/allProperties/${params.id}`
            ),
        },

        {
          path: "/about",
          element: <About></About>,
        },
        {
          path: "/login",
          element: <Login></Login>,
        },
        {
          path: "/signup",
          element: <Buyer></Buyer>,
        },
        {
          path: "/profile",
          element: <Profile></Profile>,
        },
      ],
    },
    {
      path: "/dashboard",
      element: <DashBoardLayout></DashBoardLayout>,
      children: [
        {
          path: "/dashboard",
          element: isAdmin ? (
            <Table></Table>
          ) : (
            <BookedProperties></BookedProperties>
          ),
        },
        {
          path: "/dashboard/user-requests",
          element: <Table></Table>,
        },
        {
          path: "/dashboard/sold-properties",
          element: <SoldProperties></SoldProperties>,
        },
        {
          path: "/dashboard/booked-properties",
          element: <BookedProperties></BookedProperties>,
        },
        {
          path: "/dashboard/host-request",
          element: <Host></Host>,
        },
        {
          path: "/dashboard/addProperty",
          element: <AddProperty></AddProperty>,
        },
        {
          path: "/dashboard/wishlist",
          element: <Wishlist></Wishlist>,
        },
      ],
    },
    {
      path: "*",
      element: <Error></Error>,
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

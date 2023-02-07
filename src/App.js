import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import DashBoardLayout from './layout/DashBoardLayout';
import Main from './layout/Main';
import About from './pages/About/About';
import AddProperty from './pages/AddProperty/AddProperty';
import DashBoard from './pages/DashBoard/DashBoard';
import SoldProperties from './pages/DashBoard/SoldProperties';
import Table from './pages/DashBoard/Table';
import Home from './pages/Home/Home';
import AllHouse from './pages/Houses/AllHouse';
import Details from './pages/Houses/Details';
import Login from './pages/Login/Login';
import Buyer from './pages/SignUp/Buyer';
import Error from './Shared/Error';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/allproperties',
          element: <AllHouse></AllHouse>
        },
        {
          path: '/homeDetails/:id',
          element: <Details></Details>,
          loader: ({ params }) => fetch(`http://localhost:5000/allProperties/${params.id}`)
        },
        {
          path: '/addProperty',
          element: <AddProperty></AddProperty>
        },
        {
          path: '/about',
          element: <About></About>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <Buyer></Buyer>
        },

      ]
    },
    {
      path: '/dashboard',
      element: <DashBoardLayout></DashBoardLayout>,
      children: [
        {
          path: '/dashboard/user-requests',
          element: <Table></Table>
        },
        {
          path: '/dashboard/sold-properties',
          element: <SoldProperties></SoldProperties>
        },
      ]
    },
    {
      path: '*',
      element: <Error></Error>
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}>

      </RouterProvider>
    </div>
  );
}

export default App;

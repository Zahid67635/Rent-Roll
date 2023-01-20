import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './layout/Main';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Buyer from './pages/SignUp/Buyer';
import Seller from './pages/SignUp/Seller';
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
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup/buyer',
          element: <Buyer></Buyer>
        },
        {
          path: '/signup/seller',
          element: <Seller></Seller>
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

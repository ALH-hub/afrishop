import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Event from '../pages/Event';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Contact from '../pages/Contact';
import VendorHome from '../pages/VendorHome';
import OrdersPage from '../pages/OrdersPage';
import SellerPage from '../pages/SellerPage';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const BrowserRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
    ],
  },

  {
    path: '/orderpage',
    element: <Layout />,
    children: [
      {
        path: '/orderpage',
        element: <OrdersPage />,
      },
    ],
  },

  {
    path: '/dashboard',
    element: <Layout />,
    children: [
      {
        path: '/dashboard',
        element: <VendorHome />,
      },
    ],
  },
  {
    path: '/SellerPage',
    element: <Layout />,
    children: [
      {
        path: '/SellerPage',
        element: <SellerPage />,
      },
    ],
  },
  {
    path: '/products',
    element: <Layout />,
    children: [
      {
        path: '/products',
        element: <Products />,
      },
    ],
  },
  {
    path: '/event',
    element: <Layout />,
    children: [
      {
        path: '/event',
        element: <Event />,
      },
    ],
  },
  {
    path: '/Login',
    element: <Login />,
  },
  {
    path: '/register',
    element: <Register />,
  },
  {
    path: '/contact',
    element: <Layout />,
    children: [
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
  {
    path: '/profile',
    element: <div>Profile</div>,
  },
  {
    path: '/vendor',
    element: <Layout />,
    children: [
      {
        path: '/vendor',
        element: <VendorHome />,
      },
    ],
  },
  {
    path: '*',
    element: <div>404</div>,
  },
]);

const App = () => {
  return (
    <div>
      <RouterProvider router={BrowserRouter} />
    </div>
  );
};

export default App;

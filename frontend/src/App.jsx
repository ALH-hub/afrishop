import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Products from '../pages/Products';
import Event from '../pages/Event';
import Login from '../pages/Login';
import RegisterForm from '../pages/register';
import Registerevent from '../pages/Registerevents';

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
    element: <RegisterForm />,
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
      <Event />
    </div>
  );
};

export default App;

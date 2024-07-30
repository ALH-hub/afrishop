import logo from '/logo.jpeg';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };

  const token = localStorage.getItem('token');
  const role = localStorage.getItem('role');

  return (
    <nav className='z-20 top-0 left-0 right-0 fixed flex justify-between items-center py-2 px-12 bg-[#FBCF67] '>
      <Link to='/'>
        <img className='w-16 rounded-xl' src={logo} alt='' />
      </Link>
      <div className='flex gap-14'>
        <ul className='flex gap-8 text-base'>
          <li className='p-2 rounded hover:bg-[#ED8728] hover:text-white'>
            <NavLink
              to='/'
              className={({ isActive }) =>
                isActive ? 'bg-[#ED8728] text-white p-2 rounded' : 'text-black'
              }
            >
              Home
            </NavLink>
          </li>
          <li className='hover:bg-[#ED8728] hover:text-white p-2 rounded'>
            <NavLink
              to='/products'
              className={({ isActive }) =>
                isActive ? 'bg-[#ED8728] text-white p-2 rounded' : 'text-black'
              }
            >
              Products
            </NavLink>
          </li>
          <li className='hover:bg-[#ED8728] hover:text-white p-2 rounded'>
            <NavLink
              to='/event'
              className={({ isActive }) =>
                isActive ? 'bg-[#ED8728] text-white p-2 rounded' : 'text-black'
              }
            >
              Events
            </NavLink>{' '}
          </li>
          {role === 'vendor' && (
            <li className='hover:bg-[#ED8728] hover:text-white p-2 rounded'>
              <NavLink
                to='/vendor'
                className={({ isActive }) =>
                  isActive
                    ? 'bg-[#ED8728] text-white p-2 rounded'
                    : 'text-black'
                }
              >
                Vendor Home
              </NavLink>{' '}
            </li>
          )}
          <li className='hover:bg-[#ED8728] hover:text-white p-2 rounded'>
            <NavLink
              to='/contact'
              className={({ isActive }) =>
                isActive ? 'bg-[#ED8728] text-white p-2 rounded' : 'text-black'
              }
            >
              Contact Us
            </NavLink>{' '}
          </li>
        </ul>
      </div>
      {token ? (
        <div className='flex gap-8'>
          <Link to='/profile'>
            <button className='bg-[#ED8728] text-white p-2 rounded'>
              Profile
            </button>
          </Link>
          <button
            onClick={handleLogout}
            className='bg-[#ED8728] text-white p-2 rounded'
          >
            Logout
          </button>
        </div>
      ) : (
        <div className='flex gap-8'>
          <Link to='/login'>
            <button className='bg-[#ED8728] text-white p-2 rounded'>
              Login
            </button>
          </Link>
          <Link to='/register'>
            <button className='bg-[#ED8728] text-white p-2 rounded'>
              Register
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

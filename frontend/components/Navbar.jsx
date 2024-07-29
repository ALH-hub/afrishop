import logo from '/logo.jpeg';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='border border-1 '>
      <img className='w-8' src={logo} alt='' />
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/products'>Products</Link>
          </li>
          <li>
            <Link to='/event'>Event</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

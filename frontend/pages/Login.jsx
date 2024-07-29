import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import time from '/time.jpeg';
import back from '/back.jpeg';

const baseRoute = 'http://localhost:5000';

const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    password: '',
    role: 'client',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user.password === '' || user.email === '') {
        // do not submit form
        return;
      }

      const loginPayload = {
        email: user.email,
        password: user.password,
        role: user.role,
      };

      const response = await axios.post(
        `${baseRoute}/auth/login`,
        loginPayload,
      );
      localStorage.setItem('token', response.data.token);

      navigate('/dashboard');
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div
      className='p-20 flex bg-cover h-screen justify-center opacity-100 gap-10 items-center'
      style={{ backgroundImage: `url(${back})` }}
    >
      <div className='bg-white flex flex-row p-6'>
        <img className='rounded-xl' src={time} width='455rem' alt='' />
        <form
          className='flex flex-col gap-4 rounded-xl w-fit bg-white no-scrollbar overflow-none p-7 items-center '
          onSubmit={handleSubmit}
        >
          <h1 className='text-xl font-bold mb-2'>Login</h1>
          <div className='flex justify-center gap-10 items-center w-full'>
            <input
              className='border border-gray-400 p-4 h-10 rounded focus:outline-none'
              type='email'
              name='email'
              placeholder='Email'
              id='email'
              onChange={handleChange}
              required
            />
          </div>
          <div className='flex justify-center gap-10 items-center w-full'>
            <input
              className='border border-gray-400 p-4 h-10 rounded focus:outline-none'
              type='password'
              name='password'
              placeholder='Password'
              id='password'
              onChange={handleChange}
              required
            />
          </div>

          <div className='w-full flex justify-center items-center gap-4 '>
            <label htmlFor='role'>Role:</label>
            <select
              className='bg-white focus:outline-none border border-gray-200 rounded text-sm p-1'
              name='role'
              id='role'
              value={user.role}
              onChange={handleChange}
              required
            >
              <option value='client'>Client</option>
              <option value='vendor'>Vendor</option>
            </select>
          </div>

          <div className='flex flex-col justify-center gap-6 mt-4 w-full'>
            <button
              className='border border-gray-300  text-center text-sm p-2 rounded bg-[#f6ca97] hover:bg-white hover:text-[#ed8728]'
              type='submit'
            >
              Login
            </button>
            <button
              type='button'
              onClick={handleCancel}
              className='border border-gray-300  text-center text-sm p-2 rounded bg-[#f6ca97] hover:bg-white hover:text-[#ed8728]'
            >
              Cancel
            </button>
          </div>
          <div className='flex gap-2'>
            <span>Don&apos;t have an account?</span>
            <Link className='text-[#ed8728]' to='/register'>
              Register
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

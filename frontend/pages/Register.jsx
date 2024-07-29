import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import time from '/time.jpeg';
import back from '/back.jpeg';

const baseRoute = 'http://localhost:5000';

const CreateUser = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: '',
    email: '',
    role: 'client',
    password: '',
    description: '',
    location: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (user.password === '' || user.email === '' || user.username === '') {
        // do not submit form
        return;
      }

      const userPayload = {
        username: user.username,
        email: user.email,
        password: user.password,
        createdAt: new Date().toISOString(),
        ...(user.role === 'vendor' && {
          description: user.description,
          location: user.location,
        }),
      };

      await axios.post(`${baseRoute}/users/`, userPayload, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });

      navigate('/admin');
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
          <h1 className='text-xl font-bold mb-2'>Create New User</h1>
          <div className='w-full flex justify-center gap-8 items-center'>
            <input
              className='border border-gray-400 h-10 p-4 rounded focus:outline-none'
              type='text'
              name='username'
              id='username'
              placeholder='Username'
              onChange={handleChange}
              required
            />
          </div>
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

          {user.role === 'vendor' && (
            <>
              <div className='flex justify-center gap-10 items-center w-full'>
                <input
                  className='border border-gray-400 p-4 h-10 rounded focus:outline-none'
                  type='text'
                  name='description'
                  placeholder='Description'
                  id='description'
                  onChange={handleChange}
                  required
                />
              </div>
              <div className='flex justify-center gap-10 items-center w-full'>
                <input
                  className='border border-gray-400 p-4 h-10 rounded focus:outline-none'
                  type='text'
                  name='location'
                  placeholder='Location'
                  id='location'
                  onChange={handleChange}
                  required
                />
              </div>
            </>
          )}
          <div className='w-full flex justify-center gap-4 '>
            <label htmlFor='role'>Role:</label>
            <select
              className='bg-white focus:outline-none text-sm items-center rounded border border-gray-200 p-1'
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
              Create
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
            <span>aleady have and account?</span>
            <Link className='text-[#ed8728]' to='/login'>
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;

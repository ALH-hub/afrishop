import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className='flex min-h-screen pt-20'>
      {/* Sidebar */}
      <aside className='w-1/4 bg-gray-800 text-white p-4'>
        <div className='text-2xl font-bold mb-4'>Vendor Dashboard</div>
        <nav>
          <ul>
            <li className='mb-4'>
              <Link
                to='/dashboard'
                className='flex items-center space-x-2 hover:bg-gray-700 p-2 rounded'
              >
                <svg
                  className='w-6 h-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M3 12l2-2 4 4 6-6 4 4v6H3v-4z'></path>
                </svg>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className='mb-4'>
              <Link
                to='/orderpage'
                className='flex items-center space-x-2 hover:bg-gray-700 p-2 rounded'
              >
                <svg
                  className='w-6 h-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M12 12l2-2 4 4 6-6 4 4v6H3v-4z'></path>
                </svg>
                <span>Orders</span>
              </Link>
            </li>
            <li className='mb-4'>
              <Link
                to='/SellerPage'
                className='flex items-center space-x-2 hover:bg-gray-700 p-2 rounded'
              >
                <svg
                  className='w-6 h-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M3 12l2-2 4 4 6-6 4 4v6H3v-4z'></path>
                </svg>
                <span>Products</span>
              </Link>
            </li>
            <li className='mb-4'>
              <Link
                to='/customers'
                className='flex items-center space-x-2 hover:bg-gray-700 p-2 rounded'
              >
                <svg
                  className='w-6 h-6'
                  viewBox='0 0 24 24'
                  fill='none'
                  stroke='currentColor'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path d='M12 12l2-2 4 4 6-6 4 4v6H3v-4z'></path>
                </svg>
                <span>Customers</span>
              </Link>
            </li>
          </ul>
        </nav>
        <div className='mt-auto'>
          <Link
            to='/logout'
            className='flex items-center space-x-2 hover:bg-gray-700 p-2 rounded'
          >
            <svg
              className='w-6 h-6'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path d='M12 12l2-2 4 4 6-6 4 4v6H3v-4z'></path>
            </svg>
            <span>Logout</span>
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className='w-3/4 bg-gray-100 p-6'>
        <div className='text-3xl font-bold mb-6'>Welcome to your Dashboard</div>

        {/* Stats Section */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-6'>
          <div className='bg-white p-4 rounded-lg shadow'>
            <div className='text-xl font-semibold'>Total Sales</div>
            <div className='text-2xl font-bold'>$12,345</div>
          </div>
          <div className='bg-white p-4 rounded-lg shadow'>
            <div className='text-xl font-semibold'>Pending Orders</div>
            <div className='text-2xl font-bold'>45</div>
          </div>
          <div className='bg-white p-4 rounded-lg shadow'>
            <div className='text-xl font-semibold'>Products in Stock</div>
            <div className='text-2xl font-bold'>123</div>
          </div>
        </div>

        {/* Recent Orders */}
        <div className='bg-white p-4 rounded-lg shadow'>
          <div className='text-2xl font-semibold mb-4'>Recent Orders</div>
          <table className='w-full table-auto'>
            <thead>
              <tr className='bg-gray-200'>
                <th className='p-2'>ID</th>
                <th className='p-2'>Customer</th>
                <th className='p-2'>Date</th>
                <th className='p-2'>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='p-2'>001</td>
                <td className='p-2'>Jane Doe</td>
                <td className='p-2'>07/30/2024</td>
                <td className='p-2'>$123.45</td>
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;

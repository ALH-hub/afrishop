import background from '/background.jpg';
import artisan from '/artisan.jpeg';
import { NavLink } from 'react-router-dom';
import PageFooter from './PageFooter';

const Home = () => {
  const products = [
    {
      name: 'Product Name',
      category: 'Product category',
      price: 'Price',
      image: `${artisan}`,
    },
    {
      name: 'Product Name',
      category: 'Product category',
      price: 'Price',
      image: `${artisan}`,
    },
    {
      name: 'Product Name',
      category: 'Product category',
      price: 'Price',
      image: `${artisan}`,
    },
    {
      name: 'Product Name',
      category: 'Product category',
      price: 'Price',
      image: `${artisan}`,
    },
    {
      name: 'Product Name',
      category: 'Product category',
      price: 'Price',
      image: `${artisan}`,
    },
    {
      name: 'Product Name',
      category: 'Product category',
      price: 'Price',
      image: `${artisan}`,
    },
  ];
  return (
    <div className='pt-[5rem]'>
      <div
        className='flex bg-center bg-contain opacity-100 justify-start items-center'
        style={{ backgroundImage: `url(${background})`, height: '70vh' }}
      >
        <div className='flex justify-start h-[30rem] items-center'>
          <h1 className=' text-white text-center text-6xl px-16 font-extrabold'>
            New directions <br /> in <br /> African crafts.
          </h1>
        </div>
      </div>
      <div className='flex p-12 gap-16 items-center'>
        <img className='w-96 rounded-3xl' src={artisan} alt='' />
        <div>
          <h1 className='font-bold pb-8 text-3xl'>
            Cameroonian crafts are a vibrant mosaic, reflecting the diverse
            ethnic groups and regions of the country.
          </h1>
          <p className='text-xl'>
            Cameroonian craftsmanship is a treasure trove that deserves
            protection and celebration. By supporting our artisans, we&apos;re
            preserving a one-of-a-kind cultural heritage and fostering
            sustainable economic growth. Visuals featuring a gallery of
            handcrafted items.
          </p>
        </div>
      </div>
      <div className='px-12 py-4 flex flex-col gap-4 mb-8'>
        <h1 className='font-extrabold text-3xl'>Sample Products</h1>
        <div className='flex flex-wrap justify-evenly '>
          {products.map((product, index) => (
            <div key={index} className='flex flex-row gap-4 p-4'>
              <img
                className='w-36
            rounded-xl'
                src={product.image}
                alt=''
              />
              <div>
                <h1 className='font-bold'>{product.name}</h1>
                <p>{product.category}</p>
                <p>{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        <NavLink
          to='/products'
          className={({ isActive }) =>
            isActive
              ? 'bg-[#ED8728] text-white p-2 rounded'
              : 'text-black hover:bg-[#ED8728] hover:text-white p-2 rounded text-center font-bold text-xl'
          }
        >
          Get More
        </NavLink>
      </div>
      <PageFooter />
    </div>
  );
};

export default Home;

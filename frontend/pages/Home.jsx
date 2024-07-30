import background from '/background.jpg';
import artisan from '/artisan.jpeg';
import { NavLink } from 'react-router-dom';
import PageFooter from '../components/PageFooter';

const initialProducts = [
  {
    name: 'Product 1',
    imageUrl:
      'https://res.cloudinary.com/dzsv3mhyd/image/upload/v1722317993/955e9f66-c0b3-4665-8972-2fc081dbff46_uz2hwo.jpg',
    category: 'wood sculpture',
    description:
      'Beautifully handcrafted wood sculpture with intricate details, perfect for home decor or as a unique gift.',
    price: 29.99,
  },
  {
    name: 'Product 2',
    imageUrl:
      'https://res.cloudinary.com/dzsv3mhyd/image/upload/v1722317986/930b0210-324b-4203-861d-1ed4eea98337_ymcda1.jpg',
    category: 'basket weaving',
    description:
      'Exquisite basket weaving products made from natural materials, showcasing traditional craftsmanship.',
    price: 39.99,
  },
  {
    name: 'Product 3',
    imageUrl:
      'https://res.cloudinary.com/dzsv3mhyd/image/upload/v1722317981/1a8ad569-8abe-47ce-b379-110c0c72edd8_owy5mj.jpg',
    category: 'pottery',
    description:
      'High-quality pottery with unique designs, perfect for adding a touch of elegance to any space.',
    price: 49.99,
  },
  {
    name: 'Product 4',
    imageUrl:
      'https://res.cloudinary.com/dzsv3mhyd/image/upload/v1722317971/a8e6888f-ad96-4029-873d-b7fbc73f596f_uk5nqo.jpg',
    category: 'weaving',
    description:
      'Handwoven textiles that are both beautiful and functional, ideal for home decor or fashion accessories.',
    price: 59.99,
  },
  {
    name: 'Product 5',
    imageUrl:
      'https://res.cloudinary.com/dzsv3mhyd/image/upload/v1722317963/09919eb7-9044-4803-a938-ab53b4da47aa_tzy44i.jpg',
    category: 'clothing',
    description:
      'Stylish and comfortable clothing made from high-quality materials, perfect for everyday wear.',
    price: 69.99,
  },
  {
    name: 'Product 6',
    imageUrl:
      'https://res.cloudinary.com/dzsv3mhyd/image/upload/v1722317945/6acfa413-8911-45d8-b7fa-03a7c5c84abc_i63qxa.jpg',
    category: 'leatherwork',
    description:
      'Expertly crafted leather goods, including bags, belts, and accessories, designed to last a lifetime.',
    price: 79.99,
  },
  {
    name: 'Product 7',
    imageUrl:
      'https://res.cloudinary.com/dzsv3mhyd/image/upload/v1722317926/2fd01bf7-07cd-4ffb-9306-dccbcd68bfc2_c88s4h.jpg',
    category: 'pottery',
    description:
      'Handcrafted pottery with beautiful glazes and designs, perfect for collectors and art enthusiasts.',
    price: 89.99,
  },
  {
    name: 'Product 8',
    imageUrl:
      'https://res.cloudinary.com/dzsv3mhyd/image/upload/v1722317898/96d4c2cd-f262-4484-b2bf-57a963df95c9_zltdd5.jpg',
    category: 'terracotta',
    description:
      'Rustic terracotta pieces that bring a touch of the earth into your home, perfect for garden or indoor use.',
    price: 99.99,
  },
  {
    name: 'Product 9',
    imageUrl:
      'https://res.cloudinary.com/dzsv3mhyd/image/upload/v1722317918/c7dca8c1-2d91-48a2-8abd-a24bb1568e91_r7lrw2.jpg',
    category: 'weaving',
    description:
      'Intricately woven textiles, perfect for adding a unique touch to your home decor or wardrobe.',
    price: 109.99,
  },
  {
    name: 'Product 10',
    imageUrl:
      'https://res.cloudinary.com/dzsv3mhyd/image/upload/v1722317887/e2400512-c067-4324-96ab-f0c520535fbe_spfd2u.jpg',
    category: 'weaving',
    description:
      'Handwoven pieces that combine traditional techniques with modern designs, ideal for any setting.',
    price: 119.99,
  },
  {
    name: 'Product 11',
    imageUrl:
      'https://res.cloudinary.com/dzsv3mhyd/image/upload/v1722317872/0fa350fb-e197-4de5-b8dd-1c8cbe3058f7_yjq0g2.jpg',
    category: 'painting',
    description:
      'Original paintings by talented artists, perfect for adding a splash of color and creativity to your space.',
    price: 129.99,
  },
  {
    name: 'Product 12',
    imageUrl:
      'https://res.cloudinary.com/dzsv3mhyd/image/upload/v1722317907/157b0903-79b1-4c0b-9141-0c84d475bfe4_t3tafc.jpg',
    category: 'clothing',
    description:
      'Fashionable clothing items that are both comfortable and stylish, made with high-quality fabrics.',
    price: 139.99,
  },
];

const getRandomProducts = (products, count) => {
  const shuffled = products.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const Home = () => {
  const randomProducts = getRandomProducts(initialProducts, 8);

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
        <div className='flex flex-wrap justify-center '>
          {randomProducts.map((product, index) => (
            <div key={index} className='flex flex-row gap-4 p-4'>
              <img
                className='w-36 h-36 rounded-xl object-cover'
                src={product.imageUrl}
                alt=''
              />
              <div>
                <h1 className='font-bold'>{product.name}</h1>
                <p>{product.category}</p>
                <p>${product.price}</p>
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

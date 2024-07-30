import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Products.css';
import axios from 'axios';

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

const ProductGrid = () => {
  const [products, setProducts] = useState(initialProducts);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [sortOrder, setSortOrder] = useState('default');
  const [cart, setCart] = useState([]); // Cart state
  const [DisplayByCategory, setDisplayByCategory] = useState('all'); // Display products by category
  const [cartItemCount, setCartItemCount] = useState(0); // Cart item count
  const [values, setValues] = useState([]); // Display products by category
  const navigate = useNavigate(); // Navigation hook

  // Handle sorting products
  const handleSortChange = (e) => {
    const order = e.target.value;
    setSortOrder(order);

    let sortedProducts = [...products];
    if (order === 'price-asc') {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (order === 'price-desc') {
      sortedProducts.sort((a, b) => b.price - a.price);
    } else if (order === 'category') {
      sortedProducts.sort((a, b) => a.category.localeCompare(b.category));
    }
    setProducts(sortedProducts);
  };

  // Handle product card click
  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  // Close the product modal
  const handleCloseDetails = () => {
    setSelectedProduct(null);
  };

  // Add the selected product to the cart
  const handleAddToCart = () => {
    setCart([...cart, selectedProduct]);
    setCartItemCount(cartItemCount + 1);

    const userChoice = window.confirm(
      'Produit ajouté au panier ! Voulez-vous accéder au panier maintenant ou continuer vos achats ?',
    );
    if (userChoice) {
      navigate('/cart'); // Redirect to the cart page
    }
    setSelectedProduct(null);
  };

  useEffect(() => {
    const handleDisplayByCategory = async () => {
      if (DisplayByCategory === 'all') {
        return '';
      }
      try {
        const resp = await axios.get(
          `https://localhost:3030/api/products?cat=${DisplayByCategory}`,
        );
        setValues(resp.data);
      } catch (error) {
        return products;
      }
    };
    handleDisplayByCategory();
  }, [DisplayByCategory]);

  return (
    <>
      <div className='product-grid-container'>
        <div className='sort-container'>
          <label
            htmlFor='sort'
            className='mr-2 text-sm font-medium text-gray-700 mb-4'
          >
            Sort By :
          </label>
          <select
            id='sort'
            value={sortOrder}
            onChange={handleSortChange}
            className='sort-select'
          >
            <option value='default'>Default</option>
            <option value='price-asc'>Increasing Price</option>
            <option value='price-desc'>Decreasing Price</option>
            <option value='category'>Category</option>
          </select>
        </div>

        <div className='category-nav'>
          <ul className='category-nav'>
            <li>
              <Link
                to='/products?cat=art'
                onClick={() => setDisplayByCategory('art')}
              >
                Art
              </Link>
            </li>
            <li>
              <Link
                to='/products?cat=production'
                onClick={() => setDisplayByCategory('production')}
              >
                Production
              </Link>
            </li>
            <li>
              <Link
                to='/products?cat=service'
                onClick={() => setDisplayByCategory('service')}
              >
                Service
              </Link>
            </li>
          </ul>
        </div>

        <div className='product-grid'>
          {values && values.length > 0
            ? values.map((value, index) => (
                <div
                  key={index}
                  className='product-card'
                  onClick={() => handleProductClick(value)}
                >
                  <div className=''>
                    <img
                      src={value.imageUrl}
                      alt={value.name}
                      className='product-image'
                    />
                  </div>
                  <div className='product-details'>
                    <h2 className='product-title'>{value.name}</h2>
                    <p className='product-category'>{value.category}</p>
                    <p className='product-price'>${value.price.toFixed(2)}</p>
                  </div>
                </div>
              ))
            : products.map((product, index) => (
                <div
                  key={index}
                  className='product-card'
                  onClick={() => handleProductClick(product)}
                >
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className='product-image'
                  />
                  <div className='product-details'>
                    <h2 className='product-title'>{product.name}</h2>
                    <p className='product-category'>{product.category}</p>
                    <p className='product-price'>${product.price.toFixed(2)}</p>
                  </div>
                </div>
              ))}
        </div>

        {selectedProduct && (
          <div className='product-modal'>
            <div className='product-modal-content'>
              <span
                className='product-modal-close'
                onClick={handleCloseDetails}
              >
                &times;
              </span>
              <img
                src={selectedProduct.imageUrl}
                alt={selectedProduct.name}
                className='product-modal-image'
              />
              <h2 className='product-modal-title'>{selectedProduct.name}</h2>
              <p className='product-modal-category'>
                Catégorie: {selectedProduct.category}
              </p>
              <p className='product-modal-price'>
                ${selectedProduct.price.toFixed(2)}
              </p>
              <button
                className='product-modal-button'
                onClick={handleAddToCart}
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        )}

        <div className='cart-icon' onClick={() => navigate('/cart')}>
          🛒 {cartItemCount} {/* Display the number of items in the cart */}
        </div>
      </div>
    </>
  );
};

export default ProductGrid;

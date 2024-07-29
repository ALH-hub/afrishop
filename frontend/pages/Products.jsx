import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Products.css';
import axios from 'axios';

const initialProducts = [
  {
    name: 'Produit 1',
    imageUrl: 'https://via.placeholder.com/400?text=Produit+1',
    category: 'Électronique',
    description: 'Électronique',
    price: 29.99,
  },
  {
    name: 'Produit 2',
    imageUrl: 'https://via.placeholder.com/400?text=Produit+2',
    category: 'Vêtements',
    description: 'Vêtements',
    price: 39.99,
  },
  {
    name: 'Produit 3',
    imageUrl: 'https://via.placeholder.com/400?text=Produit+3',
    category: 'Maison',
    price: 49.99,
  },
  {
    name: 'Produit 4',
    imageUrl: 'https://via.placeholder.com/400?text=Produit+4',
    category: 'Électronique',
    description: 'Électronique',
    price: 59.99,
  },
  {
    name: 'Produit 5',
    imageUrl: 'https://via.placeholder.com/400?text=Produit+5',
    category: 'Vêtements',
    description: 'Vêtements',
    price: 69.99,
  },
  {
    name: 'Produit 6',
    imageUrl: 'https://via.placeholder.com/400?text=Produit+6',
    category: 'art',
    description: 'description du produit',
    price: 79.99,
  },
  {
    name: 'Produit 7',
    imageUrl: 'https://via.placeholder.com/400?text=Produit+7',
    category: 'art',
    description: 'description du produit',
    price: 89.99,
  },
  {
    name: 'Produit 8',
    imageUrl: 'https://via.placeholder.com/400?text=Produit+8',
    category: 'art',
    description: 'description du produit',
    price: 99.99,
  },
  {
    name: 'Produit 9',
    imageUrl: 'https://via.placeholder.com/400?text=Produit+9',
    category: 'Production',
    description: 'description du produit',
    price: 109.99,
  },
  {
    name: 'Produit 10',
    imageUrl: 'https://via.placeholder.com/400?text=Produit+10',
    category: 'Production',
    description: 'description du produit',
    price: 119.99,
  },
  {
    name: 'Produit 11',
    imageUrl: 'https://via.placeholder.com/400?text=Produit+11',
    category: 'Production',
    description: 'description du produit',
    price: 129.99,
  },
  {
    name: 'Produit 12',
    imageUrl: 'https://via.placeholder.com/400?text=Produit+12',
    category: 'service',
    description: 'description du produit',
    price: 139.99,
  },
  {
    name: 'Produit 12',
    imageUrl: 'https://via.placeholder.com/400?text=Produit+12',
    category: 'service',
    description: 'description du produit',
    price: 139.99,
  },
  {
    name: 'Produit 12',
    imageUrl: 'https://via.placeholder.com/400?text=Produit+12',
    category: 'service',
    description: 'description du produit',
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
                  <img
                    src={value.imageUrl}
                    alt={value.name}
                    className='product-image'
                  />
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

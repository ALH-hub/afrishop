import { useState } from 'react';
import './SellerPage.css';

const initialProducts = [
  {
    id: 1,
    name: 'Product A',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product A',
  },
  {
    id: 2,
    name: 'Product B',
    price: '$30.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product B',
  },
  {
    id: 1,
    name: 'Product A',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product A',
  },
  {
    id: 2,
    name: 'Product B',
    price: '$30.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product B',
  },
  {
    id: 1,
    name: 'Product A',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product A',
  },
  {
    id: 2,
    name: 'Product B',
    price: '$30.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product B',
  },
  {
    id: 1,
    name: 'Product A',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product A',
  },
  {
    id: 2,
    name: 'Product B',
    price: '$30.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product B',
  },
  {
    id: 1,
    name: 'Product A',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product A',
  },
  {
    id: 2,
    name: 'Product B',
    price: '$30.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product B',
  },
  {
    id: 1,
    name: 'Product A',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product A',
  },
  {
    id: 2,
    name: 'Product B',
    price: '$30.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product B',
  },
  {
    id: 1,
    name: 'Product A',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product A',
  },
  {
    id: 2,
    name: 'Product B',
    price: '$30.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product B',
  },
  {
    id: 1,
    name: 'Product A',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product A',
  },
  {
    id: 2,
    name: 'Product B',
    price: '$30.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product B',
  },
  {
    id: 1,
    name: 'Product A',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product A',
  },
  {
    id: 2,
    name: 'Product B',
    price: '$30.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product B',
  },
  {
    id: 1,
    name: 'Product A',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product A',
  },
  {
    id: 2,
    name: 'Product B',
    price: '$30.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product B',
  },
  {
    id: 1,
    name: 'Product A',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product A',
  },
  {
    id: 2,
    name: 'Product B',
    price: '$30.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product B',
  },
  {
    id: 1,
    name: 'Product A',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product A',
  },
  {
    id: 2,
    name: 'Product B',
    price: '$30.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product B',
  },
  {
    id: 1,
    name: 'Product A',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product A',
  },
  {
    id: 2,
    name: 'Product B',
    price: '$30.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product B',
  },
  {
    id: 1,
    name: 'Product A',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product A',
  },
  {
    id: 2,
    name: 'Product B',
    price: '$30.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product B',
  },
  {
    id: 1,
    name: 'Product A',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product A',
  },
  {
    id: 2,
    name: 'Product B',
    price: '$30.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product B',
  },
  {
    id: 1,
    name: 'Product A',
    price: '$20.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product A',
  },
  {
    id: 2,
    name: 'Product B',
    price: '$30.00',
    image: 'https://via.placeholder.com/150',
    description: 'Description of Product B',
  },
  // Add more products as needed
];

const ProductsPage = () => {
  const [products, setProducts] = useState(initialProducts);
  const [newProduct, setNewProduct] = useState({
    name: '',
    price: '',
    image: '',
    description: '',
  });
  const [editingProduct, setEditingProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleAddProduct = () => {
    if (
      newProduct.name &&
      newProduct.price &&
      newProduct.image &&
      newProduct.description
    ) {
      if (editingProduct) {
        // Update existing product
        setProducts(
          products.map((product) =>
            product.id === editingProduct.id
              ? { ...newProduct, id: editingProduct.id }
              : product,
          ),
        );
        setEditingProduct(null);
      } else {
        // Add new product
        setProducts([...products, { ...newProduct, id: products.length + 1 }]);
      }
      setNewProduct({ name: '', price: '', image: '', description: '' });
      setShowModal(false);
    }
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter((product) => product.id !== id));
  };

  const handleEditProduct = (product) => {
    setNewProduct(product);
    setEditingProduct(product);
    setShowModal(true);
  };

  return (
    <div className='products-page'>
      <button
        onClick={() => {
          setNewProduct({ name: '', price: '', image: '', description: '' });
          setEditingProduct(null);
          setShowModal(true);
        }}
        className='add-button floating-button'
      >
        Add Product
      </button>

      {showModal && (
        <div className='modal'>
          <div className='modal-content'>
            <span className='close' onClick={() => setShowModal(false)}>
              &times;
            </span>
            <h2>{editingProduct ? 'Edit Product' : 'Add Product'}</h2>
            <input
              type='text'
              placeholder='Product Name'
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
              className='input'
            />
            <input
              type='text'
              placeholder='Product Price'
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
              className='input'
            />
            <input
              type='text'
              placeholder='Product Image URL'
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
              className='input'
            />
            <textarea
              placeholder='Product Description'
              value={newProduct.description}
              onChange={(e) =>
                setNewProduct({ ...newProduct, description: e.target.value })
              }
              className='textarea'
            />
            <button onClick={handleAddProduct} className='add-button'>
              {editingProduct ? 'Save Changes' : 'Add Product'}
            </button>
          </div>
        </div>
      )}

      <div className='products-list'>
        {products.map((product) => (
          <div key={product.id} className='product-card'>
            <img
              src={product.image}
              alt={product.name}
              className='product-image'
            />
            <div className='product-info'>
              <h2 className='product-name'>{product.name}</h2>
              <p className='product-price'>{product.price}</p>
              <p className='product-description'>{product.description}</p>
            </div>
            <div className='product-actions'>
              <button
                onClick={() => handleEditProduct(product)}
                className='action-button edit-button'
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteProduct(product.id)}
                className='action-button delete-button'
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;

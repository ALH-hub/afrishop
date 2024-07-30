import { useState } from 'react';
import './OrdersPage.css';

const initialOrders = [
  {
    id: 1,
    customerName: 'John Doe',
    items: [
      { name: 'Product A', quantity: 2, price: '$20.00' },
      { name: 'Product B', quantity: 1, price: '$30.00' },
    ],
    status: 'Pending',
  },
  {
    id: 2,
    customerName: 'Jane Smith',
    items: [{ name: 'Product C', quantity: 1, price: '$40.00' }],
    status: 'Shipped',
  },
  // Add more orders as needed
];

const OrdersPage = () => {
  const [orders, setOrders] = useState(initialOrders);

  const handleMarkShipped = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: 'Shipped' } : order,
      ),
    );
  };

  const handleCancelOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className='orders-page'>
      <h1 className='text-3xl font-bold mb-6'>Manage Orders</h1>
      <div className='orders-list'>
        {orders.map((order) => (
          <div key={order.id} className='order-card'>
            <div className='order-header'>
              <h2 className='order-customer-name'>{order.customerName}</h2>
              <span className={`order-status ${order.status.toLowerCase()}`}>
                {order.status}
              </span>
            </div>
            <div className='order-items'>
              {order.items.map((item, index) => (
                <div key={index} className='order-item'>
                  <span className='item-name'>{item.name}</span>
                  <span className='item-quantity'>x{item.quantity}</span>
                  <span className='item-price'>{item.price}</span>
                </div>
              ))}
            </div>
            <div className='order-actions'>
              {order.status === 'Pending' && (
                <button
                  onClick={() => handleMarkShipped(order.id)}
                  className='action-button shipped-button'
                >
                  Mark as Shipped
                </button>
              )}
              <button
                onClick={() => handleCancelOrder(order.id)}
                className='action-button cancel-button'
              >
                Cancel Order
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrdersPage;

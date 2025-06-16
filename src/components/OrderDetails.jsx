import React from 'react';
import OrderTracking from './OrderTracking';
import './OrderDetails.css';

const OrderDetails = ({ order }) => {
  if (!order) return <p>No order selected.</p>;

  return (
    <div className="order-details-container">
      <h2>📦 Order Details</h2>
      <div className="detail-grid">
        <p><strong>Order ID:</strong> {order.id}</p>
        <p><strong>Customer:</strong> {order.customer}</p>
        <p><strong>Pickup Location:</strong> {order.pickup}</p>
        <p><strong>Dropoff Location:</strong> {order.dropoff}</p>
        <p><strong>Payment Method:</strong> {order.payment}</p>
        <p><strong>Status:</strong> {order.status}</p>
      </div>

      <OrderTracking status={order.status} />
    </div>
  );
};

export default OrderDetails;

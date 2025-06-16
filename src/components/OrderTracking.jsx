import React from 'react';
import './OrderDetails.css';
import './OrderTracking.css';

const steps = ['Order Placed', 'Picked Up', 'In Transit', 'Delivered'];

const OrderTracking = ({ status }) => {
  const statusIndex = {
    'Pending': 0,
    'Picked Up': 1,
    'In Transit': 2,
    'Delivered': 3,
  }[status] ?? 0;

  return (
    <div className="tracking-container">
      <h3 >🚚 Order Tracking</h3>
      <div className="tracking-steps">
        {steps.map((step, index) => (
          <div key={step} className={`step ${index <= statusIndex ? 'active' : ''}`}>
            <div className="circle">{index + 1}</div>
            <p>{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderTracking;

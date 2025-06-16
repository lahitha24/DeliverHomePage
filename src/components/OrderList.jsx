import React from 'react';
import './OrderList.css';

const OrderList = () => {
  const orders = [
    {
      id: 'ORD001',
      customer: 'Ravi Kumar',
      pickup: 'Main Warehouse',
      dropoff: 'Sector 21, Gurgaon',
      payment: 'Prepaid',
      status: 'Pending',
    },
    {
      id: 'ORD002',
      customer: 'Pooja Sharma',
      pickup: 'Main Warehouse',
      dropoff: 'Dwarka, Delhi',
      payment: 'COD',
      status: 'In Transit',
    },
    {
      id: 'ORD003',
      customer: 'Amit Singh',
      pickup: 'Main Warehouse',
      dropoff: 'Noida Sector 12',
      payment: 'Prepaid',
      status: 'Delivered',
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return '#facc15';
      case 'In Transit':
        return '#3b82f6';
      case 'Delivered':
        return '#10b981';
      default:
        return '#ccc';
    }
  };

  return (
    <div className="orderlist-container">
      <h1 className="orderlist-title">📋 All Orders</h1>
      <table className="order-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Customer</th>
            <th>Pickup</th>
            <th>Dropoff</th>
            <th>Payment</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.id}</td>
              <td>{order.customer}</td>
              <td>{order.pickup}</td>
              <td>{order.dropoff}</td>
              <td>{order.payment}</td>
              <td>
                <span
                  className="status-badge"
                  style={{ backgroundColor: getStatusColor(order.status) }}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;

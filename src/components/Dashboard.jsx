import React, { useState } from 'react';
import './Dashboard.css';
import agentImage from '../assets/deliveryAgent.webp';

const Dashboard = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [orderStatuses, setOrderStatuses] = useState({});

  const assignedOrders = [
    {
      id: 'ORD001',
      customer: 'Riya Sharma',
      location: 'Sector 22, Noida',
      payment: 'COD',
      status: 'Out for Delivery',
      liveLocation: '28.6139° N, 77.2090° E'
    },
    {
      id: 'ORD002',
      customer: 'Arjun Mehta',
      location: 'Connaught Place, Delhi',
      payment: 'Prepaid',
      status: 'In Transit',
      liveLocation: '28.6304° N, 77.2177° E'
    }
  ];

  const handleStatusChange = (id, newStatus) => {
    setOrderStatuses({ ...orderStatuses, [id]: newStatus });
  };

  return (
    <div className="dashboard">
      <header className="navbar">
        <div className="navbar-left">
          <span className="navbar-logo">SmartShip</span>
        </div>
        <nav className="navbar-center">
          <a href="#">Services</a>
          <a href="#">Support</a>
          <a href="#">Track</a>
        </nav>
        <div className="navbar-right">
          <div className="agent-profile">
            <strong>Rakesh Kumar</strong><br />
            Agent ID: AGT014
          </div>
        </div>
      </header>

      <main className="main-content">
        <section className="orders-section">
          <h2>📦 Assigned Orders</h2>
          {assignedOrders.map(order => (
            <div className="order-card" key={order.id}>
              <h3>{order.customer}</h3>
              <p><span className="label">Location:</span> {order.location}</p>
              <p><span className="label">Payment:</span> {order.payment}</p>
              <p><span className="label">Status:</span> {orderStatuses[order.id] || order.status}</p>
              <select
                className="status-dropdown"
                value={orderStatuses[order.id] || order.status}
                onChange={(e) => handleStatusChange(order.id, e.target.value)}
              >
                <option>Pending</option>
                <option>In Transit</option>
                <option>Out for Delivery</option>
                <option>Delivered</option>
              </select>
              <button onClick={() => setSelectedOrder(order)}>View Tracking</button>
            </div>
          ))}
        </section>

        <aside className="image-section">
          <img src={agentImage} alt="Delivery Agent" />
          <p>Delivering with Speed & Safety 🚴‍♂️</p>
        </aside>
      </main>

      <footer className="footer">
        <p>© 2025 SmartShip | Contact: +91 9876543210 | support@SmartShip.com</p>
      </footer>

      {selectedOrder && (
        <div className="tracking-overlay">
          <div className="tracking-panel">
            <button className="close-btn" onClick={() => setSelectedOrder(null)}>✖</button>
            <h3>Tracking Order: {selectedOrder.id}</h3>
            <p><span className="label">Customer:</span> {selectedOrder.customer}</p>
            <p><span className="label">Current Status:</span> {orderStatuses[selectedOrder.id] || selectedOrder.status}</p>
            <p><span className="label">Live Location:</span> {selectedOrder.liveLocation}</p>
            <p>Status updates in real-time via GPS 📍</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

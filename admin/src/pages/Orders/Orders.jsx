import React, { useEffect, useState } from 'react';
import './Orders.css';
import { toast } from 'react-toastify';
import axios from 'axios';
import { assets, url, currency } from '../../assets/assets';

const Order = () => {
  const [orders, setOrders] = useState([]);

  // Fetch all orders
  const fetchAllOrders = async () => {
    try {
      const response = await axios.get(`${url}/api/order/list`);
      if (response.data.success) {
        setOrders(response.data.data.reverse());
      } else {
        toast.error("Error fetching orders");
      }
    } catch (error) {
      console.log(error);
      toast.error("Error fetching orders");
    }
  };

  // Update order status
  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(`${url}/api/order/status`, {
        orderId,
        status: event.target.value
      });
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error("Error updating status");
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className='order add'>
      <h3>Admin Orders Page</h3>
      <div className="order-list">
        {orders.map((order, index) => (
          <div key={index} className='order-item'>
            <img src={assets.parcel_icon} alt="" />
            <div className="order-details">
              <p><b>Customer:</b> {order.address.firstName} {order.address.lastName}</p>
              <p><b>Address:</b> {order.address.street}, {order.address.city}, {order.address.state}, {order.address.country} - {order.address.zipcode}</p>
              <p><b>Phone:</b> {order.address.phone}</p>
              <p><b>Items:</b></p>
              {order.items.map((item, idx) => (
                <div key={idx} className="order-item-detail">
                  <p>Vehicle: {item.name}</p>
                  <p>Hours: {item.hours}</p>
                  <p>Start: {item.startDate} {item.startTime}</p>
                  <p>End: {item.endDate} {item.endTime}</p>
                  <p>Unit Price: {currency}{item.unitPrice}</p>
                  <p>Labour Cost: {currency}{item.labourCost}</p>
                  <p>Total: {currency}{item.totalPrice}</p>
                  <hr />
                </div>
              ))}
            </div>
            <p><b>Items Count:</b> {order.items.length}</p>
            <p><b>Order Amount:</b> {currency}{order.amount}</p>
            <p>
              <b>Status:</b>
              <select onChange={(e) => statusHandler(e, order._id)} value={order.status}>
                <option value="Available">Available</option>
                <option value="Booked">Booked</option>
                <option value="Out for Rental">Out for Rental</option>
                <option value="In Use">In Use</option>
                <option value="Returned">Returned</option>
                <option value="Under Maintenance">Under Maintenance</option>
              </select>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;

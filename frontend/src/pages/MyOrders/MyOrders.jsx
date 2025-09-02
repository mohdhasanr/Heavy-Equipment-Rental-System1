import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import axios from 'axios';
import { StoreContext } from '../../Context/StoreContext';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const { url, token, currency } = useContext(StoreContext);

    const fetchOrders = async () => {
        try {
            const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
            setOrders(response.data.data);
        } catch (error) {
            console.log("Error fetching orders:", error);
        }
    };

    useEffect(() => {
        if (token) fetchOrders();
    }, [token]);

    return (
        <div className='my-orders'>
            <h2>My Orders</h2>
            {orders.length === 0 && <p>No orders found</p>}
            {orders.map((order, idx) => {
                const totalLabourCost = order.items.reduce((acc, i) => acc + i.hours * 10, 0);
                const totalAmount = order.items.reduce((acc, i) => acc + i.totalPrice, 0) + totalLabourCost;

                return (
                    <div key={idx} className='my-orders-order'>
                        <h3>Order #{order._id}</h3>
                        <div className="order-items">
                            {order.items.map((item, index) => (
                                <div key={index} className="order-item">
                                    <img src={item.image} alt={item.name} />
                                    <div className="item-details">
                                        <p><b>{item.name}</b></p>
                                        <p>Hours: {item.hours}</p>
                                        <p>Start: {item.startDate} {item.startTime}</p>
                                        <p>End: {item.endDate} {item.endTime}</p>
                                        <p>Unit Price: {currency}{item.unitPrice}</p>
                                        <p>Labour Cost: {currency}{item.hours * 10}</p>
                                        <p>Total: {currency}{item.totalPrice + item.hours * 10}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="order-summary">
                            <p><b>Total Amount: {currency}{totalAmount}</b></p>
                            <p>Status: <span className={order.status.toLowerCase().replace(/\s/g,'-')}>&#x25cf; {order.status}</span></p>
                            <p>Items Count: {order.items.length}</p>
                            <button onClick={fetchOrders}>Refresh / Track Order</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MyOrders;

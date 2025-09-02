import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
    const { cartItems, currency } = useContext(StoreContext);
    const navigate = useNavigate();

    // Total amount including labour cost (already included in totalPrice)
    const totalAmount = Object.values(cartItems).reduce((acc, item) => acc + item.totalPrice, 0);

    return (
        <div className="cart">
            <h1>Your Cart</h1>
            {Object.keys(cartItems).length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                    <div className="cart-items-title">
                        <span>Image</span>
                        <span>Vehicle Name</span>
                        <span>Hours</span>
                        <span>Start</span>
                        <span>End</span>
                        <span>Total</span>
                    </div>
                    <div className="cart-items-list">
                        {Object.entries(cartItems).map(([id, item]) => (
                            <div key={id} className="cart-items-item">
                                <img src={item.image} alt={item.name} />
                                <p>{item.name}</p>
                                <p>{item.hours}</p>
                                <p>{item.startDate} {item.startTime}</p>
                                <p>{item.endDate} {item.endTime}</p>
                                <p>{currency}{item.totalPrice}</p>
                            </div>
                        ))}
                    </div>

                    <div className="cart-total">
                        <h2>Total Amount: {currency}{totalAmount}</h2>
                        <button onClick={() => navigate('/placeorder')}>Place Order</button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;

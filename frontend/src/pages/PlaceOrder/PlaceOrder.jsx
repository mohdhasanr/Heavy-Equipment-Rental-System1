import React, { useContext, useState, useEffect } from 'react';
import './PlaceOrder.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';

const PlaceOrder = () => {
    const { cartItems, token, url, setCartItems, currency } = useContext(StoreContext);
    const navigate = useNavigate();

    const [data, setData] = useState({
        firstName: "", lastName: "", email: "", street: "", city: "", state: "", zipcode: "", country: "", phone: "", googleMap: ""
    });

    const onChangeHandler = (e) => setData({ ...data, [e.target.name]: e.target.value });

    const placeOrder = async (e) => {
        e.preventDefault();

        if (!token) {
            toast.error("Sign in first");
            return navigate('/cart');
        }

        if (Object.keys(cartItems).length === 0) {
            toast.error("Cart is empty");
            return navigate('/cart');
        }

        const orderItems = Object.values(cartItems).map(item => ({ ...item }));

        // totalAmount is already including labour cost in totalPrice
        const totalAmount = orderItems.reduce((acc, item) => acc + item.totalPrice, 0);

        const orderData = {
            address: data,
            items: orderItems,
            amount: totalAmount
        };

        try {
            const response = await axios.post(url + "/api/order/placecod", orderData, { headers: { token } });
            if (response.data.success) {
                toast.success(response.data.message);
                setCartItems({});
                navigate("/myorders");
            } else {
                toast.error("Something went wrong");
            }
        } catch (error) {
            console.error(error);
            toast.error("Something went wrong");
        }
    };

    useEffect(() => {
        if (!token) {
            toast.error("Sign in first");
            navigate('/cart');
        } else if (Object.keys(cartItems).length === 0) {
            navigate('/cart');
        }
    }, [token, cartItems]);

    const totalAmount = Object.values(cartItems).reduce((acc, item) => acc + item.totalPrice, 0);

    return (
        <form onSubmit={placeOrder} className='place-order'>
            <div className="place-order-left">
                <p className='title'>Delivery Information</p>
                {Object.keys(data).map((key) => (
                    <input
                        key={key}
                        type={key === "email" ? "email" : "text"}
                        name={key}
                        placeholder={key.charAt(0).toUpperCase() + key.slice(1)}
                        value={data[key]}
                        onChange={onChangeHandler}
                        required={key !== "googleMap"}
                    />
                ))}
            </div>

            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Total</h2>
                    <p>Total Amount: {currency}{totalAmount}</p>
                </div>
                <button type='submit'>Pay When Vehicle Arrives</button>
            </div>
        </form>
    );
};

export default PlaceOrder;

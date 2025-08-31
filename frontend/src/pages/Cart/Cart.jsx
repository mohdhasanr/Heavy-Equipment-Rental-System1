// import React, { useContext } from 'react'
// import './Cart.css'
// import { StoreContext } from '../../Context/StoreContext'
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {

//   const {cartItems, food_list, removeFromCart,getTotalCartAmount,url,currency,deliveryCharge} = useContext(StoreContext);
//   const navigate = useNavigate();

//   return (
//     <div className='cart'>
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item, index) => {
//           if (cartItems[item._id]>0) {
//             return (<div key={index}>
//               <div className="cart-items-title cart-items-item">
//                 <img src={url+"/images/"+item.image} alt="" />
//                 <p>{item.name}</p>
//                 <p>{currency}{item.price}</p>
//                 <div>{cartItems[item._id]}</div>
//                 <p>{currency}{item.price*cartItems[item._id]}</p>
//                 <p className='cart-items-remove-icon' onClick={()=>removeFromCart(item._id)}>x</p>
//               </div>
//               <hr />
//             </div>)
//           }
//         })}
//       </div>
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details"><p>Subtotal</p><p>{currency}{getTotalCartAmount()}</p></div>
//             <hr />
//             <div className="cart-total-details"><p>Delivery Fee</p><p>{currency}{getTotalCartAmount()===0?0:deliveryCharge}</p></div>
//             <hr />
//             <div className="cart-total-details"><b>Total</b><b>{currency}{getTotalCartAmount()===0?0:getTotalCartAmount()+deliveryCharge}</b></div>
//           </div>
//           <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you have a promo code, Enter it here</p>
//             <div className='cart-promocode-input'>
//               <input type="text" placeholder='promo code'/>
//               <button>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cart


// cart above code is working fine , below code is added with new promocode features

// import React, { useContext, useState } from 'react';
// import './Cart.css';
// import { StoreContext } from '../../Context/StoreContext';
// import { useNavigate } from 'react-router-dom';

// const Cart = () => {
//   const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, currency, deliveryCharge } = useContext(StoreContext);
//   const navigate = useNavigate();

//   const [promoCode, setPromoCode] = useState('');
//   const [discount, setDiscount] = useState(0);

//   const handlePromoCodeSubmit = () => {
//     if (promoCode.toLowerCase() === 'newyear25') {
//       setDiscount(0.25); // 25% discount
//       alert('Promo code applied! You got a 25% discount.');
//     } else {
//       setDiscount(0);
//       alert('Invalid promo code.');
//     }
//   };

//   const getTotalWithDiscount = () => {
//     const subtotal = getTotalCartAmount();
//     const discountAmount = subtotal * discount;
//     const total = subtotal - discountAmount + (subtotal > 0 ? deliveryCharge : 0);
//     return total.toFixed(2);
//   };

//   return (
//     <div className='cart'>
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item, index) => {
//           if (cartItems[item._id] > 0) {
//             return (
//               <div key={index}>
//                 <div className="cart-items-title cart-items-item">
//                   <img src={`${url}/images/${item.image}`} alt="" />
//                   <p>{item.name}</p>
//                   <p>{currency}{item.price}</p>
//                   <div>{cartItems[item._id]}</div>
//                   <p>{currency}{item.price * cartItems[item._id]}</p>
//                   <p className='cart-items-remove-icon' onClick={() => removeFromCart(item._id)}>x</p>
//                 </div>
//                 <hr />
//               </div>
//             );
//           }
//           return null;
//         })}
//       </div>
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details"><p>Subtotal</p><p>{currency}{getTotalCartAmount()}</p></div>
//             <hr />
//             <div className="cart-total-details"><p>Discount</p><p>- {currency}{(getTotalCartAmount() * discount).toFixed(2)}</p></div>
//             <hr />
//             <div className="cart-total-details"><p>Delivery Fee</p><p>{currency}{getTotalCartAmount() === 0 ? 0 : deliveryCharge}</p></div>
//             <hr />
//             <div className="cart-total-details"><b>Total</b><b>{currency}{getTotalWithDiscount()}</b></div>
//           </div>
//           <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you have a promo code, Enter it here</p>
//             <div className='cart-promocode-input'>
//               <input
//                 type="text"
//                 placeholder='promo code'
//                 value={promoCode}
//                 onChange={(e) => setPromoCode(e.target.value)}
//               />
//               <button onClick={handlePromoCodeSubmit}>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


// update on 29 12

import React, { useContext, useState } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url, currency, deliveryCharge, setCartItems } = useContext(StoreContext);
  const navigate = useNavigate();

  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  // Handling Promo Code Submission
  const handlePromoCodeSubmit = () => {
    const subtotal = getTotalCartAmount();
    if (promoCode.toLowerCase() === 'newyear25') {
      setDiscount(0.25); // Apply 25% discount
      alert('Promo code applied! You got a 25% discount.');
    } else {
      setDiscount(0); // Invalid promo code
      alert('Invalid promo code.');
    }
  };

  // Get Total with applied Discount and Delivery logic
  const getTotalWithDiscount = () => {
    const subtotal = getTotalCartAmount();
    const discountAmount = subtotal * discount;

    // Delivery charge logic:
    // If the cart is empty, no delivery charge
    let finalDeliveryCharge = 0;
    if (Object.keys(cartItems).length > 0) {
      // If subtotal is above 999, delivery is free
      finalDeliveryCharge = subtotal > 599 ? 0 : 50;
    }

    // Apply the discount and add the delivery charge if needed
    const total = subtotal - discountAmount + finalDeliveryCharge;
    return total.toFixed(2);
  };

  // Update Quantity (increment / decrement)
  const updateQuantity = (itemId, action) => {
    const updatedCartItems = { ...cartItems };

    if (action === 'increment') {
      updatedCartItems[itemId] = (updatedCartItems[itemId] || 0) + 1;
    } else if (action === 'decrement') {
      if (updatedCartItems[itemId] > 1) {
        updatedCartItems[itemId] = updatedCartItems[itemId] - 1;
      } else {
        // Remove item from the cart if quantity is 1 and user presses '-'
        delete updatedCartItems[itemId];
      }
    }

    setCartItems(updatedCartItems);
  };

  return (
    <div className='cart'>
      <h1>Your Cart</h1>

      {/* Cart Items */}
      <div className="cart-items">
        <div className="cart-items-list">
          {food_list.map((item) => {
            if (cartItems[item._id] > 0) {
              return (
                <div key={item._id} className="cart-items-item">
                  <img src={item.image} alt={item.name} />
                  <p>{item.name}</p>
                  <p>{currency}{item.price}</p>
                  <div className="cart-item-quantity">
                    <button onClick={() => updateQuantity(item._id, 'decrement')}>-</button>
                    <p>{cartItems[item._id]}</p>
                    <button onClick={() => updateQuantity(item._id, 'increment')}>+</button>
                  </div>
                  <p>{currency}{item.price * cartItems[item._id]}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>

      {/* Cart Totals */}
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p><p>{currency}{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Discount</p><p>- {currency}{(getTotalCartAmount() * discount).toFixed(2)}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p><p>{currency}{getTotalCartAmount() > 599 ? 0 : 50}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b><b>{currency}{getTotalWithDiscount()}</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

        {/* Promo Code Section */}
        <div className="cart-promocode">
          <p>If you have a promo code, enter it here:</p>
          <div className='cart-promocode-input'>
            <input
              type="text"
              placeholder='Enter Promo Code'
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button onClick={handlePromoCodeSubmit}>Apply</button>
          </div>
          {/* <p className="promo-details"> Use code <strong>newyear25</strong> to get <strong>25% off</strong> <br /> <strong>free delivery</strong> with orders above 999.</p> */}
        </div>
      </div>
    </div>
  );
};

export default Cart;

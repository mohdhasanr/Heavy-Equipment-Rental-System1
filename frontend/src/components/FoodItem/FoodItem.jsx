import React, { useContext } from "react";
import "./FoodItem.css";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const FoodItem = ({ image, name, price, desc, id }) => {
  const { currency } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="food-item">
      <div className="food-item-img-container">
        <img className="food-item-image" src={image} alt={name} />
      </div>

      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p>
          <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{desc}</p>
        <p className="food-item-price">
          Rent per hour starts from {currency}{price}/- only
        </p>

        <button
          className="more-info-btn"
          onClick={() =>
            navigate(`/food-item/${id}`, {
              state: { item: { image, name, price, description: desc, _id: id } },
            })
          }
        >
          Book Now
        </button>
      </div>
    </div>
  );
};

export default FoodItem;

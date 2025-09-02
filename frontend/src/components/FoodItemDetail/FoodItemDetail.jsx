import React, { useContext, useState, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import "./FoodItemDetail.css";

const FoodItemDetail = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { food_list, addToCart, currency } = useContext(StoreContext);

  const [data, setData] = useState(location.state?.item || null);
  const [startDate, setStartDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endDate, setEndDate] = useState("");
  const [endTime, setEndTime] = useState("");
  const [hours, setHours] = useState(1);
  const [message, setMessage] = useState(""); // For showing confirmation below button

  useEffect(() => {
    if (!data && food_list.length > 0) {
      const item = food_list.find((f) => f._id === id);
      if (item) setData(item);
      else navigate("/explore-menu");
    }
  }, [data, food_list, id, navigate]);

  if (!data) return <p>Loading...</p>;

  // Calculate hours automatically whenever start/end date & time changes
  useEffect(() => {
    if (startDate && startTime && endDate && endTime) {
      const start = new Date(`${startDate}T${startTime}`);
      const end = new Date(`${endDate}T${endTime}`);
      const diffMs = end - start;
      if (diffMs > 0) {
        const diffHours = Math.ceil(diffMs / (1000 * 60 * 60));
        setHours(diffHours);
      } else {
        setHours(1);
      }
    }
  }, [startDate, startTime, endDate, endTime]);

  const handleAddToCart = () => {
    if (!startDate || !startTime || !endDate || !endTime) {
      setMessage("Please select start and end date/time");
      return;
    }

    const totalPrice = data.price * hours;

    addToCart(id, {
      hours,
      startDate,
      startTime,
      endDate,
      endTime,
      totalPrice,
      name: data.name
    });

    setMessage(`You have booked for ${hours} hours. Total Rent: ${currency}${totalPrice}`);
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <div className="food-item-detail">
      <div className="detail-image-container">
        <img src={data.image} alt={data.name} />
      </div>

      <div className="detail-info-container">
        <h2>{data.name}</h2>
        <p className="detail-description">{data.description}</p>
        <p className="detail-price">
          Rent per hour starts from {currency}{data.price}/- only
        </p>

        <div className="rental-selection">
          <div className="date-time">
            <label>Start Date:</label>
            <input type="date" value={startDate} min={today} onChange={(e) => setStartDate(e.target.value)} />
          </div>

          <div className="date-time">
            <label>Start Time:</label>
            <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
          </div>

          <div className="date-time">
            <label>End Date:</label>
            <input type="date" value={endDate} min={startDate || today} onChange={(e) => setEndDate(e.target.value)} />
          </div>

          <div className="date-time">
            <label>End Time:</label>
            <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
          </div>

          <div className="hours-selection">
            <label>Hours:</label>
            <input type="number" value={hours} readOnly />
          </div>
        </div>

        <button className="add-to-cart-btn" onClick={handleAddToCart}>
          Add to Cart
        </button>

        {message && <p className="booking-message">{message}</p>}
      </div>
    </div>
  );
};

export default FoodItemDetail;

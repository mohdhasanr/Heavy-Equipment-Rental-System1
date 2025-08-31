import React, { useEffect, useState } from 'react'
import './List.css'
import { url, currency } from '../../assets/assets'
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {

  const [list, setList] = useState([]);
  const [newPrice, setNewPrice] = useState({}); // To store the new price for each item

  // Fetch the food list from the backend
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`)
    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("Error fetching food list");
    }
  };

  // Handle food item removal
  const removeFood = async (foodId) => {
    const response = await axios.post(`${url}/api/food/remove`, {
      id: foodId
    });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error removing food item");
    }
  };

  // Handle price update
  const updatePrice = async (foodId, newPrice) => {
    const response = await axios.post(`${url}/api/food/update-price`, {
      id: foodId,
      price: newPrice
    });
    await fetchList();
    if (response.data.success) {
      toast.success(response.data.message);
    } else {
      toast.error("Error updating price");
    }
  };

  // Update the state for the price input of a particular food item
  const handlePriceChange = (foodId, price) => {
    setNewPrice((prevState) => ({
      ...prevState,
      [foodId]: price // Store the price of each item separately by foodId
    }));
  };

  // Fetch the food list when the component is mounted
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className='list add flex-col'>
      <p>All Foods List</p>
      <div className='list-table'>
        <div className="list-table-format title">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div key={index} className='list-table-format'>
              <img src={item.image} alt={item.name} />

              <p>{item.name}</p>
              <p>{item.category}</p>

              {/* Price display and edit */}
              <p>
                {currency}{item.price}
                <input
                  type="number"
                  value={newPrice[item._id] || item.price} // Display the price input if set, else show the current price
                  onChange={(e) => handlePriceChange(item._id, e.target.value)} // Update the price in the state
                  style={{ marginLeft: "10px", width: "80px" }}
                />
                <button
                  onClick={() => updatePrice(item._id, newPrice[item._id] || item.price)} // Use the updated price or the existing price
                  style={{ marginLeft: "10px" }}
                >
                  Update
                </button>
              </p>

              {/* Remove food item */}
              <p className='cursor' onClick={() => removeFood(item._id)}>x</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;

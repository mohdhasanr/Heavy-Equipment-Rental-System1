import React, { useContext } from "react";
import "./ExploreMenu.css";
import { StoreContext } from "../../Context/StoreContext";
import { useNavigate } from "react-router-dom";

const ExploreMenu = () => {
  const { menu_list } = useContext(StoreContext);
  const navigate = useNavigate();

  // Filter out "Best Sellers" from the menu list
  const filteredMenuList = menu_list.filter((item) => item.menu_name !== "Best Sellers");

  const handleCategoryChange = (categoryName) => {
    navigate(`/food-category/${categoryName}`);
  };

  return (
    <div className="explore-menu" id="explore-menu">
      <h1>View Our Machines</h1>
{/*       <p className="explore-menu-text">
        "Savour a variety of premium meats, handpicked to satisfy your cravings. Elevate your meals with our fresh, high-quality cuts delivered straight to your door!"
      </p> */}
      <div className="explore-menu-list">
        {filteredMenuList.map((item, index) => (
          <div
            onClick={() => handleCategoryChange(item.menu_name)}
            key={index}
            className="explore-menu-list-item"
          >
            <div className="menu-item-card">
              <img
                src={item.menu_image}
                className="menu-item-image"
                alt={item.menu_name}
              />
              <p>{item.menu_name}</p>
            </div>
          </div>
        ))}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;


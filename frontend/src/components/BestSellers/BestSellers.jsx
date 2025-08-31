import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./BestSellers.css";
import { useSwipeable } from "react-swipeable";

const BestSellers = () => {
  const { food_list } = useContext(StoreContext);
  const [currentPage, setCurrentPage] = useState(0); // State to track current page
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // For mobile detection
  const itemsPerPageMobile = 2; // Mobile screen: 2 items per page
  const itemsPerPageLaptop = 3; // Laptop screen: 3 items per page

  // Filter items to include only "Best Sellers"
  const bestSellerItems = food_list.filter(
    (item) => item.category.toLowerCase().replace(/\s|&|_/g, "-") === "best-sellers"
  );

  // Calculate total pages
  const totalPages = Math.ceil(bestSellerItems.length / (isMobile ? itemsPerPageMobile : itemsPerPageLaptop));

  // Handle next page
  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle previous page
  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Get the items to display for the current page
  const displayedItems = bestSellerItems.slice(
    currentPage * (isMobile ? itemsPerPageMobile : itemsPerPageLaptop),
    (currentPage + 1) * (isMobile ? itemsPerPageMobile : itemsPerPageLaptop)
  );

  // Auto-slide functionality for mobile
  useEffect(() => {
    if (isMobile) {
      const interval = setInterval(() => {
        if (currentPage < totalPages - 1) {
          setCurrentPage((prevPage) => prevPage + 1);
        } else {
          setCurrentPage(0); // Restart at the beginning when reaching the end
        }
      }, 6000); // Auto slide every 6 seconds

      return () => clearInterval(interval);
    }
  }, [currentPage, isMobile, totalPages]);

  // Swipeable settings for mobile
  const swipeHandlers = useSwipeable({
    onSwipedLeft: nextPage,
    onSwipedRight: prevPage,
    trackMouse: true, // Allow swipe on desktop as well
  });

  return (
    <div className="food-category">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Best Sellers</h2>
      <h3>Best-Selling Meats in Bengaluru 🥩🍗</h3>
      <div className="food-category-slider-wrapper" {...swipeHandlers}>
        {/* Left Button (visible only on laptop and above) */}
        {!isMobile && (
          <button className="carousel-button left" onClick={prevPage} disabled={currentPage === 0}>
            &#8592;
          </button>
        )}

        {/* Slider Content */}
        <div className="food-category-list-slider">
          <div className="food-category-list">
            {displayedItems.length > 0 ? (
              displayedItems.map((item) => (
                <FoodItem
                  key={item._id}
                  image={item.image}
                  name={item.name}
                  desc={item.description}
                  price={item.price}
                  id={item._id}
                />
              ))
            ) : (
              <p className="no-items text-center text-gray-600">
                No bestseller items found.
              </p>
            )}
          </div>
        </div>

        {/* Right Button (visible only on laptop and above) */}
        {!isMobile && (
          <button className="carousel-button right" onClick={nextPage} disabled={currentPage === totalPages - 1}>
            &#8594;
          </button>
        )}
      </div>

      {/* Pagination Dots */}
      <div className="pagination-dots">
        {Array.from({ length: totalPages }).map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentPage ? "active" : ""}`}
            onClick={() => setCurrentPage(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default BestSellers;


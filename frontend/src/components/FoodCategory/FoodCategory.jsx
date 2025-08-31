// import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import './FoodCategory.css';
// import { StoreContext } from '../../Context/StoreContext';

// const FoodCategory = () => {
//   const { food_list } = useContext(StoreContext);
//   const { categoryName } = useParams();

//   // Filter items by category
//   const filteredItems = food_list.filter(
//     (item) => categoryName === 'All' || item.category === categoryName
//   );

//   return (
//     <div className="food-category">
//       <h1>{categoryName} Dishes</h1>
//       <div className="food-category-list">
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item) => (
//             <div key={item._id} className="food-category-item">
//               <img src={item.image} alt={item.name} />
//               <h3>{item.name}</h3>
//               <p>{item.description}</p>
//               <p>Price: ₹{item.price}</p>
//             </div>
//           ))
//         ) : (
//           <p>No items found in this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FoodCategory;


// import React, { useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import './FoodCategory.css';
// import { StoreContext } from '../../Context/StoreContext';
// import FoodItem from '../FoodItem/FoodItem';

// const FoodCategory = () => {
//   const { food_list } = useContext(StoreContext);
//   const { categoryName } = useParams();

//   // Filter items by category
//   const filteredItems = food_list.filter(
//     (item) => categoryName === 'All' || item.category === categoryName
//   );

//   return (
//     <div className="food-category" id="food-category">
//       <h2>{categoryName === 'All' ? 'All Dishes' : `${categoryName} Dishes`}</h2>
//       <div className="food-category-list">
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item) => (
//             <FoodItem
//               key={item._id}
//               image={item.image}
//               name={item.name}
//               desc={item.description}
//               price={item.price}
//               id={item._id}
//             />
//           ))
//         ) : (
//           <p className="no-items">No items found in this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FoodCategory;



// 




// import React, { useContext, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import "./FoodCategory.css";
// import { StoreContext } from "../../Context/StoreContext";
// import FoodItem from "../FoodItem/FoodItem";

// const FoodCategory = () => {
//   const { food_list } = useContext(StoreContext);
//   const { categoryName } = useParams();

//   // Filter items by category
//   const filteredItems = food_list.filter(
//     (item) =>
//       categoryName === "All" ||
//       item.category.toLowerCase().replace(/\s|&|_/g, "-") ===
//         categoryName.toLowerCase().replace(/\s|&|_/g, "-")
//   );

//   useEffect(() => {
//     // Add any other actions needed when category is changed (like logging)
//   }, [categoryName]);

//   return (
//     <div className="food-category" id="food-category">
//       <h2>{categoryName === "All" ? "All Dishes" : `${categoryName} Dishes`}</h2>
//       <div className="food-category-list">
//         {filteredItems.length > 0 ? (
//           filteredItems.map((item) => (
//             <FoodItem
//               key={item._id}
//               image={item.image}
//               name={item.name}
//               desc={item.description}
//               price={item.price}
//               id={item._id}
//             />
//           ))
//         ) : (
//           <p className="no-items">No items found in this category.</p>
//         )}
//       </div>
//     </div>
//   );
// };


import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
import "./FoodCategory.css";

const FoodCategory = () => {
  const { food_list } = useContext(StoreContext);
  const { categoryName } = useParams();

  // Log food_list and categoryName to inspect contents
  useEffect(() => {
    console.log("Food List in Category:", food_list);
    console.log("Current Category Name:", categoryName);
  }, [food_list, categoryName]);

  // Normalize category names by removing spaces, '&', and '_'
  const normalizeCategory = (category) => category.toLowerCase().replace(/\s|&|_/g, "-");

  // Filter items by category
  const filteredItems = food_list.filter(
    (item) =>
      categoryName === "All" || normalizeCategory(item.category) === normalizeCategory(categoryName)
  );

  // Log the filteredItems for debugging purposes
  useEffect(() => {
    console.log("Filtered Items in Category:", filteredItems);
  }, [filteredItems]);

  return (
    <div className="food-category" id="food-category">
      <h2>{categoryName === "All" ? "All Dishes" : `${categoryName} Dishes`}</h2>
      <div className="food-category-list">
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
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
          <p className="no-items">No items found in this category.</p>
        )}
      </div>
    </div>
  );
};

export default FoodCategory;

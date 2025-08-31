// import express from 'express';
// import { addFood, listFood, removeFood } from '../controllers/foodController.js';

// const foodRouter = express.Router();

// foodRouter.get("/list", listFood); // Route to get all food items
// foodRouter.post("/add", addFood); // Route to add a new food item
// foodRouter.post("/remove", removeFood); // Route to remove a food item

// export default foodRouter;

import express from 'express';
import { addFood, listFood, removeFood, updateFoodPrice } from '../controllers/foodController.js';

const foodRouter = express.Router();

// Route to get all food items
foodRouter.get("/list", listFood);

// Route to add a new food item
foodRouter.post("/add", addFood);

// Route to remove a food item
foodRouter.post("/remove", removeFood);

// **New Route to update food price**
foodRouter.post('/update-price', updateFoodPrice); // This route updates the price

export default foodRouter;

// import foodModel from "../models/foodModel.js";
// import fs from 'fs'

// // all food list
// const listFood = async (req, res) => {
//     try {
//         const foods = await foodModel.find({})
//         res.json({ success: true, data: foods })
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" })
//     }

// }

// // add food
// const addFood = async (req, res) => {

//     try {
//         let image_filename = `${req.file.filename}`

//         const food = new foodModel({
//             name: req.body.name,
//             description: req.body.description,
//             price: req.body.price,
//             category:req.body.category,
//             image: image_filename,
//         })

//         await food.save();
//         res.json({ success: true, message: "Food Added" })
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" })
//     }
// }

// // delete food
// const removeFood = async (req, res) => {
//     try {

//         const food = await foodModel.findById(req.body.id);
//         fs.unlink(`uploads/${food.image}`, () => { })

//         await foodModel.findByIdAndDelete(req.body.id)
//         res.json({ success: true, message: "Food Removed" })

//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: "Error" })
//     }

// }

// export { listFood, addFood, removeFood }
import foodModel from "../models/foodModel.js";

// List all food items
const listFood = async (req, res) => {
    try {
        const foods = await foodModel.find({}); // Fetch all food items
        res.json({ success: true, data: foods });
    } catch (error) {
        console.error("Error fetching food list:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// Add a new food item
const addFood = async (req, res) => {
    try {
        const { name, description, price, category, imageUrl } = req.body;

        // Check if required fields are provided
        if (!name || !description || !price || !category || !imageUrl) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        // Create a new food item
        const food = new foodModel({
            name,
            description,
            price,
            category,
            image: imageUrl, // Store the URL directly
        });

        // Save the food item to the database
        await food.save();
        res.json({ success: true, message: 'Food added successfully' });
    } catch (error) {
        console.error('Error adding food:', error);
        res.status(500).json({ message: 'Error adding food', error: error.message });
    }
};

// Remove a food item
const removeFood = async (req, res) => {
    try {
        const { id } = req.body;

        // Check if the food item exists
        const food = await foodModel.findById(id);
        if (!food) {
            return res.status(404).json({ success: false, message: "Food item not found" });
        }

        // Delete the food item
        await foodModel.findByIdAndDelete(id);
        res.json({ success: true, message: "Food item removed" });
    } catch (error) {
        console.error("Error removing food:", error);
        res.status(500).json({ success: false, message: "Server Error" });
    }
};

// **New function to update the price of a food item**
const updateFoodPrice = async (req, res) => {
    try {
        const { id, price } = req.body; // Get the id and new price from the request body

        // Find the food item by ID and update the price
        const updatedFood = await foodModel.findByIdAndUpdate(
            id,
            { price }, // Update only the price field
            { new: true } // Return the updated document
        );

        if (!updatedFood) {
            return res.status(404).json({ success: false, message: 'Food item not found' });
        }

        res.json({ success: true, message: 'Price updated successfully', data: updatedFood });
    } catch (error) {
        console.error('Error updating food price:', error);
        res.status(500).json({ success: false, message: 'Error updating price' });
    }
};

export { listFood, addFood, removeFood, updateFoodPrice };

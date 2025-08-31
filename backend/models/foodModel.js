// import mongoose from "mongoose";

// const foodSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true},
//     image: { type: String, required: true },
//     category:{ type:String, required:true}
// })

// const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);
// export default foodModel;

import mongoose from "mongoose";

// Define the schema for food
const foodSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    image: { type: String, required: true }, // This should accept a URL string
    category: { type: String, required: true },
});


// Ensure the model is created properly
const foodModel = mongoose.models.food || mongoose.model("food", foodSchema);

export default foodModel;

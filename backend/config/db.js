// import mongoose from "mongoose";

// export const  connectDB = async () =>{

//     await mongoose.connect('mongodb+srv://bigbutchermeat:bigbutcher1234@cluster0.9vvk8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/food-del').then(()=>console.log("DB Connected"));
   
// }

import mongoose from "mongoose";

// MongoDB connection
export const connectDB = async () => {
    try {
        // Use the connection string from environment variables
        const dbUri = process.env.MONGO_URI || 'mongodb+srv://bigbutchermeat:bigbutcher1234@cluster0.9vvk8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0/BigButcher';

        // Connect to MongoDB
        await mongoose.connect(dbUri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the process if DB connection fails
    }
};



// add your mongoDB connection string above.
// Do not use '@' symbol in your databse user's password else it will show an error.
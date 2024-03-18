// config/database.ts

import mongoose from 'mongoose';

const mongoUrl = process.env.MONGO_URL!;

const DB = () => {
    mongoose.connect(mongoUrl)
        .then(() => console.log("database connected..."))
        .catch(err => console.error("Error connecting to database:", err));
}

export { DB }; // Export DB as a named export

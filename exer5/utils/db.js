import mongoose from "mongoose";
import Dog from "../models/dog.js"
import * as dotenv from 'dotenv'

dotenv.config()


mongoose.set('strictQuery', false);

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.DB_URL}`)
        // Dog.deleteMany({})
        console.log("Sucessfully connected to the database!")
    } catch (e) {
        console.log("Failed to connect to the database :(")
    }
}

const closeDB = async () => {
    await mongoose.connection.close();
    console.log("Connection Closed.");
}
export { connectDB, closeDB };
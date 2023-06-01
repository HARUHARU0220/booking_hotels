import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import hotelsRoute from "../Booking App_Practice/routes/hotels.js"


const app = express()

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB")
    } catch (error) {
        throw error;
    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected")
})

app.use(express.json());

app.use("/hotels", hotelsRoute);

app.use((req, res, next) => {
    res.send("Hello from middleware")
})

app.listen(8090, () => {
    connect()
    console.log("connected to backend.");
});
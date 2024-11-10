import express from "express"
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";
import connectMongoDB from "./db/connectMongoDB.js";

const app = express();


app.use("/api/auth", authRoutes);

dotenv.config();

console.log(process.env.MONGO_URI)

app.listen(8000, ()=>{
    console.log("server is running");
    connectMongoDB();

})
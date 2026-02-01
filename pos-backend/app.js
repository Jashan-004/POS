require("dotenv").config();
const express = require("express");
const app = express();
const globalErrorHandler = require("./middlewares/globalErrorHandler");

const config = require("./config/config");
const connectDB = require("./config/database");
const PORT = config.port;
connectDB();

// Middlewares

app.use(express.json()); // parse incoming request in json format


//Root Endpoint
app.get("/",(req,res) => {
    res.json({message: "Hello from POS Server!"});
})

//Other ENdpoionts
app.use("/api/user", require('./routes/userRoutes'));

//Global Error Handler
app.use(globalErrorHandler);


//Server
app.listen(PORT, () => {
    console.log(`POS Server is listening on port ${PORT}`);
} )



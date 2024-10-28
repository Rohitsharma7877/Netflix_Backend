//step-1
const express = require("express");
const dotenv = require("dotenv");
const databaseConnection = require("./utils/database.js");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/userRoute.js");
const cors = require("cors");

// Initialize dotenv to load environment variables
dotenv.config({
    path: ".env"
});

// Connect to the database
databaseConnection();

const app = express();

// Middlewares 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// app.get("/", (req, res)=>{
//     res.status(200).json({
//         message:"hello netflix backend"
//     })
// })

const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true
};
app.use(cors(corsOptions));

// API route
app.use("/api/v1/user", userRoute);

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server listening at port ${process.env.PORT}`);
});

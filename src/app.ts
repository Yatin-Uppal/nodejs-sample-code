// Import packages onto app
import express from "express";
import dotenv from "dotenv";
// Setup .env variables for app usage
dotenv.config();
import cors from "cors";
import morgan from "morgan";
import { ApiSuccess } from "./utils/ApiSuccess";
import { setupSwagger } from "./utils/swagger";
import userRoutes from "@/routes/user-route";


// Setup constant variables
const PORT = process.env.PORT || 30001;

// Init express app
const app = express();

// Body parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Detailed server logging
app.use(morgan("dev"));

// Enable CORS
app.use(cors());

// Setup Swagger documentation
setupSwagger(app);

app.use("/users", userRoutes);
// Entry route to check API status
app.get("/", (req, res) => {
  res.json(new ApiSuccess({ status: "API is working" }, "Welcome to the API", 200));
});
// Listen to specified port in .env or default 5000
app.listen(PORT, () => {
  console.log(`Server is listening on: ${PORT}`);
  console.log(`Swagger documentation available at: http://localhost:${PORT}/api-docs`);
});

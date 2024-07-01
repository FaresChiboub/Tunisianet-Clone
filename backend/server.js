import cors from "cors";
import helmet from "helmet";
import mongoose from "mongoose";
import dotenv from "dotenv";
import express from "express";
import colors from "colors";
import morgan from "morgan";
import hpp from "hpp";
import mongoSanitize from "express-mongo-sanitize";
import { authenticateToken } from "./middleware/auth.js";
import userRoutes from "./routes/userRoute.js";
import xss from "xss-clean";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 6001;

//middleware

app.use(cors());
app.use(hpp());
app.use(helmet());
app.use(mongoSanitize());
app.use(xss());
app.use(express.json());
app.use(morgan("dev"));
app.use("/api", userRoutes);

//mongoDb connection
mongoose.connect(process.env.MONGO_URI);
const db = mongoose.connection;
db.once("open", () => {
  console.log(colors.blue("MongoDb Connected !"));
});
db.on("error", (error) => {
  console.error(colors.red("MongoDb failed to connect !"), error);
});
//protected Route
app.get("/protected-route", authenticateToken, (req, res) => {
  res.json({ message: "This route is protected", user: req.user });
});
//run server
app.listen(PORT, () => {
  console.log(colors.blue(`Server is running on http://localhost:${PORT}`));
});

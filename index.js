import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./Config/db.js";
import userRouter from "./routes/user.route.js";
import bookRouter from "./routes/book.route.js";
dotenv.config();

const app = express();

app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5000",
    credentials: true,
  })
);

app.get("/", (_req, res) => {
  res.send("Library Space API is working...");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  connectDb();
  console.log(`Our server is working at PORT :${PORT}`);
});

app.use("/api/authuser", userRouter);
app.use("/api/book", bookRouter);

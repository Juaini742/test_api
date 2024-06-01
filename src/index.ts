import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";

import router from "./routes/router";

const PORT = 8000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors({ origin: true, credentials: true }));

app.use("/", router);
app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server Running on port ${PORT}`);
});

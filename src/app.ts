import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";

import { dbConnection } from "./db/connection";
import { router } from "./controllers/Router";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", router);

dbConnection();

app.listen(process.env.PORT || 8080, () => {
  console.log("Server is running");
});

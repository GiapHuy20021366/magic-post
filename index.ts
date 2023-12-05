import express, { Express } from "express";
import { PORT } from "./src/config";
import { connectDB } from "./src/db";
import { initUserRouters } from "./src/route";
import cors from "cors";
import bodyParser from "body-parser";
import { consoleLogger } from "./src/config";

const app: Express = express();

connectDB();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// init endpoints
initUserRouters(app);

app.listen(PORT, () => {
  consoleLogger.info(`Server is listening to Port ${PORT}`)
});
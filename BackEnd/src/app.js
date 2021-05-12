import express from "express";
import indexRoutes from "./routes/index";
import cors from "cors";

const app = express();

app.use(cors());
app.options('*', cors());
app.use(indexRoutes);
app.use(express.urlencoded({ extended: false }));
app.listen(8082);

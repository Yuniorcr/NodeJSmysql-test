import express from "express";
import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import { PORT } from './config.js'

const app = express();
app.use(express.json());

app.use(indexRoutes);
app.use('/api',employeesRoutes);

app.listen(PORT);
console.log("Server on port", PORT);
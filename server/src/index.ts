import express from "express";
import { rootHandler, editHandler } from "./handlers";
import cors from 'cors';

const app = express();
const port = process.env.PORT || "8000";

app.use(cors())
app.get("/", rootHandler);
app.post("/order/:itemId", editHandler);

app.listen(port, () => {
  console.log(`Server is listening on ${port}`);
});

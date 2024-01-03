import dotenv from "dotenv";
import { app } from "./app.js";
import { connectDB } from "./db/database.js";
dotenv.config({
  path: "./.env",
});

const PORT = process.env.PORT || 4000;

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 4000, () => {
      console.log(`Server listen on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo connection failed ", err);
    throw new err();
  });

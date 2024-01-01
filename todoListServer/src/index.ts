import express from "express";
import router from "./routes/todo.router";
import cors from "cors";
import { connectDb, disconnectDb } from "./db";

const app = express();

connectDb();
app.use(express.json());
app.use(cors());
app.use("/api", router);

const server = app.listen(3000, () => {
  console.log("Server listening on port 3000");
});

process.on("SIGINT", async (): Promise<void> => {
  await disconnectDb();
  server.close(() => {
    console.log("Express server closed");
    process.exit(0);
  });
});

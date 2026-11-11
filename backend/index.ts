import cors from "cors";
import express from "express";
import { UsersRouter } from "./routes/users.route.ts";

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  }),
);
app.use(express.json());

app.use("/api/users", UsersRouter);

const PORT = Number(process.env.PORT) || 4000;

async function startServer() {
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}?page=1&limit=10`);
  });
}

startServer();

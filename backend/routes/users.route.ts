import express from "express";
import { addUser } from "../controllers/addUser.ts";
import { getUsers } from "../controllers/getUsers.ts";

const router = express.Router();

router.get("/", getUsers);
router.post("/", addUser);

export { router as UsersRouter };

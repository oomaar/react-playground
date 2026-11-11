import type { Request, Response } from "express";
import type { AddUser } from "../db/types/AddUser.ts";
import type { User } from "../db/types/User.ts";
import { randomUUID } from "crypto";
import { users } from "../db/db.ts";

export const addUser = (
  req: Request<{}, unknown, Partial<AddUser>>,
  res: Response,
) => {
  try {
    const { username, firstName, lastName, phone } = req.body ?? {};

    if (!username || !firstName || !lastName || !phone) {
      return res.status(400).json({ message: "Required fields are missing" });
    }

    const newUser: User = {
      id: randomUUID(),
      firstName,
      lastName,
      username,
      phone,
    };

    users.push(newUser);

    return res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

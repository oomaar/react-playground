import type { Request, Response } from "express";
import { users } from "../db/db.ts";
import type { User } from "../db/types/User.ts";

type GetUsersQuery = {
  page?: string;
  limit?: string;
};

export const getUsers = (
  req: Request<{}, unknown, unknown, GetUsersQuery>,
  res: Response,
) => {
  try {
    const { page, limit } = req.query;

    if (!page || !limit) {
      return res
        .status(400)
        .json({ message: "Page number and limit are required" });
    }

    const pageNumber = parseInt(page, 10);
    const limitNumber = parseInt(limit, 10);

    if (!(pageNumber > 0) || !(limitNumber > 0)) {
      return res
        .status(400)
        .json({ message: "Page number and limit must be positive numbers" });
    }

    const allUsers: User[] = users;

    const skip = (pageNumber - 1) * limitNumber;

    const finalUsers = allUsers.slice(skip, skip + limitNumber);

    const total = allUsers.length;

    return res.json({
      page: pageNumber,
      limit: limitNumber,
      total,
      data: finalUsers,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

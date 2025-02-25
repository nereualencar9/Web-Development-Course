import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors/app-error";
import { z } from "zod";
import { sqliteConnction } from "../databases";

// zod
const UserSchema = z.object({
  name: z
    .string({ message: "Nome é obrigatório" })
    .min(3, "Minimo de 3 caracteres!"),
  email: z.string().email(),
  password: z.string().min(3),
});

export const userControllers = {
  async create(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = UserSchema.parse(req.body);

      const user = {
        id: "1",
        name,
        email,
        password,
      };

      const db = await sqliteConnction();

      const sqlQuery = "INSERT INTO users(id, name, email, password) VALUES (?, ?, ?, ?)";

      await db.run(sqlQuery,[user.id, user.name, user.email, user.password]);

      console.log(user);

      res.status(201).json({ message: "user created" });
    } catch (error) {
      next(error);
    }
  },
  read(req: Request, res: Response) {
    const { id } = req.params;

    res.status(200).json({ message: `user ${id} read` });
  },

  update(req: Request, res: Response) {
    const { id } = req.params;
    const { name, series } = req.body;

    console.log({ id, name, series });

    res.status(200).json({ message: "user update" });
  },

  delete(req: Request, res: Response) {
    const { id } = req.params;
    res.status(200).json({ message: `user ${id} deleted` });
  },
};

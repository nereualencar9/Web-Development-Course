import { response, Router } from "express";

export const router = Router();

router.get("/", (_request, response) => {
  response.json({ name: "Class Routes" });
});

router.get("/user", (_req, res) => {
  res.json([
    { name: "Ash", age: 10 },
    { name: "Mestre Came", Age: 300 },
    { name: "Alucard", Age: 500 },
  ]);
});

// route params
router.get("/user/:id", (req, res) => {
  const { id } = req.params;

  const users = [
    { id: 1, name: "Ash", age: 10 },
    { id: 2, name: "Mestre Came", Age: 300 },
    { id: 3, name: "Alucard", Age: 500 },
  ];

  res.json(users[Number(id) - 1] || {});
});

// query params
router.get("/user", (req, res) => {
  const { id, name, value } = req.query;
  res.json({ id, name, value });
});

// body params
router.post("/user", (req, response) => {
  const { id, name, value } = req.body;
  response.json({ id, name, value });
});

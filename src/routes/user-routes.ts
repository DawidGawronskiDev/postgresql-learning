import express, { Request, Response } from "express";
const router = express.Router();

router.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Users GET route" });
});

router.post("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Users POST route" });
});

export default router;

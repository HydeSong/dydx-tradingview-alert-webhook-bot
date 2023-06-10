import express from "express";
import { Dydx } from "../services/index";

const router = express.Router();

const client = new Dydx();

router.post<{}>("/", async (req, res) => {
  client.webhook(req.body);
  res.send(req.body);
});

export default router;

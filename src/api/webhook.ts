import express from "express";
import { Dydx } from "../services/index";

const router = express.Router();
const client = new Dydx();

router.post<{}>("/", async (req, res) => {
  // console.log(req.headers);
  if (req.headers["content-type"]!.includes("application/json")) {
    client.webhook_json(req.body);
  } else if (
    req.headers["content-type"]!.includes("text/plain") ||
    req.headers["content-type"]!.includes("text/html")
  ) {
    client.webhook_text(req.body);
  }
  res.send(req.body);
});

export default router;

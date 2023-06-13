import express from "express";
import { Dydx } from "../services/index";

const router = express.Router();
const client = new Dydx();
console.log(client.private);

router.post<{}>("/", async (req, res) => {
  if (req.headers["content-type"]!.includes("application/json")) {
    const result = await client.webhook_json(req.body);
    res.json({
      code: "000000",
      status: "success",
      result,
    });
  } else if (
    req.headers["content-type"]!.includes("text/plain") ||
    req.headers["content-type"]!.includes("text/html")
  ) {
    const result = await client.webhook_text(req.body);
    res.json({
      code: "000000",
      status: "success",
      result,
    });
  }
  res.send("Error");
});

export default router;

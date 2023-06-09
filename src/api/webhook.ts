import express from "express";
import { Dydx } from "../services/index";

const router = express.Router();

const client = new Dydx();

router.post<{}>("/", async (req, res) => {
  console.log("testing....");
  client.webhook(req.body);
  // const { strategy, bar } = req.body;
  // console.log(strategy, bar);

  const { account } = await client.private.getAccount(
    "0xd98EFfF831aAa4Fe8834F9cb211d8397193A5492"
  );
  console.log("account", account);
  const positionId = account.positionId;
  console.log("my positionId:", positionId);
  const allPositions = await client.private.getPositions({});
  console.log("allPositions.....", allPositions);

  // if (req.body.strategy.side === "BUY" || req.body.strategy.side === "SELL") {
  //   const myOrder = await client.private.createOrder(
  //     {
  //       market: strategy.market,
  //       side: strategy.side,
  //       type: strategy.type,
  //       size: strategy.size,
  //       price: strategy.price,
  //       timeInForce: strategy.timeInForce,
  //       postOnly: strategy.postOnly,
  //       limitFee: strategy.limitFee,
  //       expiration: strategy.expiration,
  //     },
  //     positionId
  //   );

  //   res.send(`Order ${myOrder.order.id} has been created`);
  // } else {
  //   await client.private.cancelAllOrders(strategy.market);
  //   res.send("All orders canceled");
  // }
  // res.send("Error");
  res.send("hello world");
});

export default router;

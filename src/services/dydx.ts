import { DydxClient, OrderResponseObject } from "@dydxprotocol/v3-client";
import { ClientOptions } from "@dydxprotocol/v3-client/build/src/dydx-client";
require("dotenv").config();

export class Dydx extends DydxClient {
  constructor(
    host: string = process.env.HOST || "",
    options: ClientOptions = {
      networkId: 5,
      apiTimeout: 3000,
      starkPrivateKey: process.env.STARK_PRIVSTE_KEY || "",
      apiKeyCredentials: {
        key: process.env.API_KEY || "",
        secret: process.env.API_SECRET || "",
        passphrase: process.env.API_PASSPHRASE || "",
      },
    }
  ) {
    super(host, options);
  }

  async webhook_text(params: any) {
    console.log("参数是文本格式", params);
    const text_params = params.toLowercase();
    if (text_params.includes("sell")) {
      console.log("做空");
    }

    if (text_params.includes("buy")) {
      console.log("做多");
    }

    if (text_params.includes("cover")) {
      console.log("平仓");
    }
  }

  async webhook_json(params: any) {
    console.log("参数是json格式", params);
    const { strategy, ticker } = params;

    const { account } = await this.private.getAccount(
      process.env.ETH_ADDR || ""
    );
    const { positionId } = account;

    const myOrder: { order: OrderResponseObject } =
      await this.private.createOrder(
        {
          market: ticker,
          side: strategy.order_action,
          type: strategy.order_type, // LIMIT MARKET STOP_LIMIT TRAILING_STOP TAKE_PROFIT
          size: strategy.order_contracts,
          price: strategy.order_price,
          timeInForce: strategy.time_in_force, // GTT FOK IOC
          postOnly: strategy.post_only,
          limitFee: strategy.limit_fee,
          expiration: strategy.expiration,
        },
        positionId
      );
    console.log(
      `${strategy.order_action} Order ${myOrder.order.id} created....`
    );
    return myOrder;
  }
}

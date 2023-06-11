import {
  DydxClient,
  Market,
  OrderResponseObject,
  OrderType,
  PositionResponseObject,
  TimeInForce,
} from "@dydxprotocol/v3-client";
import { ClientOptions } from "@dydxprotocol/v3-client/build/src/dydx-client";

export class Dydx extends DydxClient {
  constructor(
    host: string = "https://api.stage.dydx.exchange",
    options: ClientOptions = {
      networkId: 5,
      apiTimeout: 3000,
      starkPrivateKey:
        "0057a33390995e610070f36eb6ca7e3d5c0b694018953e84a3c3668e59224675",
      apiKeyCredentials: {
        key: "4f0284f2-0b51-fd11-8e26-90f078b3a81c",
        secret: "DWJuAzsa0bg9DZiEqd-dPhru4WLIe65gSxPLf3c-",
        passphrase: "uv-R75sHJiuhZnUIZABl",
      },
    }
  ) {
    super(host, options);
  }

  async webhook_text(params: any) {
    console.log("参数是文本格式", params);
  }

  async webhook_json(params: any) {
    // 参数是json格式
    console.log("参数是json格式", params);
    const { strategy, bar } = params;

    const { account } = await this.private.getAccount(
      "0xd98EFfF831aAa4Fe8834F9cb211d8397193A5492"
    );
    // console.log("account", account);
    const { positionId } = account;

    const positions: { positions: PositionResponseObject[] } =
      await this.private.getPositions({});

    console.log("positions", positions);

    const orderResponse: { order: OrderResponseObject } =
      await this.private.getOrderById(
        "2f2f4e697212fb6741b2ddbb706048b57e31fdb0bfde9005c48ca8420af5cb6"
      );
    console.log("order....", orderResponse);

    // const params = {
    //   expiration: "2023-06-10T04:37:31.793Z",
    //   limitFee: "0.000500",
    //   market: "BTC-USD",
    //   postOnly: false,
    //   price: "24979",
    //   reduceOnly: true,
    //   side: "SELL",
    //   size: "2",
    //   timeInForce: "FOK",
    //   type: "MARKET",
    //   clientId: "45394823746189594",
    //   signature:
    //     "01cc21ace4cbb36ad85d7a023126bd420c2391c788c8176c347c57ac8fd0358701edc8e2b1dcb46d947f3787cfcaa5aa264a2bdb40ba1ccf97abb017f0c6f2c0",
    //   client: "00",
    // };

    // const myOrder: { order: OrderResponseObject } =
    //   await this.private.createOrder(
    //     {
    //       market: Market.BTC_USD,
    //       side: strategy.order_action,
    //       type: OrderType.MARKET,
    //       size: strategy.order_contracts,
    //       price: strategy.order_price,
    //       timeInForce: TimeInForce.FOK,
    //       postOnly: false,
    //       reduceOnly: true,
    //       limitFee: "0.000000",
    //       expiration: "2023-06-10T17:45:51.423Z",
    //       clientId: "45394823746189594",
    //       signature:
    //         "01cc21ace4cbb36ad85d7a023126bd420c2391c788c8176c347c57ac8fd0358701edc8e2b1dcb46d947f3787cfcaa5aa264a2bdb40ba1ccf97abb017f0c6f2c0",
    //       // client: "00",
    //     },
    //     positionId
    //   );
    // console.log(`Order ${myOrder.order.id} created....`);
  }

  // 做多
  private async long() {}

  // 做空
  private short() {}

  // 平仓
  private cover() {}
}

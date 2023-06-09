import { DydxClient } from "@dydxprotocol/v3-client";
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

  webhook(params: any) {
    console.log(this, "this....");
    console.log("params....", params);
  }
}

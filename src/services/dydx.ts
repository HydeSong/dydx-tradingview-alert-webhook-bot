import { DydxClient } from '@dydxprotocol/v3-client';

export class Dydx extends DydxClient {
  // constructor() {
  //   super();
  // }

  private webhook(data: any) {
    console.log(this, 'this....');
    console.log(data);
  }
}

const client = new DydxClient('https://api.dydx.exchange');
console.log(client);
console.log(client.ethPrivate);
console.log(client.eth);
console.log(client.onboarding);
console.log(client.private);
console.log(client.public);
console.log(client.public.getMarkets);
console.log('testing....');
client.public.getMarkets().then(res => console.log('client res....', res));
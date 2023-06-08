import express from 'express';
import { DydxClient } from '@dydxprotocol/v3-client';
<<<<<<< HEAD
import axios from 'axios';
=======
// import Web3 from 'web3';
// import axios from 'axios';
>>>>>>> 3093b0c0bd2353ed2e56ace3db4dd92e2c6f3782

const router = express.Router();

const client = new DydxClient('https://api.stage.dydx.exchange', {
  networkId: 5,
  apiTimeout: 3000,
  starkPrivateKey: '0057a33390995e610070f36eb6ca7e3d5c0b694018953e84a3c3668e59224675',
  apiKeyCredentials: {
    key: '4f0284f2-0b51-fd11-8e26-90f078b3a81c',
    secret: 'DWJuAzsa0bg9DZiEqd-dPhru4WLIe65gSxPLf3c-',
    passphrase: 'uv-R75sHJiuhZnUIZABl',
  },
  // ethSendOptions: {},
  // web3: Web3,
  // web3Provider: undefined,
  // timestampAdjustment: 1000,
});
console.log(client);
console.log(client.ethPrivate);
console.log(client.eth);
console.log(client.onboarding);
console.log(client.private);
console.log(client.public);
console.log(client.public.getMarkets);
console.log('testing....');
<<<<<<< HEAD
const request = axios.create({
  proxy: {
    'host': '127.0.0.1',
    'port': 5000,
    'protocol': 'http',
  },
});
request.get('https://api.stage.dydx.exchange/v3/markets').then(res => console.log('axios res....', res));
=======
client.public.getMarkets().then(res => console.log('DydxClient res....', res));

// const request = axios.create({
//   proxy: {
//     'host': '127.0.0.1',
//     'port': 5000,
//     'protocol': 'http',
//   },
// });
// request.get('https://api.stage.dydx.exchange/v3/markets').then(res => console.log('axios res....', res));
>>>>>>> 3093b0c0bd2353ed2e56ace3db4dd92e2c6f3782

router.post<{}>('/', async (req, res) => {
  const { strategy, bar } = req.body;
  console.log(strategy, bar);
  
  const { account } = await client.private.getAccount('0xd98EFfF831aAa4Fe8834F9cb211d8397193A5492');
  console.log('account', account);
  const positionId = account.positionId;

  if (req.body.strategy.side === 'BUY' || req.body.strategy.side === 'SELL') {
    const myOrder = await client.private.createOrder({
      market: strategy.market,
      side: strategy.side,
      type: strategy.type,
      size: strategy.size,
      price: strategy.price,
      timeInForce: strategy.timeInForce,
      postOnly: strategy.postOnly,
      limitFee: strategy.limitFee,
      expiration: strategy.expiration,
    }, positionId);

    res.send(`Order ${myOrder.order.id} has been created`);
  } else {
    await client.private.cancelAllOrders(strategy.market);
    res.send('All orders canceled');
  }
  res.send('Error');
});

export default router;

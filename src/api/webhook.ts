
import express from 'express';
import { DydxClient } from '@dydxprotocol/v3-client';
// import axios from 'axios';

const router = express.Router();

const client = new DydxClient('https://api.stage.dydx.exchange', {
  apiTimeout: 3000,
  starkPrivateKey: '0057a33390995e610070f36eb6ca7e3d5c0b694018953e84a3c3668e59224675',
});
console.log(client);
console.log(client.ethPrivate);
console.log(client.eth);
console.log(client.onboarding);
console.log(client.private);
console.log(client.public);
console.log(client.public.getMarkets);
console.log('testing....');
// const request = axios.create({
//   proxy: {
//     'host': '127.0.0.1',
//     'port': 5000,
//     'protocol': 'http',
//   },
// });
// request.get('https://api.stage.dydx.exchange/v3/markets').then(res => console.log('axios res....', res));

router.post<{}>('/', async (req, res) => {
    // res.end('hello world');
  const market = await client.public.getMarkets();
  console.log(market);
  res.end(market);
});

export default router;

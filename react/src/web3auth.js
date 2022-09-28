import { Web3AuthCore } from '@web3auth/core';
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from '@web3auth/base';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';

const clientId =
  'BAjBSILGC-_d0kJHW0wXuCKjrMQAe9goyyLT9EwsPmEfQSvZTKSE7oaciYwkGAzXttAiGusg2-Ajoyy0gfjWR1I';
const auth0_clientId = 'OOLi6dj6oA0B3zuPEQTCIhGLr5zP8r70';
const verifier = 'sms-auth0-verifier';
const auth0_domain = 'https://dev-6432c6f6.us.auth0.com';

// init Web3AuthCore
const web3authCore = new Web3AuthCore({
  chainConfig: {
    // this is Polygon chain config, change if other chain(Solana, Ethereum)
    chainNamespace: CHAIN_NAMESPACES.EIP155,
    chainId: '0x13881',
    rpcTarget: `https://cch-testnet-node-f4e6.settlemint.com/bpaas-c6c4287B1ac00aC00cBb78092E2d7CBb02c3ae50`,
    blockExplorer: 'https://mumbai.polygonscan.com/',
    ticker: 'MATIC',
    tickerName: 'MATIC Token',
  },
  clientId,
});

// init OpenloginAdapter
const adapter = new OpenloginAdapter({
  adapterSettings: {
    network: 'testnet',
    clientId,
    uxMode: 'popup', // other option: redirect
    loginConfig: {
      jwt: {
        name: 'sms-playground',
        verifier,
        typeOfLogin: 'jwt',
        clientId: auth0_clientId,
      },
    },
  },
});

// configure adapter in web3authCore and init
web3authCore.configureAdapter(adapter);
await web3authCore.init();

// authentication and login
await web3authCore.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
  loginProvider: 'jwt',
  extraLoginOptions: {
    domain: auth0_domain, // Please append "https://" before your domain
    verifierIdField: 'sub',
  },
});

// get user profile
const user = await web3authCore.getUserInfo();
console.log('User info', user);

// logout
// await web3authCore.logout();

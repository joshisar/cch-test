// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { Content, Wrapper, Text } from './Home.styles';
import Button from '../Button';
import { Web3AuthCore } from '@web3auth/core';
import { CHAIN_NAMESPACES, WALLET_ADAPTERS } from '@web3auth/base';
import { OpenloginAdapter } from '@web3auth/openlogin-adapter';
// import { Auth0LockPasswordless } from 'auth0-lock';
import {
  AUTH0_DOMAIN,
  SMS_CLIENT_ID_AUTH0,
  SMS_CLIENT_ID_WEB3AUTH,
  SMS_VERIFIER_WEB3AUTH,
} from '../../config';

const web3auth_clientId = SMS_CLIENT_ID_WEB3AUTH;
const auth0_clientId = SMS_CLIENT_ID_AUTH0;
const auth0_domain = AUTH0_DOMAIN;
const web3auth_verifier = SMS_VERIFIER_WEB3AUTH;

function Home() {
  const [web3auth, setWeb3auth] = useState();
  const [provider, setProvider] = useState();

  useEffect(() => {
    const initWeb3Auth = async () => {
      try {
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
          clientId: web3auth_clientId,
        });

        // init OpenloginAdapter
        const adapter = new OpenloginAdapter({
          adapterSettings: {
            network: 'testnet',
            clientId: web3auth_clientId,
            uxMode: 'popup', // other option: redirect
            loginConfig: {
              jwt: {
                name: 'sms-playground',
                verifier: web3auth_verifier,
                typeOfLogin: 'jwt',
                clientId: auth0_clientId,
              },
            },
          },
        });
        // configure adapter in web3authCore and init
        web3authCore.configureAdapter(adapter);
        await web3authCore.init();
        // set web3auth
        setWeb3auth(web3authCore);
        // set provider
        if (web3authCore.provider) {
          setProvider(web3authCore.provider);
        }
      } catch (error) {
        console.error(error);
      }
    };
    initWeb3Auth();
  }, []);

  const login = async () => {
    console.log('web3auth in login : ', web3auth);
    if (!web3auth) {
      console.log('web3auth not initialized yet');
      return;
    }
    const web3authProvider = await web3auth.connectTo(
      WALLET_ADAPTERS.OPENLOGIN,
      {
        loginProvider: 'jwt',
        extraLoginOptions: {
          domain: auth0_domain, // Please append "https://" before your domain
          verifierIdField: 'sub',
        },
      }
    );
    setProvider(web3authProvider);
  };

  const getUserInfo = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet');
      return;
    }
    const user = await web3auth.getUserInfo();
    console.log('User info', user);
  };

  const logout = async () => {
    if (!web3auth) {
      console.log('web3auth not initialized yet');
      return;
    }
    await web3auth.logout();
    setProvider(null);
  };

  // todo : refer https://www.twilio.com/docs/voice/api/outgoing-caller-ids#add-an-outgoing-caller-id
  const registerNumberInTwilio = async () => {
    console.log('registerNumberInTwilio...');
  };

  return (
    <>
      <Wrapper>
        <Content>
          <Text>
            <div className="container">
              <Button
                text="Register Number @Twilio"
                callback={registerNumberInTwilio}
              />
              <Button text="Login" callback={login} />
              <Button text="User Info" callback={getUserInfo} />
              <Button text="Logout" callback={logout} />
            </div>
          </Text>
        </Content>
      </Wrapper>
    </>
  );
}

export default Home;

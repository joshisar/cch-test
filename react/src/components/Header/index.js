import React from 'react';
// Images
// @ts-ignore
import SettlemintLogo from '../../images/logo.webp';
// @ts-ignore
import Web3AuthLogo from '../../images/web3auth-logo-light.svg';
// Styles
import {
  Wrapper,
  Content,
  SettlemintImg,
  Web3AuthImg,
} from './Header.styles';
// Routing
import { Link } from 'react-router-dom';
// Context

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <SettlemintImg src={SettlemintLogo} alt="rmdb-logo" />
        </Link>
        <Web3AuthImg src={Web3AuthLogo} alt="tmdb-logo" />
      </Content>
    </Wrapper>
  );
};

export default Header;

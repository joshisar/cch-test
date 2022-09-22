import React from 'react';
import { Link } from 'react-router-dom';
// Styles
import { Wrapper, Content } from './Footer.styles';

const Footer = () => {
  return (
    <Wrapper>
      <Content>
        <span>
          <Link to="/privacy">Privacy Policy</Link>
        </span>
        <span>
          <h3>Copyright &copy; 2022</h3>
        </span>
        <span>
          <Link to="/terms">Terms of Service</Link>
        </span>
      </Content>
    </Wrapper>
  );
};

export default Footer;

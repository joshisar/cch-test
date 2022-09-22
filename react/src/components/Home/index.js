import React from 'react';
import PropTypes from 'prop-types';
import { Content, Wrapper, Text } from './Home.styles';
import Button from '../Button';

const Home = () => (
  <>
    <Wrapper>
      <Content>
        <Text>
          <div className="container">
            <Button
              text="Login"
              callback={() => console.log('login')}
            />
          </div>
        </Text>
      </Content>
    </Wrapper>
  </>
);

Home.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
};

export default Home;

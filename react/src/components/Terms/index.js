import React from 'react';
import { Link } from 'react-router-dom';
import { Content, Wrapper } from './Terms.styles';

const Terms = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <div className="container">
            <span>
              <Link
                to={{
                  pathname:
                    'https://docs.settlemint.com/docs/terms-of-service',
                }}
                target="_blank"
              >
                Read Terms of Service
              </Link>
            </span>
            <br></br>
            <br></br>
            <span>
              <Link to="/">Return Home</Link>
            </span>
          </div>
        </Content>
      </Wrapper>
    </>
  );
};

export default Terms;

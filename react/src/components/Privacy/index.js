import React from 'react';
import { Link } from 'react-router-dom';
import { Content, Wrapper } from './Privacy.styles';

const Privacy = () => {
  return (
    <>
      <Wrapper>
        <Content>
          <div className="container">
            <span>
              <Link
                to={{
                  pathname:
                    'https://docs.settlemint.com/docs/privacy-policy',
                }}
                target="_blank"
              >
                Read Privacy Policy
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

export default Privacy;

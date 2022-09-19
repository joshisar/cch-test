import React from 'react';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link
          to={{
            pathname:
              'https://docs.settlemint.com/docs/terms-of-service',
          }}
          target="_blank"
        >
          <h4>Read Terms of Service</h4>
        </Link>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Link to="/">Return Home</Link>
      </div>
    </>
  );
};

export default Terms;

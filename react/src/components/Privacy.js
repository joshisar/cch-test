import React from 'react';
import { Link } from 'react-router-dom';

const Privacy = () => {
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
              'https://docs.settlemint.com/docs/privacy-policy',
          }}
          target="_blank"
        >
          <h4>Read Privacy Policy</h4>
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

export default Privacy;

// @ts-nocheck
import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';
import Privacy from './Privacy';
import Terms from './Terms';

const Header = ({ title }) => {
  const location = useLocation();
  return (
    <header className="header">
      {location.pathname === '/' && (
        <>
          <h1>{title}</h1>
          <Button
            onClick={() =>
              (window.location.href =
                'https://console.settlemint.com')
            }
            text={'Login'}
            color={'blue'}
          />
        </>
      )}
      {location.pathname === '/privacy' && <Privacy />}
      {location.pathname === '/terms' && <Terms />}
    </header>
  );
};

Header.defaultProps = {
  title: 'CCH NFTs APP',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

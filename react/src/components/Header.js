// @ts-nocheck
import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ title }) => {
  const location = useLocation();
  return (
    <header className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          onClick={() =>
            (window.location.href = 'https://console.settlemint.com')
          }
          text={'Login'}
          color={'blue'}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: 'Claim NFTs',
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

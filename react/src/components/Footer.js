// @ts-nocheck
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2022</p>
      <p> &nbsp;</p>
      <Link
        to={{
          pathname: 'https://docs.settlemint.com/docs/privacy-policy',
        }}
        target="_blank"
      >
        Privacy
      </Link>
      <p> &nbsp;</p>
      <Link
        to={{
          pathname:
            'https://docs.settlemint.com/docs/terms-of-service',
        }}
        target="_blank"
      >
        Terms & Conditions
      </Link>
    </footer>
  );
};

export default Footer;

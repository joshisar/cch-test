// @ts-nocheck
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <p>Copyright &copy; 2022</p>
      <p> &nbsp;</p>
      <Link to="/privacy">Privacy Policy</Link>
      <p> &nbsp;</p>
      <Link to="/terms">Terms of Service</Link>
    </footer>
  );
};

export default Footer;

import { Link } from 'react-router-dom';
import './Button.css';

const Button = ({ children, url = '/' }) => {
  return (
    <Link className='button' to={url}>
      {children}
    </Link>
  );
};

export default Button;

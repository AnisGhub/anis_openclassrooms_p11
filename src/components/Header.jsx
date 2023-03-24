import Navigation from './Navigation';
import logo from '../assets/logo_kasa.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to="/">
          <img className='logo__img' src={logo} alt="" />
        </Link>
      </div>
      <Navigation />
    </header>
    );
  }
  
  export default Header;

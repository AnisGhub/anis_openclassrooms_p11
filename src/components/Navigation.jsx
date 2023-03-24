import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='menu'>
        <li className='menu__link'>
          <Link to="/">Accueil</Link>
        </li>
        <li className='menu__link'>
          <Link to="/apropos">A propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='menu'>
        <li className='menu__link'>
          <NavLink to="/" className={({ isActive }) => (isActive ? 'menu__link--active' : 'menu__link--inactive')} >Accueil</NavLink>
        </li>
        <li className='menu__link'>
          <NavLink  to="/apropos" className={({ isActive }) => (isActive ? 'menu__link--active' : 'menu__link--inactive')} >A propos</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
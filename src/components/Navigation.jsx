import { Link } from 'react-router-dom';
import '../styles/layout.css';

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/apropos">A propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
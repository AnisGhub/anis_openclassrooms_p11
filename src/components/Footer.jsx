import { Link } from "react-router-dom";
import logo from '../assets/logo_kasa_footer.png';

const Footer = () => {
    return (
        <footer className="footer">
            <div className='logo'>
                <Link to="/">
                    <img className='logo__img' src={logo} alt="" />
                </Link>
            </div>
            <p className="rights">© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}
 
export default Footer
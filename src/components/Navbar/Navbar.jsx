import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Logo from '../../assets/Logo.jpg'

const Navbar = () => {
    return (
      <nav className={styles.navbar}>
        <div className={styles.navbarBrand}>
          <Link to="/">  
            <img src={Logo} alt="Logo" className={styles.logoIcon} />
          </Link>
        </div>
        <ul className={styles.navbarLinks}>
          <li>
            <Link to="/" className={styles.navButton}>Home</Link>
          </li>
          <li>
            <Link to="/catalog" className={styles.navButton}>Catalog</Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default Navbar;
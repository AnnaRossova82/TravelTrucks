import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';
import Icon from '../Icon.jsx'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>
        <Icon id="icon-Logo" className={styles.logoIcon} />   
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
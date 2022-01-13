import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../Styles/Navbar.module.scss';

//ACTIVE STYLES !!!!!!


const Navbar = () => {
    const auth = localStorage.getItem('user');
    
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/registration')
    }
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.auth_link}>
                    {auth ?
                        <NavLink to='/registration' onClick={logout} className={styles.nav_link}>Logout</NavLink>
                        : <div className={styles.sign_link}>
                            <NavLink to='/registration' className={styles.nav_link}>Sign Up</NavLink>
                            <NavLink to='/login' className={styles.nav_link}>Login</NavLink>
                        </div>}
                </div>
                {auth ?
                    <div className={styles.navbar_menu_links}>
                        <NavLink to='/home' className={styles.nav_link}>Home</NavLink>
                        <NavLink to='/about' className={styles.nav_link}>About</NavLink>
                        <NavLink to='/product'className={styles.nav_link}>Product</NavLink>
                    </div> :
                    null
                 }
            </div>
        </div>

    )
}

export default Navbar;
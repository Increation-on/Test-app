import { NavLink, useNavigate } from 'react-router-dom';
import styles from '../Styles/Navbar.module.scss';

const Navbar = () => {
    const auth = localStorage.getItem('user');
    const menu = require('../mockMenu/menu.json');
    const authMenu = require('../mockMenu/authMenu.json')
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/registration')
    };
    
    return (
        <div>
            <div className={styles.navbar}>
                <div className={styles.auth_link}>
                    {auth ?
                        <NavLink to={authMenu[0].to} onClick={logout} className={styles.nav_link}>Logout</NavLink>
                        : <div className={styles.sign_link}>
                            {authMenu.map(el =>
                            <NavLink to={el.to} key={el.title} className={({isActive})=>isActive?styles.auth_active_link:styles.auth_link}>{el.title}</NavLink>
                        )}
                        </div>}
                </div>
                {auth ?
                    <div className={styles.navbar_menu_links}>
                        {menu.map(el =>
                            <NavLink to={el.to} key={el.title} className={({isActive})=>isActive?styles.nav_active_link:styles.nav_link}>{el.title}</NavLink>
                        )}
                    </div> :
                    null
                }
            </div>
        </div>

    )
}

export default Navbar;
import { NavLink, useNavigate } from 'react-router-dom'

const Navbar = () => {
    const auth = localStorage.getItem('user');
    
    const navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate('/registration')
    }
    return (
        <div>
            <div className="navbar">
                <div className='auth_link'>
                    {auth ?
                        <NavLink to='/registration' onClick={logout} className='nav_link'>Logout</NavLink>
                        : <div className='sign_link'>
                            <NavLink to='/registration' className='nav_link'>Sign Up</NavLink>
                            <NavLink to='/login' className='nav_link'>Login</NavLink>
                        </div>}
                </div>
                {auth ?
                    <div className='navbar_links'>
                        <NavLink to='/home' className='nav_link'>Home</NavLink>
                        <NavLink to='/about' className='nav_link'>About</NavLink>
                        <NavLink to='/product' className='nav_link'>Product</NavLink>
                    </div> :
                    null
                 }
            </div>
        </div>

    )
}

export default Navbar;
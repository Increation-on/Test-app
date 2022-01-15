import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../Styles/Login.module.scss';
import RequestSrvice from "../api/RequestService";


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await RequestSrvice.login(email, password);
        const data  = await response.json();
        if (data.token) {
            localStorage.setItem('user', JSON.stringify(data));
            navigate('/home');
        } else {
            alert('enter correct details')
        }
    }

    return (
        <div className={styles.login_container}>
            <h1>Login</h1>
            <label htmlFor="email">Email</label>
            <form className={styles.form}>
                <input
                    type="email"
                    className={styles.email}
                    placeholder="Enter email"
                    onChange={(e) => setEmail(e.target.value)} value={email}
                />
                <label htmlFor="password" className={styles.pass_labe}>Password</label>
                <input
                    type="password"
                    className={styles.password}
                    placeholder="Enter password"
                    onChange={(e) => setPassword(e.target.value)} value={password} />
                <button onClick={handleLogin} className={styles.login_button}>Login</button>
            </form>
        </div>

    )
}

export default Login;
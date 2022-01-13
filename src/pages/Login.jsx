import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import styles from '../Styles/Login.module.scss';


const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        let result = await fetch('http://localhost:5000/auth/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: { "Content-Type": 'application/json' }
        });
        result = await result.json();
        console.log(result);
        if (result.token) {
            localStorage.setItem('user', JSON.stringify(result));
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
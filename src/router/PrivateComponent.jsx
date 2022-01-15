import { Outlet, Navigate } from "react-router-dom";

const PrivateComponent = () => {
    const auth = localStorage.getItem('user');
    return auth ? <Outlet /> : <Navigate to='/registration' />
}

export default PrivateComponent;
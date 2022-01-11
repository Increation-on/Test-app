import About from "../pages/About";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Logout from "../pages/Logout";
import Product from "../pages/Product";



export const privateRoutes = [
    {path: '/about', component: About},
    {path: '/home', component: Home},
    {path: '/logout', component: Logout},
    {path: '/product', component: Product}
]





// export const routes = [
//     {path: '/about', component: About},
//     {path: '/home', component: Home},
//     {path: '/registration', component: SignUp}
// ]
import { Routes, Route } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import PrivateComponent from "./PrivateComponent";
import { privateRoutes } from "./routes";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<PrivateComponent />}>
                {privateRoutes.map(r =>
                    <Route
                        path={r.path}
                        element={<r.component />}
                        key={r.path}
                    />
                )}
            </Route>

            <Route path='/registration' element={<SignUp />} />
            <Route path='/' element={<SignUp />} />
            <Route path='*' element={<ErrorPage />} />
            <Route path='/error' element={<ErrorPage />} />
            <Route path='/login' element={<Login />} />

        </Routes>
    )
};

export default AppRouter;
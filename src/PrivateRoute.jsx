import { Navigate, Outlet} from 'react-router-dom';
import AuthenticationService from './services/authenticationService';

const PrivateRoute = ({children}) => {
    const auth = AuthenticationService.isAuthenticated;

    if(!auth)
        return <Navigate to="/login" />

    return children ? children : <Outlet />
}

export default PrivateRoute;
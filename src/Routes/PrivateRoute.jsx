import { useContext } from "react"
import { AuthContext } from "../Components/AuthProvider/AuthProvider"
import PropTypes from 'prop-types';
import { Navigate, useLocation } from "react-router-dom";

export default function PrivateRoute({children}) {
    const location = useLocation()
    const { user } = useContext(AuthContext);
    if(user) return children;
    return <Navigate state={location.pathname} to="/login"></Navigate>
}
PrivateRoute.propTypes = {
    children : PropTypes.node
}
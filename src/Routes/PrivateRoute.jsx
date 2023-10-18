import { useContext } from "react"
import { AuthContext } from "../Components/AuthProvider/AuthProvider"
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";


export default function PrivateRoute({children}) {
    const { user } = useContext(AuthContext);
    if(user) return children;
    return <Navigate to="/login"></Navigate>
}
PrivateRoute.propTypes = {
    children : PropTypes.node
}
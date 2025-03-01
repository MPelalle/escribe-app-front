import { useContext } from "react";
import { AuthContext } from "../../src/services/authContext";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) return <h2>Cargando...</h2>;
    return user ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;

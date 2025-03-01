import { useContext } from "react";
import { AuthContext } from "../src/services/authContext";
import { useNavigate } from "react-router-dom"; 
import '../styles/post-it.css';
import VideoBackground from "./components/VideoBackground";

const Profile = () => {
    const { user, loading, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    if (loading) return <h2>Cargando...</h2>;
    if (!user) return <h2>No estás autenticado</h2>;

    const handleLogout = () => {
        logout();
        navigate("/login"); 
    };

    return (
        <div>
            <VideoBackground />
            <div className="container">
                <h1 className="title">Bienvenido, {user.username}</h1>
                <button className="logout-btn" onClick={handleLogout}>Cerrar sesión</button>
            </div>
        </div>
    );
};

export default Profile;

import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../src/services/authContext";
import '../../styles/header.css';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const { user, logout } = useContext(AuthContext);

    return (
        <header className="header">
            <div className="auth-buttons">
                {!user ? (
                    <>
                        <button><Link to="/login" className="btn">Login</Link></button>
                        <button><Link to="/register" className="btn register">Register</Link></button>
                    </>
                ) : (
                    <button><Link to='/notes' className="btn">Notas de {user.username}</Link></button>
                )}
            </div>

            <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
            </div>

            <nav className={`nav ${menuOpen ? 'open' : ''}`}>
                <button><Link to="/profile" className="btn">Profile</Link></button>
            </nav>
        </header>
    );
};

export default Header;

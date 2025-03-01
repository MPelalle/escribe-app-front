import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();
const API_URL = import.meta.env.VITE_BACKEND_URL
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProfile();
    }, []);

    const fetchProfile = async () => {
        const token = localStorage.getItem("token");
        if (!token) {
            console.log("No hay token en localStorage.");
            setLoading(false);
            return;
        }

        try {
            console.log("Verificando token en backend...");
            const response = await fetch(`${API_URL}/api/auth/profile`, {
                method: "GET",
                headers: { "Authorization": `Bearer ${token}` },
            });
            
            

            const data = await response.json();
            console.log("Respuesta de /profile:", data);

            if (response.ok) {
                setUser(data.user);
            } else {
                console.log("Token inválido, cerrando sesión...");
                logout(); 
            }
        } catch (error) {
            console.error("Error obteniendo perfil:", error.message);
        } finally {
            setLoading(false);
        }
    };

    const login = (token, userData) => {
        console.log("Guardando token y actualizando usuario...");
        localStorage.setItem("token", token);
        setUser(userData); 
    };

    const logout = () => {
        console.log("Cerrando sesión...");
        localStorage.removeItem("token");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

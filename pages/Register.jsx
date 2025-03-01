import React, { useState } from "react";
import "../styles/register.css";
import VideoBackground from "./components/VideoBackground";
import { useNavigate } from "react-router-dom";
import { registerUser } from "../src/services/authService"; 

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [serverError, setServerError] = useState("");
    const navigate = useNavigate();

    const validateForm = () => {
        let errors = {};
        if (!formData.username) errors.username = "El nombre es obligatorio";
        if (!formData.email.includes("@")) errors.email = "Correo inválido";
        if (formData.password.length < 6)
            errors.password = "La contraseña debe tener al menos 6 caracteres";
        if (formData.password !== formData.confirmPassword)
            errors.confirmPassword = "Las contraseñas no coinciden";

        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setServerError(""); 
        if (!validateForm()) return;

        setLoading(true);
        try {
            const data = await registerUser(formData); 
            localStorage.setItem("token", data.token); 
            navigate("/verify-message");
        } catch (error) {
            setServerError(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <VideoBackground />
            <div className="container">
                <h1 className="title">Sign Up for Free</h1>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Nombre"
                        value={formData.username}
                        onChange={(e) =>
                            setFormData({ ...formData, username: e.target.value })
                        }
                    />
                    {errors.username && <p>{errors.username}</p>}

                    <input
                        type="email"
                        placeholder="Correo"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                    {errors.email && <p>{errors.email}</p>}

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })
                        }
                    />
                    {errors.password && <p>{errors.password}</p>}

                    <input
                        type="password"
                        placeholder="Repetir Contraseña"
                        value={formData.confirmPassword}
                        onChange={(e) =>
                            setFormData({ ...formData, confirmPassword: e.target.value })
                        }
                    />
                    {errors.confirmPassword && <p>{errors.confirmPassword}</p>}

                    {serverError && <p className="error">{serverError}</p>}

                    <button type="submit" disabled={loading}>
                        {loading ? "Registrando..." : "Register"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;


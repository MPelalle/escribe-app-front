import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { loginUser } from "../src/services/authService";
import "../styles/login.css";
import VideoBackground from "./components/VideoBackground";

export default function Login() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(formData);
      console.log("Token recibido:", res.data.token);

      if (!res.data.token) {
        throw new Error("No se recibió el token en la respuesta");
      }

      localStorage.setItem("token", res.data.token);
      console.log("Token guardado en localStorage:", localStorage.getItem("token"));

      setMessage("Sesión iniciada");

      setTimeout(() => {
        navigate("/profile"); 
      }, 500); 
    } catch (error) {
      console.error("Error en login:", error);
      setMessage("Error: " + (error.response?.data?.message || error.message));
    }
  };

  return (
    <div>
      <VideoBackground/>
      <div className="container">
        <h2>Login</h2>
        <p className="subtitle">Nota: al hacer Login, recargar la pagina para ver los cambios!</p>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Correo"
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <input
            type="password"
            placeholder="Contraseña"
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          />
          <button type="submit">Login</button>
          <p>{message}</p>
        </form>
      </div>
    </div>
  );
}

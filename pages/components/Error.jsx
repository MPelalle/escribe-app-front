import React from "react";
import { useNavigate } from "react-router-dom";
import '../../styles/register.css'

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h1 className="title">404</h1>
      <p className="subtitle">Página no encontrada</p>
      <button className="btn" onClick={() => navigate("/")}>Volver al inicio</button>
    </div>
  );
};

export default Error;

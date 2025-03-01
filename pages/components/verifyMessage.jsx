import React from "react";
import '../../styles/verify.css'
import VideoBackground from "./VideoBackground";

const VerifyMessage = () => {
    return (
        <div>
            <VideoBackground />
        <div className="verify-container">
            <img src="../../styles/assets/email-check.png" alt="" className="email-check"/>
            <h2 className="title">Debes verificar tu correo electrónico</h2>
            <p className="subtitle">Revisa tu bandeja de entrada y haz clic en el enlace de verificación.</p>
        </div>
        </div>
    );
};

export default VerifyMessage;

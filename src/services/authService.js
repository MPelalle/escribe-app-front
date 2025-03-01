import axios from "axios";
const API_URL = import.meta.env.VITE_BACKEND_URL

export const registerUser = async ({ username, email, password }) => {
    try {
        const response = await fetch(`${API_URL}/api/auth/register`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, email, password }),
        });
        const text = await response.text();

        return JSON.parse(text);
    } catch (error) {
        console.error("Error en el registro:", error);
        throw error;
    }
};

export const loginUser = async (userData) => {
    return axios.post(`${API_URL}/api/auth/login`, userData);
};

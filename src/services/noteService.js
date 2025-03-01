const API_URL = import.meta.env.VITE_BACKEND_URL

export const createNote = async (title, content, token) => {
    const response = await fetch(`${API_URL}/api/notes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content }),
    });
    return response.json();
};

export const getNotes = async (token) => {
    const response = await fetch(`${API_URL}/api/notes`, {
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
};

export const updateNote = async (id, title, content, token) => {
    const response = await fetch(`${API_URL}/api/notes`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ title, content }),
    });
    return response.json();
};

export const deleteNote = async (id, token) => {
    const response = await fetch(`${API_URL}/api/notes/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
    });
    return response.json();
};

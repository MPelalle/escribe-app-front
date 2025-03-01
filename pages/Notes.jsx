import React, { useState, useEffect } from "react";
import { createNote, getNotes, updateNote, deleteNote } from "../src/services/noteService.js";
import "../styles/notes.css";
import VideoBackground from "./components/VideoBackground.jsx";

const Notes = () => {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [editingId, setEditingId] = useState(null);
    const token = localStorage.getItem("token");

    useEffect(() => {
        fetchNotes();
    }, []);

    const fetchNotes = async () => {
        const data = await getNotes(token);
        setNotes(data);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (editingId) {
            await updateNote(editingId, title, content, token);
            setEditingId(null);
        } else {
            await createNote(title, content, token);
        }
        setTitle("");
        setContent("");
        fetchNotes();
    };

    const handleEdit = (note) => {
        setTitle(note.title);
        setContent(note.content);
        setEditingId(note._id);
    };

    const handleDelete = async (id) => {
        await deleteNote(id, token);
        fetchNotes();
    };

    return (

        <div>
            <VideoBackground />
        <div>
            <h1 className="title">Notas</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Título"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Contenido"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                />
                <button type="submit">{editingId ? "Actualizar" : "Crear"}</button>
            </form>
            <div className="notes-container">
            <ul>
                {notes.map((note) => (
                    <li key={note._id}>
                        <h3>{note.title}</h3>
                        <p>{note.content}</p>
                        <button onClick={() => handleEdit(note)}>Editar</button>
                        <button onClick={() => handleDelete(note._id)}>Eliminar</button>
                    </li>
                ))}
            </ul>
            </div>
        </div>
        </div>
    );
};

export default Notes;

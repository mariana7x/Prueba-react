import axios from "axios"

const notesApi = axios.create({
    baseURL: "http://localhost:3000/notes"
})
export const getNotes = async () => {
    const res = await notesApi.get("/")
    console.log(res);
    return res.data;
}

export const createNote = (note) => notesApi.post("/", note)

export const deleteNote = id => notesApi.delete(`/${id}`)

export const updateNote = (note) => notesApi.put(`/${note.id}`, note)
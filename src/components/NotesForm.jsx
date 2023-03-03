import { createNote } from "../api/notesAPI";
import { useMutation, useQueryClient } from "@tanstack/react-query"

export const NotesForm = () => {

    const queryClient = useQueryClient()

    const addNoteMutation = useMutation({
        mutationFn: createNote,
        onSuccess: () => {
            queryClient.invalidateQueries("notes")
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const note = Object.fromEntries(formData);
        addNoteMutation.mutate({
            ...note

        })
    }


    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="titulo">Titulo</label>
            <input type="text" id="titulo" name="titulo" />

            <label htmlFor="descripcion">Descripcion</label>
            <input type="text" id="descripcion" name="descripcion" />

            <label htmlFor="importancia">Importancia</label>
            <select name="importancia">
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
            </select>


            <button>
                Add note
            </button>
            

        </form>


    )
}

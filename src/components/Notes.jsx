import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { getNotes, deleteNote, updateNote } from "../api/notesAPI.js"

export const Notes = () => {

  const queryClient = useQueryClient()
  const { isLoading, data: notes, isError, error } = useQuery({
    queryKey: ["notes"],
    queryFn: getNotes,
    select: notes => notes.sort((a, b) => b.id - a.id)
  })

  const deleteNoteMutation = useMutation({
    mutationFn: deleteNote,
    onSuccess: () => {
      queryClient.invalidateQueries("notes")
    }

  })

  const updateNoteMutation = useMutation({
    mutationFn: updateNote,
    onSuccess: () => {
      queryClient.invalidateQueries("notes")
    }
  })

  if (isLoading) return <div>Loading...</div>
  else if (isError) return <div>Error: {error.message}</div>

  return notes.map(note => (
    <div key={note.id}>
      <h3>{note.titulo}</h3>
      <p>{note.descripcion}</p>
      <p>{note.importancia}</p>
      <button onClick={() => {
        deleteNoteMutation.mutate(note.id)
      }}>
        Delete
      </button>
    
    </div>
  ))
}

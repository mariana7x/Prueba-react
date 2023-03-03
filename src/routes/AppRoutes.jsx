import { Navigate, Route, Routes } from "react-router-dom"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"
import { NotesPage } from "../pages/NotesPAge"

export const AppRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<NotesPage />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />


        <Route path="/*" element={<Navigate to="/" />}/>
    </Routes>
  )
}

import { Navigate, Routes } from "react-router-dom"

export const AuthRoutes = () => {
  return (
    <Routes>
        <Route path='login' element={ <Login/> } />
       
       <Route path='/*' element={ <Navigate to="/auth/login"/> } />
    </Routes>
  )
}

import { Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../routes/AuthRoutes";
import { PrincipalRoutes } from "../principal/pages/routes/PrincipalRoutes";

export const AppRouter = () => {
  return (
   <Routes>

    
    <Route path="/auth/*" element= { <AuthRoutes/> }/>

    <Route path="/*" element= { <PrincipalRoutes/> } />


   </Routes>
  )
}

import { useContext } from "react"
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from "../Auth/Context/AuthProvider"

export const PrivateRoutes = () => {
   const logged = useContext(AuthContext);
   console.log(logged);
   
   return logged
   ? <Outlet />
   : <Navigate to="sign-in" />
}
import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from "react-redux"

export const PrivateRoutes = () => {
   const { isAuthenticated } = useSelector((state) => state.Authentication)
   return isAuthenticated
   ? <Outlet />
   : <Navigate to="sign-in" />
}
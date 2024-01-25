import { useContext } from 'react'
import { Outlet, Navigate } from 'react-router-dom'
import { AuthContext } from '../Auth/Context/AuthProvider'

export const PublicRoutes = () => {
   const logged = useContext(AuthContext)
   return !logged 
   ? <Outlet />
   : <Navigate to="dashboard" />
}
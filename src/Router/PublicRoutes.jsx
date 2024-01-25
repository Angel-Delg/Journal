import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

export const PublicRoutes = () => {
   const { isAuthenticated } = useSelector(state => state.Authentication)
   return !isAuthenticated 
   ? <Outlet />
   : <Navigate to="dashboard" />
}
import { Route, Routes, Navigate } from "react-router-dom"
import { PrivateRoutes, PublicRoutes } from "./"
import { SignIn, SignUp } from "../Auth/Pages"
import { Home } from "../Journal/Pages"

export const RouterApp = () => {
   return (
      <Routes>

         {/* Routes to authentication */}
         <Route path="/" element={ <PublicRoutes /> }>
            <Route path="/sign-in" element={ <SignIn /> } />
            <Route path="/sign-up" element={ <SignUp /> } />
            <Route path="/*" element={ 
                  <Navigate to="/sign-in" /> 
               }
            />
         </Route>
         
         {/* Routes to Dashboard */}
         <Route path="/dashboard" element={<PrivateRoutes />}>
            <Route path="/dashboard/" element={ <Home /> } />
         </Route>
         {/* Pages no found 404 */}
         <Route path="/*" element />
      </Routes>
   )
}
import { createContext, useState } from "react"
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const [logged, setLogged] = useState(false);
   return (
      <AuthContext.Provider value={ logged }>
         { children }
      </AuthContext.Provider>
   )
}
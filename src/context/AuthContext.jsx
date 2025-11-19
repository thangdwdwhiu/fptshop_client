import { createContext } from "react";

export const AuthContext  = createContext()



export const AuthProvider = ({children}) => {
    

    const register = () => {

    }

    return (
        <AuthContext.Provider value={{register}}> 
            {children}
        </AuthContext.Provider>
    )
}
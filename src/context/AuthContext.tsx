// src/context/AuthContext.tsx
import { createContext, useContext } from 'react'
import { getAuth } from 'firebase/auth'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const auth = getAuth()
  
  return (
    <AuthContext.Provider value={{ auth }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
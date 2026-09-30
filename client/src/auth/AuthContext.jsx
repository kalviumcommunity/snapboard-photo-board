// auth/AuthContext.jsx
//
// ── TASK 1 (5 marks): AuthContext with the token IN MEMORY (not localStorage) ─
// Provide { user, login, logout } to the whole app.
//   • login(email, password): POST /auth/login via `api`, get { accessToken, user },
//     store the token IN MEMORY by calling setAccessToken(accessToken), keep `user`
//     in React state, and return the user.
//   • logout(): clear the user state and call setAccessToken(null).
//   • Do NOT use localStorage or sessionStorage anywhere.

import { createContext, useContext, useState } from "react";
import { api, setAccessToken } from "../api/axios.js";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  async function login(email, password) {
    // TODO (Task 1):
    //   const { data } = await api.post("/auth/login", { email, password });
    //   setAccessToken(data.accessToken);   // token stays in memory only
    //   setUser(data.user);
    //   return data.user;
  }

  function logout() {
    // TODO (Task 1):
    //   setUser(null);
    //   setAccessToken(null);
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// Handy hook used across the app. Do not rename.
export function useAuth() {
  return useContext(AuthContext);
}

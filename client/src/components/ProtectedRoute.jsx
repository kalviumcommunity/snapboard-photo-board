// components/ProtectedRoute.jsx
//
// ── TASK 3 (5 marks): guard a route ──────────────────────────────────────────
// If nobody is logged in, redirect to /login. Otherwise render the children.
//   • Read `user` from useAuth().
//   • If there is no user, return <Navigate to="/login" replace />.
//   • Otherwise return the children.

import { Navigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.jsx";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  // TODO (Task 3):
  //   if (!user) return <Navigate to="/login" replace />;
  //   return children;

  return children; // ← replace this with the guard above
}

// App shell: nav bar + routes. Do NOT edit.
// Routes:  /login (public)  ·  /upload (protected)  ·  /  → redirects to /upload
import { Routes, Route, Navigate, Link, useNavigate } from "react-router-dom";
import { useAuth } from "./auth/AuthContext.jsx";
import LoginPage from "./components/LoginPage.jsx";
import UploadPage from "./components/UploadPage.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

export default function App() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="app">
      <nav className="nav">
        <Link to="/upload" className="brand">📸 SnapBoard</Link>
        <div className="nav-right">
          {user ? (
            <>
              <span className="who">
                {user.name}
                {user.role === "admin" && <span className="badge">ADMIN</span>}
              </span>
              <button onClick={() => { logout(); navigate("/login"); }}>Log out</button>
            </>
          ) : (
            <Link to="/login">Log in</Link>
          )}
        </div>
      </nav>

      <main className="main">
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <UploadPage />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Navigate to="/upload" replace />} />
        </Routes>
      </main>
    </div>
  );
}

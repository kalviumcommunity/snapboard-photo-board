// LoginPage — given. It CONSUMES your AuthContext (Task 1) via useAuth().login.
// You do not need to edit this file, but read it: it shows what login() must do.
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext.jsx";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("ada@demo.com");
  const [password, setPassword] = useState("password");
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    setBusy(true);
    try {
      await login(email, password); // ← Task 1: your AuthContext must implement this
      navigate("/upload");
    } catch {
      setError("Login failed. Try ada@demo.com / password");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="card">
      <h2>Log in to SnapBoard</h2>
      <form onSubmit={onSubmit}>
        <label>Email
          <input value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>Password
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </label>
        {error && <p className="error">{error}</p>}
        <button disabled={busy}>{busy ? "Logging in…" : "Log in"}</button>
      </form>
      <p className="hint">Demo: <b>ada@demo.com</b> (admin) or <b>grace@demo.com</b> (user) · password <b>password</b></p>
    </div>
  );
}

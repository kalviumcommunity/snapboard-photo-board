// api/axios.js — shared Axios instance for talking to the SnapBoard API.
//
// The access token lives ONLY in memory (never localStorage). We keep it in a
// module-scoped variable that your AuthContext updates via setAccessToken().
//
// ── TASK 2 (5 marks): add a REQUEST INTERCEPTOR ──────────────────────────────
// Attach the token to EVERY outgoing request as an Authorization header:
//     Authorization: Bearer <accessToken>
// Only add the header when a token exists.

import axios from "axios";

let accessToken = null;

// Called by AuthContext on login (with the token) and logout (with null).
export function setAccessToken(token) {
  accessToken = token;
}

export const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || "http://localhost:3001",
});

// TODO (Task 2): register a request interceptor on `api`.
//   api.interceptors.request.use((config) => {
//     if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
//     return config;
//   });

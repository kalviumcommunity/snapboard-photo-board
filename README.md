# SnapBoard — React mini project

A tiny photo-board app. The **API server is already built** (`server/`, do not
edit). Your job is to finish **four things in the React client** (`client/src`).

## The only four files you edit (all under `client/src/`)

| # | File to edit | What to build |
|---|------|------|
| **Task 1** | `client/src/auth/AuthContext.jsx` | `login` + `logout`, keep the token **in memory** |
| **Task 2** | `client/src/api/axios.js` | request interceptor that attaches the `Bearer` token |
| **Task 3** | `client/src/components/ProtectedRoute.jsx` | redirect to `/login` when logged out |
| **Task 4** | `client/src/components/UploadPage.jsx` | drag-drop + validation + upload progress bar |

Do **not** touch anything else — not the `server/` folder, not the other client
files. Each of the four files has a `// TODO` with step-by-step hints. Search the
project for `TODO` to jump to your work.

## Run it (two terminals)

**Terminal 1 — API server**
```bash
cd server
npm install
npm start          # → http://localhost:3001
```

**Terminal 2 — React client**
```bash
cd client
npm install
cp .env.example .env
npm run dev        # → http://localhost:5173
```

Open http://localhost:5173. Log in with **ada@demo.com / password** (admin) or
**grace@demo.com / password** (user), then upload an image.

## Check your work

- Login works and the nav shows your name (with an **ADMIN** badge for Ada).
- Visiting `/upload` while logged out sends you to `/login`.
- Dragging a non-image or a file > 5 MB shows an error and does **not** upload.
- A valid image shows the progress bar filling, then the uploaded photo appears.

## Submit

ZIP the whole project **without any `node_modules`** (delete
`client/node_modules` and `server/node_modules` first) and upload the ZIP.

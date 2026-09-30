# SnapBoard — React mini project

A tiny photo-board app. The **API server is already built** (`server/`, do not
edit). Your job is to finish **four things in the React client** (`client/src`).

## What you edit (client/src)

| File | Task |
|------|------|
| `auth/AuthContext.jsx` | **Task 1** — login + logout, token **in memory** |
| `api/axios.js` | **Task 2** — request interceptor attaches `Bearer` token |
| `components/ProtectedRoute.jsx` | **Task 3** — redirect to `/login` if not logged in |
| `components/UploadPage.jsx` | **Task 4** — drag-drop + validation + progress bar |

Everything else is given. Each TODO has step-by-step hints in the comments.

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

Fill in your name + roll number below, then ZIP the whole project **without any
`node_modules`** and upload it. Also paste what you verified into `RESULT.txt`.

- **Name:**
- **Roll number:**

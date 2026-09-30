// components/UploadPage.jsx
//
// ── TASK 4 (5 marks): drag-and-drop upload with validation + progress bar ─────
// Let the user pick OR drag an image, validate it on the client, upload it to
// POST /api/upload as multipart/form-data, and show an upload progress bar.
//
//   • Accept a file from the file input OR from a drag-and-drop onto the dropzone.
//   • CLIENT VALIDATION before uploading:
//       – must be an image  (file.type starts with "image/")
//       – must be ≤ 5 MB    (file.size <= 5 * 1024 * 1024)
//     If invalid, show an error message and do NOT upload.
//   • Upload with the shared `api` and FormData (field name MUST be "image"):
//       const form = new FormData();
//       form.append("image", file);
//       const { data } = await api.post("/api/upload", form, {
//         onUploadProgress: (e) => setProgress(Math.round((e.loaded / e.total) * 100)),
//       });
//   • Show the progress % in the .progress bar, then show the uploaded image
//     from `${API_URL}${data.url}`.
//
// The dropzone markup + state hooks below are provided; fill in the TODOs.

import { useRef, useState } from "react";
import { api } from "../api/axios.js";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3001";

export default function UploadPage() {
  const inputRef = useRef(null);
  const [dragging, setDragging] = useState(false);
  const [error, setError] = useState("");
  const [progress, setProgress] = useState(0);
  const [uploadedUrl, setUploadedUrl] = useState("");

  async function handleFile(file) {
    setError("");
    setUploadedUrl("");
    if (!file) return;

    // TODO (Task 4a): client validation — image only, ≤ 5MB. On failure:
    //   setError("Please choose an image under 5 MB."); return;

    // TODO (Task 4b): upload with FormData + onUploadProgress, then setUploadedUrl.
  }

  function onDrop(e) {
    e.preventDefault();
    setDragging(false);
    handleFile(e.dataTransfer.files?.[0]);
  }

  return (
    <div className="card">
      <h2>Upload a photo</h2>

      <div
        className={`dropzone ${dragging ? "drag" : ""}`}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
      >
        Drag an image here, or click to choose
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          hidden
          onChange={(e) => handleFile(e.target.files?.[0])}
        />
      </div>

      {error && <p className="error">{error}</p>}

      {progress > 0 && (
        <div className="progress"><div style={{ width: `${progress}%` }} /></div>
      )}

      {uploadedUrl && (
        <img className="preview" src={`${API_URL}${uploadedUrl}`} alt="uploaded" />
      )}
    </div>
  );
}

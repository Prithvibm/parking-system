# SprintBoard Git Practice Project

A small full-stack team dashboard designed for practicing Git workflows: feature branches, pull requests, rebases, merges, and resolving conflicts.

## Stack

- Frontend: React + Vite
- Backend: Node.js + Express
- Storage: in-memory seed data (no database setup required)

## Quick start

```powershell
cd backend
npm install
npm run dev
```

In another terminal:

```powershell
cd frontend
npm install
npm run dev
```

The API runs at `http://localhost:4000`; Vite normally runs at `http://localhost:5173`.

## Team areas

| Person | Suggested area | Useful files |
| --- | --- | --- |
| 1 | Board and task cards | `frontend/src/components/Board.jsx`, `TaskCard.jsx` |
| 2 | Team management | `frontend/src/components/TeamPanel.jsx`, `backend/src/routes/members.js` |
| 3 | Reports and statistics | `frontend/src/components/Reports.jsx`, `backend/src/services/metrics.js` |
| 4 | API, seed data, docs | `backend/src/routes/tasks.js`, `backend/src/data/seed.js`, `docs/` |

See [docs/GIT-EXERCISES.md](docs/GIT-EXERCISES.md) for deliberately conflict-friendly exercises.

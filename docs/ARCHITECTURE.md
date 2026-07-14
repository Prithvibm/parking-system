# Architecture

`frontend` renders a lightweight sprint board and calls the Express API in `backend`.

The backend keeps its state in memory so everyone can run the project with only Node.js installed. Routes are split by resource, while services contain reusable calculations and validation.

## API endpoints

- `GET /api/health`
- `GET /api/tasks`
- `POST /api/tasks`
- `PATCH /api/tasks/:id`
- `GET /api/members`
- `GET /api/metrics/summary`

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

## Project Overview

### Frontend
The frontend provides the user interface for the Parking System. It allows users to interact with the application through web pages and communicates with the backend using API requests.

### Backend
The backend manages the application logic, processes requests, and handles data storage and retrieval.

### Project Structure
- `frontend/` – Contains the user interface.
- `backend/` – Contains the server-side application.
- `docs/` – Contains project documentation.
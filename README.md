# Parking System

A full-stack parking management system. This repository is structured as a monorepo containing both the frontend and backend applications.

## Project Overview

The Parking System provides a comprehensive interface to manage parking spaces, team members, and reports. It uses a modern web stack designed for fast development and easy deployment.

## Folder Structure

- `frontend/` - React + Vite frontend application
- `backend/` - Node.js + Express API
- `docs/` - Project documentation and guides

## Prerequisites

- Node.js (v16 or higher recommended)
- npm (Node Package Manager)

## Setup Instructions

1. **Install Dependencies**
   From the root of the project, install both frontend and backend dependencies:
   ```bash
   npm run install:all
   ```

2. **Start the Development Servers**
   Open two terminal windows. In the first terminal, start the backend API:
   ```bash
   npm run dev:backend
   ```
   *The API will run at http://localhost:4000.*

   In the second terminal, start the frontend application:
   ```bash
   npm run dev:frontend
   ```
   *The React app will be served at http://localhost:5173.*

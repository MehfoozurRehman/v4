# Developer Full-Stack Portfolio v4

A full-stack personal portfolio and client showcase web application built with React, Vite, Express, MongoDB, and Cloudinary.

## Overview

`v4` combines a modern Vite-powered React client with an Express API backend, providing dynamic project administration, Cloudinary asset uploads, MongoDB project databases, interactive Swiper carousels, and Firebase deployment workflows.

## Tech Stack

- **Frontend**: React (v17), [Vite](https://vitejs.dev/) (v2), React Router DOM v6, Swiper.js (v8), SCSS
- **Backend Server**: Node.js & Express (v4)
- **Database**: MongoDB & Mongoose (v6)
- **Media & Assets**: Cloudinary (`cloudinary`, `cloudinary-react`), `express-fileupload`
- **Hosting**: Firebase Hosting (`firebase.json`)

## Prerequisites

- Node.js (v16 or v18 recommended)
- MongoDB instance (local or MongoDB Atlas)
- Package manager (`pnpm` or `npm`)
- Cloudinary account credentials

## Getting Started

1. **Install dependencies**:
   ```bash
   pnpm install
   # or
   npm install
   ```

2. **Configure Environment Variables**:
   Create a `.env` file in the root directory:
   ```env
   PORT=9000
   MONGO_DB_URL="your-mongodb-connection-string"
   ```

3. **Run Concurrently in Development Mode**:
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Running Services Individually**:
   - Client dev server: `npm run client:dev`
   - Express server: `npm run server:dev`

## Available Scripts

- `npm run dev` - Concurrently boots both Express backend and Vite frontend with live reload.
- `npm run client:dev` - Starts only the Vite frontend dev server.
- `npm run server:dev` - Starts only the Express backend with `nodemon`.
- `npm run build` - Compiles both server and client for production.
- `npm start` - Starts the compiled production server.
- `npm run deploy` - Builds and deploys directly to Firebase Hosting.

## Author

Created by [Mehfooz-ur-Rehman](https://github.com/MehfoozurRehman).

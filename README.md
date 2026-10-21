# Developer Full-Stack Portfolio (v4)

A personal portfolio and client showcase with an Express and MongoDB API behind a React front end. Visitors can read projects and testimonials and send contact messages; the owner manages content through the API.

**Status:** In progress. The public pages, the project, contact and testimonial endpoints and the image upload code are real, but the dashboard login does not check credentials, the upload route never sends a response, and none of the API routes require authentication.

## The problem

A developer wants one site that presents their work and collects leads and client testimonials, with the content stored in a database instead of hard-coded in the page. This repo is the full-stack version of that idea.

## What it does

- Public site with home, about, services, skills, portfolio, project details and contact sections (`src/app/screens/`, `src/app/components/`).
- Portfolio filtering and project cards backed by the `projects` collection.
- Contact form and testimonial form that post to the API (`ContactSection.jsx`, `TestimonialFormSection.jsx`).
- REST endpoints for contacts, projects and testimonials: `get_*`, `set_*` and `delete_*` under `/api/v1` (`src/lib/routers/`).
- Image upload to Cloudinary through `POST /api/v1/upload` (`src/server.js`).

## How it's built

- Express 4 server in `src/server.js`. It connects to MongoDB with Mongoose 6, serves the built client from `dist/app`, and mounts three routers.
- Data models in `src/lib/models/` (contact, project, testimonial). Each router reads and writes through its model.
- React 17 client built with Vite. Pages are plain components under `src/app/`, styled with Sass and Swiper for carousels.
- Server code is compiled with Babel into `dist/` before it is started, so the production server runs `node dist/server.js`.
- Cloudinary credentials are read from environment variables. The cloud name is set in code.
- Firebase Hosting is configured for the client through `firebase.json`.

## Running it locally

```bash
pnpm install
# create .env with MONGO_DB_URL, CLOUDINARY_API_KEY and CLOUDINARY_API_SECRET
pnpm dev          # starts nodemon for the API and Vite for the client
pnpm build        # babel for the server, vite for the client
pnpm start        # runs dist/server.js
```

Other scripts: `clean`, `serve` (Vite preview), `test` (Prettier, ESLint and Stylelint checks, no unit tests) and `deploy` (build, then `firebase deploy`).

## What's left

- The login screen (`src/app/screens/Login.jsx`) only logs the email and password to the console. Nothing is checked and no session is created.
- `POST /api/v1/upload` uploads the file but never sends a response, so the caller hangs.
- None of the `set_*` and `delete_*` routes check who is calling, so anyone who can reach the API can change or delete content.
- `ContactSection.jsx` still has commented-out request code and a timed placeholder path.
- No unit or API tests; the `test` script only runs linters.
- `PORT` defaults to 3001 in code, and the `.env` file is not committed, so setup depends on the README steps above.
- Cloudinary credentials were previously hard-coded in `src/server.js`. They now come from the environment, but the old values remain in git history and should be rotated.

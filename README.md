# Node.js Starter Project

A simple, self-contained Node.js + Express project. Everything here is run
**manually** — no GitHub Actions, no Docker, no Kubernetes, no CI/CD pipeline.
You build, test, and deploy this yourself, one step at a time.

## Project Structure

```
nodejs-starter/
├── src/
│   ├── config/          # App configuration
│   ├── controllers/     # Request handlers / business logic
│   ├── middleware/       # Express middleware (error handling, etc.)
│   ├── models/           # Data models (empty — add your DB layer here)
│   ├── routes/           # Route definitions
│   ├── utils/             # Logger and small helpers
│   └── index.js         # App entry point
├── tests/                # Tests using Node's built-in test runner
├── logs/                 # Local log output (gitignored)
├── .env.example          # Copy to .env and fill in your values
├── .gitignore
├── eslint.config.js
├── .prettierrc
├── package.json
└── README.md
```

## Setup (manual, step by step)

1. **Clone the repo**
   ```bash
   git clone <your-repo-url>
   cd nodejs-starter
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` with your own values.

4. **Run the app**
   ```bash
   npm start
   ```
   Or, for auto-restart on file changes during development:
   ```bash
   npm run dev
   ```

5. **Check it's running**
   Visit `http://localhost:3000/health` — you should see `{"status":"ok", ...}`.

## Testing

Run tests with Node's built-in test runner (no extra test framework needed):
```bash
npm test
```

## Linting & Formatting

```bash
npm run lint      # check code style issues
npm run format    # auto-format all files in src/
```

## Manual Deployment (example: plain VPS/server)

Since there's no CI/CD pipeline, here's a manual deployment flow you can follow:

1. SSH into your server.
2. Pull the latest code:
   ```bash
   git pull origin main
   ```
3. Install/update dependencies:
   ```bash
   npm install --omit=dev
   ```
4. Set your `.env` file on the server (never commit real `.env` files).
5. Start or restart the app:
   ```bash
   npm start
   ```
   For keeping it alive after you disconnect, consider a simple process
   manager like `pm2`:
   ```bash
   npm install -g pm2
   pm2 start src/index.js --name nodejs-starter
   pm2 save
   ```
6. Confirm it's live by hitting `/health` on your server's address.

## Notes

- This project intentionally has **no automation** (no GitHub Actions, no
  Docker, no Kubernetes). Every step — install, test, build, deploy — is done
  by hand so you fully understand and control each part of the process.
- Add a real database by creating a client/connection file inside
  `src/config/` and models inside `src/models/`.
- Add authentication, rate limiting, or additional middleware inside
  `src/middleware/` as your project grows.

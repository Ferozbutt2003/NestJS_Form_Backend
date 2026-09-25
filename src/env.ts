// Loads variables from the .env file into process.env.
// This file is imported first in main.ts, before app.module.ts,
// so that process.env.DB_PASSWORD (etc.) is ready before NestJS reads it.
process.loadEnvFile();

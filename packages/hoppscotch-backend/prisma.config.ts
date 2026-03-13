import path from 'node:path';
import { config } from 'dotenv';

// Load .env from monorepo root so DATABASE_URL is available when running from this package
config({ path: path.resolve(__dirname, '../../.env') });

import { defineConfig, env } from 'prisma/config';

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
});

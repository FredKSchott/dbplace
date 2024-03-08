import { defineConfig } from 'astro/config';
import db from "@astrojs/db";
import react from "@astrojs/react";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [db(), react()],
  output: "server",
  adapter: vercel()
});
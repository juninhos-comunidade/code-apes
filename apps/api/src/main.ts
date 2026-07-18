import { createApplication } from "./composition-root/create-application.js";
import { readRuntimeConfig } from "./infrastructure/config/environment.js";

const config = readRuntimeConfig();
const app = createApplication();

async function shutdown(signal: string) {
  app.log.info({ signal }, "Shutting down API");
  await app.close();
  process.exit(0);
}

process.on("SIGINT", () => void shutdown("SIGINT"));
process.on("SIGTERM", () => void shutdown("SIGTERM"));

try {
  await app.listen({ host: config.HOST, port: config.PORT });
} catch (error) {
  app.log.error(error);
  process.exit(1);
}

import { createServer } from "../presentation/http/create-server.js";

export function createApplication() {
  return createServer({ logger: true });
}

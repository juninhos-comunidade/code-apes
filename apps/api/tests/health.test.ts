import { afterEach, describe, expect, it } from "vitest";

import { createServer } from "../src/presentation/http/create-server.js";

const servers: ReturnType<typeof createServer>[] = [];

afterEach(async () => {
  await Promise.all(servers.splice(0).map((server) => server.close()));
});

describe("GET /health", () => {
  it("responds without database, Supabase or OpenAI credentials", async () => {
    const server = createServer();
    servers.push(server);

    const response = await server.inject({ method: "GET", url: "/health" });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toEqual({
      service: "merge-quest-api",
      status: "ok",
    });
  });
});

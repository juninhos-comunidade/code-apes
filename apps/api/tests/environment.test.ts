import { describe, expect, it } from "vitest";

import {
  readDatabaseConfig,
  readOpenAiConfig,
  readRuntimeConfig,
} from "../src/infrastructure/config/environment.js";

describe("environment configuration", () => {
  it("uses safe runtime defaults without external credentials", () => {
    expect(readRuntimeConfig({})).toEqual({
      HOST: "127.0.0.1",
      LOG_LEVEL: "info",
      NODE_ENV: "development",
      PORT: 3001,
    });
  });

  it("rejects a missing database URL only when database config is requested", () => {
    expect(() => readDatabaseConfig({})).toThrow();
  });

  it("rejects a missing OpenAI key only when AI config is requested", () => {
    expect(() => readOpenAiConfig({})).toThrow();
  });
});

import { z } from "zod";

const runtimeConfigSchema = z.object({
  HOST: z.string().min(1).default("127.0.0.1"),
  LOG_LEVEL: z
    .enum(["fatal", "error", "warn", "info", "debug", "trace", "silent"])
    .default("info"),
  NODE_ENV: z.enum(["development", "test", "production"]).default("development"),
  PORT: z.coerce.number().int().min(1).max(65_535).default(3001),
});

const databaseConfigSchema = z.object({
  DATABASE_URL: z.string().url(),
});

const supabaseConfigSchema = z.object({
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1),
  SUPABASE_URL: z.string().url(),
});

const openAiConfigSchema = z.object({
  OPENAI_API_KEY: z.string().min(1),
});

export type RuntimeConfig = z.infer<typeof runtimeConfigSchema>;
export type DatabaseConfig = z.infer<typeof databaseConfigSchema>;
export type SupabaseConfig = z.infer<typeof supabaseConfigSchema>;
export type OpenAiConfig = z.infer<typeof openAiConfigSchema>;

export function readRuntimeConfig(
  environment: NodeJS.ProcessEnv = process.env,
): RuntimeConfig {
  return runtimeConfigSchema.parse(environment);
}

export function readDatabaseConfig(
  environment: NodeJS.ProcessEnv = process.env,
): DatabaseConfig {
  return databaseConfigSchema.parse(environment);
}

export function readSupabaseConfig(
  environment: NodeJS.ProcessEnv = process.env,
): SupabaseConfig {
  return supabaseConfigSchema.parse(environment);
}

export function readOpenAiConfig(
  environment: NodeJS.ProcessEnv = process.env,
): OpenAiConfig {
  return openAiConfigSchema.parse(environment);
}

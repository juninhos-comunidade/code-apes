import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

export function createDatabaseClient(databaseUrl: string) {
  const pool = new Pool({ connectionString: databaseUrl });

  return {
    db: drizzle({ client: pool }),
    close: () => pool.end(),
  };
}

import { createClient } from "@supabase/supabase-js";

import type {
  AuthenticatedPrincipal,
  AuthGateway,
} from "../../application/ports/auth-gateway.js";

export function createSupabaseAdminClient(url: string, serviceRoleKey: string) {
  return createClient(url, serviceRoleKey, {
    auth: {
      autoRefreshToken: false,
      detectSessionInUrl: false,
      persistSession: false,
    },
  });
}

export class SupabaseAuthGateway implements AuthGateway {
  public constructor(
    private readonly client: ReturnType<typeof createSupabaseAdminClient>,
  ) {}

  public async verifyAccessToken(
    accessToken: string,
  ): Promise<AuthenticatedPrincipal> {
    const { data, error } = await this.client.auth.getUser(accessToken);

    if (error || !data.user) {
      throw new Error("Invalid or expired access token.");
    }

    return {
      userId: data.user.id,
      ...(data.user.email ? { email: data.user.email } : {}),
    };
  }
}

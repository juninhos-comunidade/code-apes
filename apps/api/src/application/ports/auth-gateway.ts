export type AuthenticatedPrincipal = Readonly<{
  userId: string;
  email?: string;
}>;

export interface AuthGateway {
  verifyAccessToken(accessToken: string): Promise<AuthenticatedPrincipal>;
}

import { err, ok, Result } from "neverthrow";

export type Permission = string;

export interface SecurityContext {
  userId: string | null;
  roles: string[];
}

export function requirePermission(
  context: SecurityContext,
  permission: Permission
): Result<true, Error> {
  if (context.roles.includes(permission) || context.roles.includes("admin")) {
    return ok(true);
  }
  return err(new Error("Missing permission"));
}

export function getSecurityContext(): SecurityContext {
  return { userId: null, roles: [] };
}


import { okAsync, ResultAsync } from "neverthrow";

export interface AuditEvent {
  eventType: string;
  actorId: string | null;
  resource: string;
  resourceId?: string;
  payload?: Record<string, unknown>;
}

export function createAuditLog(
  event: AuditEvent
): ResultAsync<AuditEvent, Error> {
  // In a real implementation, insert into Convex table here.
  return okAsync(event);
}


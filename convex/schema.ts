import { defineSchema, defineTable } from "convex/schema";
import { v } from "convex/values";

export default defineSchema({
  apps: defineTable({
    appId: v.string(),
    nameKey: v.string(),
    version: v.string(),
    createdAt: v.number()
  }).index("by_appId", ["appId"]),
  auditLogs: defineTable({
    eventType: v.string(),
    actorId: v.string(),
    resource: v.string(),
    createdAt: v.number(),
    payload: v.optional(v.any())
  }).index("by_actor", ["actorId"])
});


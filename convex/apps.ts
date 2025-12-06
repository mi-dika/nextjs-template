import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const listApps = query({
  args: {},
  handler: async (ctx) => {
    const apps = await ctx.db.query("apps").order("desc").collect();
    return apps;
  }
});

export const registerApp = mutation({
  args: {
    appId: v.string(),
    nameKey: v.string(),
    version: v.string()
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const existing = await ctx.db
      .query("apps")
      .withIndex("by_appId", (q) => q.eq("appId", args.appId))
      .unique();

    if (existing) {
      return existing._id;
    }

    return ctx.db.insert("apps", {
      appId: args.appId,
      nameKey: args.nameKey,
      version: args.version,
      createdAt: now
    });
  }
});


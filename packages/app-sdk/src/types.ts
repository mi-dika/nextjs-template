export type BlockTarget =
  | "dashboard.main"
  | "dashboard.sidebar"
  | "app.page"
  | "custom";

export type ActionType = "row" | "bulk" | "nav";

export interface AppBlock {
  id: string;
  component: string;
  target: BlockTarget;
  order?: number;
  config?: Record<string, unknown>;
}

export interface AppAction {
  id: string;
  resourceType: string;
  actionType: ActionType;
  labelKey: string;
  handler?: string;
  config?: Record<string, unknown>;
}

export interface AppManifest {
  id: string;
  nameKey: string;
  version: string;
  blocks?: AppBlock[];
  actions?: AppAction[];
  descriptionKey?: string;
  homepage?: string;
}


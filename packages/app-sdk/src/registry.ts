import { createTranslator, type TranslationDictionary } from "@midika/utils";
import type { AppAction, AppBlock, AppManifest } from "./types";

type Locale = "en" | "it";
type RegistryTranslator = ReturnType<typeof createTranslator<Locale>>;

export interface AppRegistry {
  blocks: Map<string, AppBlock>;
  actions: Map<string, AppAction>;
  manifests: Map<string, AppManifest>;
  translate: RegistryTranslator;
}

export function createRegistry(manifests: AppManifest[]): AppRegistry {
  const blocks = new Map<string, AppBlock>();
  const actions = new Map<string, AppAction>();
  const manifestMap = new Map<string, AppManifest>();

  manifests.forEach((manifest) => {
    manifest.blocks?.forEach((block) => blocks.set(block.id, block));
    manifest.actions?.forEach((action) => actions.set(action.id, action));
    manifestMap.set(manifest.id, manifest);
  });

  const translations: TranslationDictionary<Locale> = {
    en: {},
    it: {}
  };

  const translate = createTranslator<Locale>(translations, "en");

  return { blocks, actions, manifests: manifestMap, translate };
}


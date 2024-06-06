import plugin from "tailwindcss/plugin";
import { shadcnThemes } from "#shadcn-themes";

export interface ShadcnPluginOptions {
  theme: keyof typeof shadcnThemes;
}

export const shadcn = plugin.withOptions<ShadcnPluginOptions>((options) => {
  return ({ addBase }) => {
    const baseStyles = shadcnThemes[options?.theme ?? "zinc"];
    addBase([baseStyles]);
  };
});

import type { Config } from "tailwindcss";

type TailwindPreset = Omit<Config, "content">;
export const preset = {} satisfies TailwindPreset;

import { Config } from "tailwindcss";
import { shadcn } from "@repo/theme/shadcn";

export default {
  content: ["./atoms/**/*.tsx"],
  theme: {
    extend: {},
  },
  plugins: [shadcn],
} satisfies Config;

import type { Config } from "tailwindcss";
import config from "@repo/ui/tailwind.config";

const webConfig = {
  ...config,
  presets: [config],
  theme: {
    
  },
} satisfies Config;

export default webConfig;
// import type { Config } from "tailwindcss";
// import config from "@repo/ui/tailwind.config";

// const webConfig = {
//   ...config,
//   prefix: "", // Remove the prefix for this app
//   content: [
//     ...config.content,
//     "./pages/**/*.{ts,tsx}",
//     "./components/**/*.{ts,tsx}",
//     "./app/**/*.{ts,tsx}",
//     "./src/**/*.{ts,tsx}",
//     "../../packages/ui/src/**/*.{ts,tsx}",
//   ],
// } satisfies Config;

// export default webConfig;

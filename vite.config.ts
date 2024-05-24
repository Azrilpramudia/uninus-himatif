import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import type { UserConfig as VitestUserConfigInterface } from "vitest/config";
import { TanStackRouterVite } from "@tanstack/router-vite-plugin";

const vitestConfig: VitestUserConfigInterface = {
  test: {
    globals: true,
    environment: "jsdom",
  },
};

export default defineConfig({
  plugins: [react(), TanStackRouterVite()],
  test: vitestConfig.test,
  resolve: {
    alias: {
      "@": "/src",
    },
  },
});

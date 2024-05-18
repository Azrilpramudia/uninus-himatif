import { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  framework: "@storybook/react-vite",
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-interactions",
    "@storybook/addon-essentials",
    "@storybook/addon-themes",
  ],
  docs: {
    defaultName: "Documentation",
  },
};

export default config;

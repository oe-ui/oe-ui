import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
    stories: ["../../../packages/components/src/**/*.stories.@(ts|tsx)"],

    addons: [
        "@storybook/addon-links",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
    ],

    staticDirs: [],
    framework: {
        name: "@storybook/react-vite",
        options: {},
    },
};

export default config;

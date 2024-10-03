import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta = {
    title: "Button",
    component: Button,
    args: {},
    argTypes: {},
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const ButtonStory: Story = {};

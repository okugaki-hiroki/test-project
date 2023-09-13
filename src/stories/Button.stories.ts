import type { Meta, StoryObj } from "@storybook/vue3";

import Button from "../components/Button.vue";

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Component/Button",
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ["autodocs"],
  argTypes: {
    label: { control: "text" },
    size: { control: "select", options: ["small", "medium", "large"] },
    variant: { control: "select", options: ["primary", "secondary"] },
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Large: Story = {
  args: {
    label: "Button",
    size: "large",
  },
};

export const Small: Story = {
  args: {
    label: "Button",
    size: "small",
  },
};

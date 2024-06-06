import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { Button, ButtonWithIcon } from "@repo/ui/button";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
    b: 10,
  },
};

export const WithValues: Story = {
  args: {
    a: 38,
    b: 22,
    children: "Amazing",
  },
};

export const WithIcon: Story = {
  render: ButtonWithIcon,
  args: {
    children: "Lighting",
  },
};

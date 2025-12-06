import type { Meta, StoryObj } from "@storybook/react";
import { LandingHero } from "./landing-hero";

const meta: Meta<typeof LandingHero> = {
  title: "Landing/Hero",
  component: LandingHero
};

export default meta;

type Story = StoryObj<typeof LandingHero>;

export const Default: Story = {};


import { ComponentStory, ComponentMeta } from "@storybook/react";
import Welcome from "./Welcome";
import React from "react";

export default {
  title: "Getting Started",
  component: Welcome,
  argTypes: {},
} as ComponentMeta<typeof Welcome>;

const Template: ComponentStory<typeof Welcome> = (args) => <Welcome />;

export const WelcomeScreen = Template.bind({});

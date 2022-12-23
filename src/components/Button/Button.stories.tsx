import { ComponentStory, ComponentMeta } from "@storybook/react";
import Button from "./Button";
import { action } from "@storybook/addon-actions";
import React from "react";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (
  <Button {...args} onClick={action("clicked")}></Button>
);

export const Primary = Template.bind({});
Primary.args = {
  kind: "primary",
  text: "Login",
  hasIcon: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: "secondary",
  text: "Create Account",
  hasIcon: true,
};

export const Danger = Template.bind({});
Danger.args = {
  kind: "danger",
  text: "Delete Account",
  hasIcon: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  kind: "tertiary",
  text: "Register",
  hasIcon: true,
};

export const LoadingButton = Template.bind({});
LoadingButton.args = {
  kind: "secondary",
  text: "Create Account",
  hasIcon: true,
  isLoading: true,
};

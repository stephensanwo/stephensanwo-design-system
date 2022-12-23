import { ComponentStory, ComponentMeta } from "@storybook/react";
import LinkButton from "./LinkButton";
import React from "react";

export default {
  title: "Components/LinkButton",
  component: LinkButton,
  argTypes: {},
} as ComponentMeta<typeof LinkButton>;

const Template: ComponentStory<typeof LinkButton> = (args) => (
  <LinkButton {...args}></LinkButton>
);

export const Primary = Template.bind({});
Primary.args = {
  kind: "primary",
  text: "Collaborate with me",
  href: "https://www.stephensanwo.dev",
  hasIcon: true,
};

export const Secondary = Template.bind({});
Secondary.args = {
  kind: "secondary",
  text: "Collaborate with me",
  href: "https://www.stephensanwo.dev",
  hasIcon: true,
};

export const Danger = Template.bind({});
Danger.args = {
  kind: "danger",
  text: "Visit unknown url",
  href: "https://www.stephensanwo.dev",
  hasIcon: true,
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  kind: "tertiary",
  text: "Disabled Link",
  href: "https://www.stephensanwo.dev",
  hasIcon: true,
};

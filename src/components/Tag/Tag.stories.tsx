import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tag from "./Tag";
import React from "react";

export default {
  title: "Getting Started",
  component: Tag,
  argTypes: {},
} as ComponentMeta<typeof Tag>;

const Template: ComponentStory<typeof Tag> = (args) => <Tag {...args} />;

export const BlackTag = Template.bind({});
BlackTag.args = {
  text: "Beta",
  backgroundColor: "#000",
  color: "#fff",
};

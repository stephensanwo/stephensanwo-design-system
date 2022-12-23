import { ComponentStory, ComponentMeta } from "@storybook/react";
import Loader from "./Loader";
import React from "react";

export default {
  title: "Components/Loader",
  component: Loader,
  argTypes: {},
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const InlineLoader = Template.bind({});
InlineLoader.args = {
  size: 16,
};

import { ComponentStory, ComponentMeta } from "@storybook/react";
import InlineNotification from "./InlineNotification";
import React from "react";

export default {
  title: "Components/InlineNotification",
  component: InlineNotification,
  argTypes: {},
} as ComponentMeta<typeof InlineNotification>;

const Template: ComponentStory<typeof InlineNotification> = (args) => (
  <InlineNotification {...args} />
);

export const Warning = Template.bind({});
Warning.args = {
  kind: "warning",
  children: (
    <p>
      <strong>Warning! </strong>Inline warning notification
    </p>
  ),
};

export const Error = Template.bind({});
Error.args = {
  kind: "error",
  children: (
    <p>
      <strong>Error! </strong>Inline error notification
    </p>
  ),
};

export const Disabled = Template.bind({});
Disabled.args = {
  kind: "disabled",
  children: (
    <p>
      <strong>Disabled! </strong>Inline disabled notification
    </p>
  ),
};

export const Success = Template.bind({});
Success.args = {
  kind: "success",
  children: (
    <p>
      <strong>Success! </strong>Inline success notification
    </p>
  ),
};

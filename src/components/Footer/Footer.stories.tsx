import { ComponentStory, ComponentMeta } from "@storybook/react";
import Footer from "./Footer";
import React from "react";

export default {
  title: "Components/Footer",
  component: Footer,
  argTypes: {},
} as ComponentMeta<typeof Footer>;

const Template: ComponentStory<typeof Footer> = (args) => <Footer {...args} />;

export const BasicFooter = Template.bind({});
BasicFooter.args = {
  kind: "basic",
  hasFooterTitle: true,
  footerTitle: "Stephen Sanwo",
  children: (
    <div>
      <p>Design System</p>
    </div>
  ),
};

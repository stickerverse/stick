import { Component28 } from ".";

export default {
  title: "Components/Component28",
  component: Component28,

  argTypes: {
    variant: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "100\nitems",
    variant: "one",
    hover: true,
    className: {},
    component26Variant: "/img/component-1-56.png",
  },
};

import { Component20 } from ".";

export default {
  title: "Components/Component20",
  component: Component20,

  argTypes: {
    variant: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Start Here →",
    variant: "one",
    hover: true,
    className: {},
    linkPaintsClassName: {},
    hasOverlayShadow: true,
  },
};

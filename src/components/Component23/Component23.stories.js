import { Component23 } from ".";

export default {
  title: "Components/Component23",
  component: Component23,

  argTypes: {
    variant: {
      options: ["two", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "💌 Need help?",
    variant: "two",
    hover: true,
    className: {},
    hasLinkPaints: true,
    hasText: true,
    hasOverlayShadow: true,
    linkPaintsClassName: {},
    textClassName: {},
    overlayShadowClassName: {},
  },
};

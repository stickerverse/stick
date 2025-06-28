import { Component2 } from ".";

export default {
  title: "Components/Component2",
  component: Component2,

  argTypes: {
    variant: {
      options: ["two", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Go →",
    variant: "two",
    hover: true,
    className: {},
    linkPaintsClassName: {},
    overlayShadowClassName: {},
  },
};

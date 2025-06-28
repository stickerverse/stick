import { Component15 } from ".";

export default {
  title: "Components/Component15",
  component: Component15,

  argTypes: {
    variant: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Sign in",
    variant: "one",
    hover: true,
    className: {},
    buttonPaintsClassName: {},
    textClassName: {},
    overlayShadowClassName: {},
  },
};

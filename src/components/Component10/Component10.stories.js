import { Component10 } from ".";

export default {
  title: "Components/Component10",
  component: Component10,

  argTypes: {
    variant: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Continue shopping",
    variant: "one",
    hover: true,
    className: {},
    linkPaintsClassName: {},
    textClassName: {},
  },
};

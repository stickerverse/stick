import { Component29 } from ".";

export default {
  title: "Components/Component29",
  component: Component29,

  argTypes: {
    variant: {
      options: ["two", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: " Deals",
    variant: "two",
    hover: true,
    className: {},
    textClassName: {},
  },
};

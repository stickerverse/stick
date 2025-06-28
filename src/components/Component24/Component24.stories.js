import { Component24 } from ".";

export default {
  title: "Components/Component24",
  component: Component24,

  argTypes: {
    variant: {
      options: ["two", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "click here.",
    variant: "two",
    className: {},
    textClassName: {},
  },
};

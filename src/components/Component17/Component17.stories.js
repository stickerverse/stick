import { Component17 } from ".";

export default {
  title: "Components/Component17",
  component: Component17,

  argTypes: {
    variant: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "🛸 Shipping Process",
    variant: "one",
    className: {},
  },
};

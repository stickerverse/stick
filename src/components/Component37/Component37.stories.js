import { Component37 } from ".";

export default {
  title: "Components/Component37",
  component: Component37,

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

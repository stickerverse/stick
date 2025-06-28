import { Component16 } from ".";

export default {
  title: "Components/Component16",
  component: Component16,

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

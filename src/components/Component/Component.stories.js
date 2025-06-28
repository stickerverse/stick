import { Component } from ".";

export default {
  title: "Components/Component",
  component: Component,

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
    hover: true,
    className: {},
  },
};

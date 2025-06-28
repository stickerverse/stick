import { Component4 } from ".";

export default {
  title: "Components/Component4",
  component: Component4,

  argTypes: {
    variant: {
      options: ["two", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "two",
    hover: true,
    className: {},
    concreteComponentNodeVariant: "/img/component-1-14.png",
    concreteComponentNodeImg: "/img/component-1-10.png",
    concreteComponentNodeVariant1: "/img/component-1-12.png",
  },
};

import { Component31 } from ".";

export default {
  title: "Components/Component31",
  component: Component31,

  argTypes: {
    variant: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "100\nitems",
    variant: "one",
    hover: true,
    className: {},
    component30Variant: "/img/component-2-11.png",
  },
};

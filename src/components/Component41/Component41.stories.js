import { Component41 } from ".";

export default {
  title: "Components/Component41",
  component: Component41,

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
    component40Variant: "/img/component-2-29.png",
  },
};

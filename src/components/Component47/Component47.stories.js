import { Component47 } from ".";

export default {
  title: "Components/Component47",
  component: Component47,

  argTypes: {
    variant: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Email me with news and offers",
    variant: "one",
    className: {},
  },
};

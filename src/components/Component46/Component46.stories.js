import { Component46 } from ".";

export default {
  title: "Components/Component46",
  component: Component46,

  argTypes: {
    variant: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Save Details",
    variant: "one",
    className: {},
  },
};

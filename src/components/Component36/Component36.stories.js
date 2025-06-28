import { Component36 } from ".";

export default {
  title: "Components/Component36",
  component: Component36,

  argTypes: {
    variant: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Update Profile",
    variant: "one",
    className: {},
  },
};

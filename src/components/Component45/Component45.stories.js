import { Component45 } from ".";

export default {
  title: "Components/Component45",
  component: Component45,

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

import { Component43 } from ".";

export default {
  title: "Components/Component43",
  component: Component43,

  argTypes: {
    variant: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Profile",
    variant: "one",
    className: {},
    imgWrapperVariant: "/img/component-4-10.png",
  },
};

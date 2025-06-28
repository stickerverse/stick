import { Component32 } from ".";

export default {
  title: "Components/Component32",
  component: Component32,

  argTypes: {
    variant: {
      options: ["one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    text: "Homebase",
    variant: "one",
    className: {},
    variantWrapperVariant: "/img/component-4-2.png",
  },
};

import { Component13 } from ".";

export default {
  title: "Components/Component13",
  component: Component13,

  argTypes: {
    variant: {
      options: ["seven", "two", "three", "four", "one", "five", "six"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "seven",
    variantClassName: {},
    img: "/img/variant-7-3.png",
    variant1: "/img/variant-3-3.png",
    variant2: "/img/variant-5-3.png",
    variant3: "/img/variant-2-3.png",
    variant4: "/img/variant-4-3.png",
    variant5: "/img/variant-6-3.png",
  },
};

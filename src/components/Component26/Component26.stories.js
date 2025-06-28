import { Component26 } from ".";

export default {
  title: "Components/Component26",
  component: Component26,

  argTypes: {
    variant: {
      options: ["seven", "two", "three", "four", "one", "five", "eight", "six"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "seven",
    variantClassName: {},
    img: "/img/variant-4-5.png",
    variant1: "/img/variant-6-5.png",
    variant2: "/img/variant-8-2.png",
    variant3: "/img/variant-3-5.png",
    variant4: "/img/variant-5-5.png",
    variant5: "/img/variant-7-5.png",
  },
};

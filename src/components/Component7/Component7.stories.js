import { Component7 } from ".";

export default {
  title: "Components/Component7",
  component: Component7,

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
    img: "/img/variant-7-2.png",
    variant1: "/img/variant-3-2.png",
    variant2: "/img/variant-5-2.png",
    variant3: "/img/variant-2-2.png",
    variant4: "/img/variant-4-2.png",
    variant5: "/img/variant-6-2.png",
  },
};

import { Component1 } from ".";

export default {
  title: "Components/Component1",
  component: Component1,

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
    img: "/img/variant-3.png",
    variant1: "/img/variant-5.png",
    variant2: "/img/variant-8.png",
    variant3: "/img/variant-2.png",
    variant4: "/img/variant-4.png",
    variant5: "/img/variant-7.png",
  },
};

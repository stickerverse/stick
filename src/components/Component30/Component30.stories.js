import { Component30 } from ".";

export default {
  title: "Components/Component30",
  component: Component30,

  argTypes: {
    variant: {
      options: [
        "seven",
        "two",
        "ten",
        "three",
        "nine",
        "four",
        "one",
        "five",
        "eight",
        "six",
      ],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "seven",
    variantClassName: {},
    img: "/img/variant-2-5.png",
    variant1: "/img/variant-3-6.png",
    variant2: "/img/variant-4-6.png",
    variant3: "/img/variant-5-6.png",
    variant4: "/img/variant-8-3.png",
    variant5: "/img/variant-10-1.png",
    variant6: "/img/variant-1.png",
    variant7: "/img/variant-7-6.png",
    variant8: "/img/variant-9-1.png",
  },
};

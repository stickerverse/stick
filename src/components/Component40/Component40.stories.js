import { Component40 } from ".";

export default {
  title: "Components/Component40",
  component: Component40,

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
    img: "/img/variant-2-7.png",
    variant1: "/img/variant-3-8.png",
    variant2: "/img/variant-4-8.png",
    variant3: "/img/variant-5-7.png",
    variant4: "/img/variant-8-4.png",
    variant5: "/img/variant-10-2.png",
    variant6: "/img/variant-1-2.png",
    variant7: "/img/variant-7-7.png",
    variant8: "/img/variant-9-2.png",
  },
};

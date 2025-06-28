import { Component18 } from ".";

export default {
  title: "Components/Component18",
  component: Component18,

  argTypes: {
    variant: {
      options: [
        "seven",
        "two",
        "ten",
        "twelve",
        "three",
        "nine",
        "four",
        "eleven",
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
    img: "/img/variant-7-4.png",
    variant1: "/img/variant-9.png",
    variant2: "/img/variant-3-4.png",
    variant3: "/img/variant-12.png",
    variant4: "/img/variant-6-4.png",
    variant5: "/img/variant-8-1.png",
    variant6: "/img/variant-11.png",
    variant7: "/img/variant-2-4.png",
  },
};

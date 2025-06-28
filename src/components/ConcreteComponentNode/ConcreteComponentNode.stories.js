import { ConcreteComponentNode } from ".";

export default {
  title: "Components/ConcreteComponentNode",
  component: ConcreteComponentNode,

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
    img: "/img/variant-7-1.png",
    variant1: "/img/variant-3-1.png",
    variant2: "/img/variant-5-1.png",
    variant3: "/img/variant-2-1.png",
    variant4: "/img/variant-4-1.png",
    variant5: "/img/variant-6-1.png",
  },
};

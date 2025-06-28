import { VariantWrapper } from ".";

export default {
  title: "Components/VariantWrapper",
  component: VariantWrapper,

  argTypes: {
    variant: {
      options: ["two", "four", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "two",
    className: {},
    img: "/img/variant-1-1.png",
    variant1: "/img/variant-2-6.png",
    variant2: "/img/variant-3-7.png",
    variant3: "/img/variant-4-7.png",
  },
};

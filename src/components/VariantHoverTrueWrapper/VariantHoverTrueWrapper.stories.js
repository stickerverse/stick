import { VariantHoverTrueWrapper } from ".";

export default {
  title: "Components/VariantHoverTrueWrapper",
  component: VariantHoverTrueWrapper,

  argTypes: {
    variant: {
      options: ["two", "three", "one"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "two",
    hover: true,
    className: {},
    component1Variant: "/img/component-1-1.png",
    component1VariantClassName: {},
    component1Img: "/img/component-1-3.png",
    component1Variant1: "/img/component-1-5.png",
  },
};

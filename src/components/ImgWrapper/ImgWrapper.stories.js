import { ImgWrapper } from ".";

export default {
  title: "Components/ImgWrapper",
  component: ImgWrapper,

  argTypes: {
    variant: {
      options: ["two", "three", "four", "one", "five"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    variant: "two",
    className: {},
    img: "/img/variant-1-3.png",
    variant1: "/img/variant-2-8.png",
    variant2: "/img/variant-3-9.png",
    variant3: "/img/variant-4-9.png",
    variant4: "/img/variant-5-8.png",
  },
};

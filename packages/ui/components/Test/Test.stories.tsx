import { Button } from "@nextui-org/react";
import { tv } from "tailwind-variants";

export const Test = () => {
  return (
    <Button className="dark:bg-danger-500" color="primary">
      Test
    </Button>
  );
};

const customButton = tv({
  base: "font-medium bg-blue-500 text-white rounded-lg active:opacity-80",
  variants: {
    color: {
      primary: "bg-blue-500 text-white",
      secondary: "bg-purple-500 text-white",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "px-4 py-3 text-lg",
    },
  },
  compoundVariants: [
    {
      size: ["sm", "md"],
      class: "px-3 py-1",
    },
  ],
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export const Tva = () => {
  return (
    <button
      className={customButton({
        color: "primary",
        size: "lg",
      })}
    >
      Test
    </button>
  );
};

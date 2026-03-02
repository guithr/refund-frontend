import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

export const textVariants = tv({
  base: "font-sans text-gray-200",
  variants: {
    variant: {
      base: "text-sm leading-4 font-normal",
      "nav-link": "text-sm leading-6 font-semibold",
      "heading-large": "text-xl leading-5 font-bold",
      "label-base": "text-[10px] leading-3.5",
    },
  },
  defaultVariants: {
    variant: "base",
  },
});

interface TextProps extends VariantProps<typeof textVariants> {
  as?: keyof React.JSX.IntrinsicElements;
  children?: React.ReactNode;
  className?: string;
}
export function Text({
  as = "span",
  variant,
  className,
  children,
  ...props
}: TextProps) {
  return React.createElement(
    as,
    {
      className: textVariants({ variant, className }),
      ...props,
    },
    children,
  );
}

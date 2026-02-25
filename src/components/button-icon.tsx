import type React from "react";
import { Icon } from "./icon";
import { tv, type VariantProps } from "tailwind-variants";

export const buttonIconContainerVariants = tv({
  base: `
      inline-flex items-center justify-center
      cursor-pointer
      transition
      rounded-lg
    `,
  variants: {
    variant: {
      default: "bg-green-100 hover:bg-green-200",
    },
    size: {
      md: "h-12 p-3",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    disabled: false,
  },
});

export const buttonIconVariants = tv({
  variants: {
    variant: {
      default: "fill-white",
    },
    size: {
      md: "size-6",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

interface ButtonIconProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonIconContainerVariants> {
  icon: React.ComponentProps<typeof Icon>["svg"];
  disabled?: boolean;
}

export function ButtonIcon({
  icon,
  variant,
  size,
  disabled,
  className,
  type = "button",
  ...props
}: ButtonIconProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonIconContainerVariants({
        className,
        variant,
        size,
        disabled,
      })}
      {...props}
    >
      <Icon svg={icon} className={buttonIconVariants({ variant, size })} />
    </button>
  );
}

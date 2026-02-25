import type React from "react";
import { Icon } from "./icon";
import { tv, type VariantProps } from "tailwind-variants";
import { Text } from "./text";

export const buttonVariants = tv({
  base: `
        flex items-center justify-center
        cursor-pointer
        rounded-lg
        transition
        gap-2
        group
    `,
  variants: {
    variant: {
      default: "bg-green-100 hover:bg-green-200",
      link: "bg-transparent hover:bg-transparent",
    },
    size: {
      md: "h-12 px-5 py-4",
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
      default: "",
      link: "fill-green-100 group-hover:fill-green-200",
    },
    size: {
      md: "size-5",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

export const buttonTextVariants = tv({
  variants: {
    variant: {
      default: "text-white font-bold",
      link: "text-green-100 group-hover:text-green-200 font-semibold",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {
  icon?: React.ComponentProps<typeof Icon>["svg"];
  disabled?: boolean;
}

export function Button({
  variant,
  size,
  disabled,
  className,
  icon,
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonVariants({ variant, size, className, disabled })}
      {...props}
    >
      {icon && (
        <Icon svg={icon} className={buttonIconVariants({ variant, size })} />
      )}
      <Text className={buttonTextVariants({ variant })}>{children}</Text>
    </button>
  );
}

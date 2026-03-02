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
      disabled={disabled as boolean}
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

import { tv, type VariantProps } from "tailwind-variants";
import { Text } from "./text";

export const inputTextContainerVariants = tv({
  base: `
    flex flex-col gap-2 group
  `,
});

export const inputTextWrapperVariants = tv({
  base: `
    flex items-center
    bg-transparent
    border border-gray-300 rounded-lg
    focus-within:ring-2 focus-within:ring-green-100
    transition
  `,
  variants: {
    size: {
      md: "h-12 p-4",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
  },
});

export const inputTextLabelVariants = tv({
  base: `
  uppercase
  font-bold
    group-focus-within:text-green-100
  `,
});
export const inputTextVariants = tv({
  base: `
  bg-transparent
  text-gray-100
    placeholder:text-gray-200
    caret-green-100
    outline-none
  `,
});

interface InputTextProps
  extends
    VariantProps<typeof inputTextWrapperVariants>,
    Omit<React.ComponentProps<"input">, "size" | "disabled"> {
  label?: string;
  disabled?: boolean;
}

export function InputText({
  label,
  size,
  disabled,
  className,
  ...props
}: InputTextProps) {
  return (
    <div className={inputTextContainerVariants({})}>
      {label && (
        <Text variant="label-base" className={inputTextLabelVariants()}>
          {label}
        </Text>
      )}
      <div className={inputTextWrapperVariants({ size, disabled, className })}>
        <input
          type="text"
          className={inputTextVariants()}
          disabled={disabled}
          {...props}
        />
      </div>
    </div>
  );
}

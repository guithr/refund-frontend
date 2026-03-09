import { tv, type VariantProps } from "tailwind-variants";
import { Text } from "./text";

export const containerVariants = tv({
  base: `
    flex flex-col space-y-2 group
  `,
});
export const labelVariants = tv({
  base: "uppercase transition-all duration-200 group-focus-within:text-green-100 group-focus-within:font-bold",
});
export const inputVariants = tv({
  base: `
  text-gray-100 placeholder:text-gray-200
    bg-transparent
    border border-gray-300 rounded-lg
    transition-all duration-200
    focus:border-green-100
    caret-green-100
    outline-none
  `,
  variants: {
    size: {
      md: "h-12 p-4",
    },
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
  },
  defaultVariants: {
    size: "md",
    disabled: false,
  },
});
export const errorVariants = tv({
  base: "text-green-100 font-semibold -mt-1",
});

interface InputTextProps
  extends
    VariantProps<typeof containerVariants>,
    Omit<React.ComponentProps<"input">, "disabled"> {
  labelText?: string;
  error?: string;
  disabled?: boolean;
}

export function InputText({
  labelText,
  error,
  disabled,
  className,
  ...props
}: InputTextProps) {
  return (
    <div className={containerVariants({ className })}>
      {labelText && (
        <Text variant="label-base" className={labelVariants()}>
          {labelText}
        </Text>
      )}
      <input
        type="text"
        className={inputVariants({ disabled })}
        disabled={disabled}
        {...props}
      />
      {error && (
        <Text variant="body-sm-regular" className={errorVariants()}>
          {error}
        </Text>
      )}
    </div>
  );
}

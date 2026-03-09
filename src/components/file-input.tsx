import { Text } from "./text";
import CloudArrowUpIcon from "../assets/icons/CloudArrowUp.svg?react";
import { tv } from "tailwind-variants";
import React from "react";

export const containerVariant = tv({
  base: "flex flex-col gap-2 group",
});

export const wrapperVariant = tv({
  base: "flex items-center border justify-between transition border-gray-300 rounded-lg h-12 focus-within:border-green-100",
  variants: {
    disabled: {
      true: "opacity-50 pointer-events-none",
    },
  },
  defaultVariants: {
    disabled: false,
  },
});

export const labelVariants = tv({
  base: "uppercase transition-all duration-200 group-focus-within:text-green-100 group-focus-within:font-bold",
});

interface FileInputProps extends React.ComponentProps<"input"> {
  labelText?: string;
  error?: string;
  disabled?: boolean;
}

export function FileInput({
  labelText,
  error,
  placeholder,
  disabled,
  ...props
}: FileInputProps) {
  const [isEmpty, setIsEmpty] = React.useState(true);

  function checkEmpty(event: React.ChangeEvent<HTMLInputElement>) {
    setIsEmpty(event.target.files?.length === 0);
  }

  return (
    <label className={containerVariant({})}>
      {labelText && (
        <Text variant="label-base" className={labelVariants()}>
          {labelText}
        </Text>
      )}
      <div className={wrapperVariant({ disabled })}>
        <input
          disabled={disabled}
          type="file"
          className="file:hidden p-4 text-sm text-gray-200 outline-none peer"
          onChange={checkEmpty}
          {...props}
        />
        {isEmpty && (
          <Text variant="body-md-regular" className="text-gray-200">
            {placeholder}
          </Text>
        )}

        <div className="flex items-center justify-center py-4 px-3 h-12 transition bg-green-100 rounded-lg group-hover:peer-enabled:bg-green-200">
          <CloudArrowUpIcon className="fill-white size-6" />
        </div>
      </div>
      {error && <span>{error}</span>}
    </label>
  );
}

import * as RadixSelect from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "lucide-react";
import { tv } from "tailwind-variants";

const triggerVariants = tv({
  base: `
    relative flex flex-col group gap-2
    items-start w-full max-w-65.5
    outline-none transition-all
    text-2xs text-gray-200
    data-[state=open]:text-green-100
    data-[state=open]:font-bold
  `,
});

const triggerBoxVariants = tv({
  base: `
    w-full h-12 rounded-lg
    flex items-center justify-between gap-2
    border border-gray-300 px-4 py-3.5
    text-sm font-normal text-gray-100
    transition-all outline-none
    group-data-[state=open]:border-green-100
  `,
});

const contentVariants = tv({
  base: `
    w-(--radix-select-trigger-width)
    bg-gray-500 rounded-lg
    border border-gray-300
    flex flex-col py-2
    shadow-[0_2px_24px_0_rgba(0,0,0,0.08)]
  `,
});

const itemVariants = tv({
  base: `
    w-full flex items-center justify-between
    px-4 py-3 text-sm text-gray-100
    cursor-pointer outline-green-100
    hover:bg-gray-400 focus-visible:bg-gray-400
    data-[state=checked]:font-bold
  `,
});

const errorVariants = tv({
  base: "absolute normal-case bottom-0 left-0 translate-y-full text-sm font-medium text-green-100",
});

type Option = {
  value: string;
  label: string;
};

type SelectInputProps = RadixSelect.SelectProps & {
  labelText?: string;
  error?: string;
  options: Option[];
};

export function SelectInput({
  labelText,
  options,
  error,
  ...props
}: SelectInputProps) {
  return (
    <RadixSelect.Root {...props}>
      <RadixSelect.Trigger className={triggerVariants()}>
        {labelText && <span className="uppercase">{labelText}</span>}

        <div className={triggerBoxVariants()}>
          <RadixSelect.Value placeholder="Selecione" />
          <RadixSelect.Icon>
            <ChevronDownIcon />
          </RadixSelect.Icon>
        </div>

        {error && <span className={errorVariants()}>{error}</span>}
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          position="popper"
          sideOffset={4}
          className={contentVariants()}
        >
          <RadixSelect.Viewport className="w-full">
            {options.map((option) => (
              <RadixSelect.Item
                key={option.value}
                value={option.value}
                className={itemVariants()}
              >
                <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
                <RadixSelect.ItemIndicator>
                  <CheckIcon className="size-5 text-green-100" />
                </RadixSelect.ItemIndicator>
              </RadixSelect.Item>
            ))}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}

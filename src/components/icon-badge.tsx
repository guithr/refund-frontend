import { tv, type VariantProps } from "tailwind-variants";
import { Icon } from "./icon";
import { Skeleton } from "./skeleton";

const iconBadgeVariants = tv({
  base: "flex items-center justify-center rounded-full bg-gray-400",
  variants: {
    size: {
      md: "size-8.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

const iconBadgeIconVariants = tv({
  base: "fill-green-100",
  variants: {
    size: {
      md: "size-4.5",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

interface IconBadgeProps
  extends React.ComponentProps<"div">, VariantProps<typeof iconBadgeVariants> {
  icon: React.FC<React.ComponentProps<"svg">>;
  loading?: boolean;
}

export function IconBadge({
  icon,
  size,
  className,
  loading,
  ...props
}: IconBadgeProps) {
  if (loading) {
    return <Skeleton className="size-8.5" rounded="full" />;
  }
  return (
    <div className={iconBadgeVariants({ size, className })} {...props}>
      <Icon svg={icon} className={iconBadgeIconVariants({ size })} />
    </div>
  );
}
